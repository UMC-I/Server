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
// 나의 꿈 비공개로 설정하기
export const bodyToUserPostOpen = (body) => {
    return {
        postId: body.postId,
        open: body.open
    }
};
export const responseFromUserPostOpen = ({ user }) => {
    return {
        postId: user.postId,
        open: user.open
    }
};