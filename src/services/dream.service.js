// services/dream.service.js
import OpenAI from "openai";
import {
  getPost,
  getExistingDream,
  createDream,
} from "../repositories/dream.repository.js";
import { responseFromDream } from "../dtos/dream.dto.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateDreamDescription = async (postId) => {
  const post = await getPost(postId);
  if (!post) {
    throw new Error("게시글을 찾을 수 없습니다.");
  }

  const existingDream = await getExistingDream(postId);
  if (existingDream) {
    return responseFromDream(existingDream);
  }

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "넌 전문적인 꿈 해석가야. 주어진 꿈 내용을 해석해서 의미있는 조언을 반말로 해줘. 대신 90자 이내로 해석해줘.",
      },
      {
        role: "user",
        content: post.content,
      },
    ],
    max_tokens: 150,
  });

  const interpretation = completion.choices[0].message.content;

  const savedDream = await createDream({
    postId,
    userId: post.userId,
    content: interpretation,
  });

  return responseFromDream(savedDream);
};
