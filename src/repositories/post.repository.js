import { prisma } from "../db.config.js";
// 게시물 생성
export const addPost = async (data) => {
    const created = await prisma.post.create({ data: data });
    return created.id;
};
export const getPost = async (postId) => {
    const post = await prisma.post.findFirstOrThrow({ where: { id: postId } });
    return post;
};