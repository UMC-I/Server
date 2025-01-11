// repositories/dream.repository.js
import { prisma } from "../db.config.js";

export const getPost = async (postId) => {
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
