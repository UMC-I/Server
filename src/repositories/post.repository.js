import { prisma } from "../db.config.js";
export const addPost = async (data) => {
  const created = await prisma.post.create({ data: data });
  return created.id;
};
export const getPost = async (postId) => {
  const post = await prisma.post.findFirstOrThrow({ where: { id: postId } });
  return post;
};

export const getAllPosts = async (category) => {
  if (category != "공포" && category != "개꿈" && category != "일상")
    throw new Error("존재하지 않는 카테코리입니다.");

  const posts = await prisma.post.findMany({
    where: {
      category: category,
    },
    select: {
      id: true,
      title: true,
      content: true,
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return posts;
};
