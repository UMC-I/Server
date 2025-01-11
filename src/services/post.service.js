import { responseFromPost } from "../dtos/post.dto.js";;
import {
    addPost,
    getPost
} from "../repositories/post.repository.js";

// 게시물 생성
export const postAdding = async (userId, data) => {
    const postId = await addPost({
        userId: userId,
        title: data.title,
        content: data.content,
        category: data.category,
    });

    const post = await getPost(postId);
    return responseFromPost(
        {
            post
        });
};