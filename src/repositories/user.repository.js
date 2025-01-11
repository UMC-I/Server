import { prisma } from "../db.config.js";

// 나의 게시물 조회( 나의 꿈 조회)
export const getUserDreams = async (data) =>{
    const dreams = await prisma.post.findMany({
        where:{userId: 1},
        select:{
            id: true,
            title: true,
            content: true,
            open: true,
        },
        orderBy:{
            createdAt: 'desc'
        }
    })
    return dreams;
}

// 나의 정보 조회
export const getUser = async (data) =>{
    const user = await prisma.user.findFirst({
        where: {id: 7},
    })
    return user;
}