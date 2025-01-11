import { prisma } from "../db.config.js";


// 나의 게시물 조회( 나의 꿈 조회)
export const getUserDreams = async (data) =>{
    const pageSize = 6;
    const dreams = await prisma.post.findMany({
        where:{userId: data.userId},
        select:{
            id: true,
            title: true,
            open: true,
            category: true
        },
        orderBy:{
            createdAt: 'desc'
        },
        take: pageSize,
        skip: (data.page - 1) * pageSize
    })

    const page = data.page

    return {dreams, page};
}

// 나의 정보 조회
export const getUser = async (data) =>{
    const user = await prisma.user.findFirst({
        where: {id: data.userId},
    })
    return user;
}

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
