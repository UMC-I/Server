import { prisma } from "../db.config.js";
import { ExsistsNotPostError } from "../errors/post.errors.js";
// 게시물 생성
export const addPost = async (data) => {
  const created = await prisma.post.create({ data: data });
  return created.id;
};
export const getPost = async (postId) => {
  const post = await prisma.post.findFirstOrThrow({ where: { id: postId } });
  return post;
};

// 게시물 좋아요 누르기
export const patchPostLike = async (data) => {
  console.log(data);

  // const like = await prisma.likes.upsert({
  //     where: {
  //         userId: data.userId,
  //         postId: data.postId,
  //     },
  //     update: {
  //         status: data.status
  //     },
  //     create: {
  //         postId: data.postId,
  //         userId: data.userId,
  //         status: data.status
  //     },
  // });
  const post = await prisma.post.findFirst({
    where: {
      id: data.postId,
    },
  });
  if (!post) {
    return null;
  }
  const likeid = await prisma.likes.findFirst({
    where: {
      userId: data.userId,
      postId: data.postId,
    },
  });

  let like;
  if (likeid) {
    like = await prisma.likes.update({
      where: {
        id: likeid.id,
      },
      data: {
        status: data.status,
      },
    });
  } else {
    like = await prisma.likes.create({ data: data });
  }
  return like;
};

export const getAllPosts = async (category) => {
  if (category != "공포" && category != "개꿈" && category != "일상")
    throw new ExsistsNotPostError("존재하지 않는 카테코리입니다.", category);

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

//해당 게시물의 상세정보 가져오기
export const getUserDream = async (data) => {
  const dream = await prisma.post.findFirst({
    where: { id: data.postId },
    select: {
      id: true,
      title: true,
      content: true,
      category: true,
    },
  });

  return dream;
};

// 해당 게시물의 좋아요 수 가져오기
export const getLikeCount = async (data) => {
  const like = await prisma.likes.count({
    where: { postId: data.postId },
  });

  return like;
};
