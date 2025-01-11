
import {ExsistsNotUserError, NotSocialError} from "../errors/user.errors.js";



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
export const userToPosts = (user,query) =>{
    if(user)
        throw new NotSocialError("소셜 로그인을 진행해주세요")
    return{
        userId: user.id,
        page: parseInt(query.page)
    }
}


// 내가 쓴 게시물 조회( 나의 꿈 조회) 전송 DTO
export const responseFromUserPosts = (data) =>{
    return{
        page: data.page,
        data: data.dreams
    }
}

