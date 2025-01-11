
import {ExsistsNotUserError} from "../errors/user.errors.js";



// 나의 꿈 비공개로 설정하기
export const bodyToUserPostOpen = (body) => {

    return {
        postId: body.postId,
        open: body.open
    }
};
export const responseFromUserPostOpen = ({ post }) => {
    return {
        postId: post.postId,
        open: post.open
    }
};


// 내가 쓴 게시물 가져오기(나의 꿈 가져오기) 요청 DTO
export const userToPosts = (user) =>{
    console.log(user)
    return{
        userId: user.id,
    }
}


// 내가 쓴 게시물 조회( 나의 꿈 조회) 전송 DTO
export const responseFromUserPosts = (data) =>{
    return{
        data: data
    }
}