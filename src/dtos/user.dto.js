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