// 게시물 생성
export const bodyToPost = (body) => {
    return {
        title: body.title,
        content: body.content,
        category: body.category,
    }
};
export const responseFromPost = ({ post }) => {
    return {
        post: post
    }
};