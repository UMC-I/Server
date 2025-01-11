import { responseFromPost } from "../dtos/post.dto.js";
import { NotExistPost } from "../errors/post.errors.js";
import {
    addPost,
    getPost,
    patchPostLike
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

// 게시물 좋아요 누르기
export const patchLike = async (userId, postId, data) => {
    const like = await patchPostLike({
        userId: userId,
        postId: postId,
        status: data.status,
    });
    if (like === null) {
        throw new NotExistPost("게시판이 존재하지 않습니다.", data)
    }
    return responseFromPost(
        {
            like
        });
};