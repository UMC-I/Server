import { prisma } from "../db.config.js";
import { ExsistsNotPostError } from "../errors/post.errors.js";

export const getPost = async (postId) => {
  const post = await prisma.post.findFirst({
    where: { id: postId },
  });

  if (!post) {
    throw new ExsistsNotPostError("게시글을 찾을 수 없습니다.");
  }

  return await prisma.post.findUnique({
    where: { id: postId },
    select: {
      id: true,
      content: true,
      userId: true,
    },
  });
};

export const getExistingDream = async (postId) => {
  return await prisma.dream.findFirst({
    where: {
      postId,
    },
  });
};

export const createDream = async (dreamData) => {
  return await prisma.dream.create({
    data: {
      content: dreamData.content,
      user: {
        connect: {
          id: dreamData.userId, // post에서 가져온 userId
        },
      },
      post: {
        connect: {
          id: dreamData.postId,
        },
      },
    },
  });
};
