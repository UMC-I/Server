import {responseFromPost, responseFromAllPosts, responseFromDream} from "../dtos/post.dto.js";
import {
    addPost,
    getPost,
    getAllPosts, getUserDream, getLikeCount,
} from "../repositories/post.repository.js";
import {ExsistsNotPostError} from "../errors/post.errors.js";

// 게시물 생성
export const postAdding = async (userId, data) => {
    const postId = await addPost({
        userId: userId,
        title: data.title,
        content: data.content,
        category: data.category,
    });

  const post = await getPost(postId);
  return responseFromPost({
    post,
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