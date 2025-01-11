import { responseFromPost, responseFromAllPosts } from "../dtos/post.dto.js";
import {
  addPost,
  getPost,
  getAllPosts,
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
  return responseFromPost({
    post,
  });
};

export const listPosts = async (category) => {
  const posts = await getAllPosts(category);
  return responseFromAllPosts(posts);
};
