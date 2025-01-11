import {ExsistsNotUserError} from "../errors/user.errors.js";

export const bodyToUser = (body) => {
    return {
        name: body.name,
        email: body.email
    }
};
export const responseFromUser = ({ user }) => {
    return {
        email: user.email,
        name: user.name
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