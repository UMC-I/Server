import { prisma } from "../db.config.js";

export const getPostRank = async () => {
  try {
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        _count: {
          select: {
            likes: {
              where: {
                status: true, // status가 true인 likes만 카운트
              },
            },
          },
        },
      },
      orderBy: {
        likes: {
          _count: "desc", // likes 관계의 수를 기준으로 정렬
        },
      },
      take: 3,
    });

    return posts;
  } catch (error) {
    console.error("Error in getPostRank:", error);
    throw error;
  }
};
