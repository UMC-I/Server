
import {responseFromPost, responseFromAllPosts, responseFromDream, responseFromLike} from "../dtos/post.dto.js";
import {
    addPost,
    getPost,
    getAllPosts, getUserDream, getLikeCount, patchPostLike
  } from "../repositories/post.repository.js";

import { NotExistPost,ExsistsNotPostError } from "../errors/post.errors.js";


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
    return responseFromLike(
        {
            like
        });
};

export const listPosts = async (category) => {
  const posts = await getAllPosts(category);
  return responseFromAllPosts(posts);
};


// 꿈 상세보기
export const UserDreamView = async (data)=>{
    const dream = await getUserDream(data);

    if(!dream)
        throw new ExsistsNotPostError('게시물을 찾을 수 없음', data)

    const likeCount = await getLikeCount(data);
    return responseFromDream({dream, likeCount})
}