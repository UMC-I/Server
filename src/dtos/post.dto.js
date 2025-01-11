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

// 게시물 좋아요 누르기
export const bodyToLike = (body) => {
    return {
        status: body.status,
    }
};
export const responseFromLike = ({ like }) => {
    return {
        like: like
    }
};

export const responseFromAllPosts = (posts) => {
  const AllPosts = posts.map((post) => ({
    postId: post.id,
    title: post.title,
    content: post.content,
    category: post.category,
  }));

  return {
    success: AllPosts,
  };
};
