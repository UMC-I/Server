import { prisma } from "../db.config.js";
export const addUser = async (data) => {
    const user = await prisma.user.findFirst({ where: { email: data.email } });
    if (user) {
        return null;
    }
    const created = await prisma.user.create({ data: data });
    return created.id;
};
export const getUser = async (userId) => {
    const user = await prisma.user.findFirstOrThrow({ where: { id: userId } });
    return user;
};

// 나의 꿈 비공개로 설정하기
export const patchOpen= async (data) =>{
    const post = await prisma.post.update({
        where: {
            id: data.postId,
            userId: data.userId
        },
        data: {
            open: data.open
        }
    });
    return post
}