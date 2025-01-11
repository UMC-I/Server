import { responseFromPost } from "../dtos/post.dto.js";;
import {
    addPost,
    getPost
} from "../repositories/post.repository.js";
//import { DuplicateUserEmailError } from "../errors/errors.js";

export const postAdding = async (userId, data) => {
    const postId = await addPost({
        userId: userId,
        title: data.title,
        content: data.content,
        category: data.category,
        open: data.open
    });

    const post = await getPost(postId);
    return responseFromPost(
        {
            post
        });
};