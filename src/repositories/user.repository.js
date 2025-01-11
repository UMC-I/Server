import { prisma } from "../db.config.js";

// 나의 꿈 비공개로 설정하기
export const getPost = async (userId, postId) => {
    const post = await prisma.post.findFirst({
        where: {
            id: postId,
            userId: userId
        }
    })
    return post
}

export const patchOpen = async (data) =>{
    const post = await prisma.post.update({
        where: {
            id: data.postId,
            userId: data.userId
        },
        data: {
            open: data.open
        }
    });
    return post;
}

