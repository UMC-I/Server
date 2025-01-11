export const bodyToPost = (body) => {
    return {
        title: body.title,
        content: body.content,
        category: body.category,
        open: body.open

    }
};
export const responseFromPost = ({ post }) => {
    return {
        post: post
    }
};