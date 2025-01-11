export const bodyToPost = (body) => {
  return {
    title: body.title,
    content: body.content,
    category: body.category,
    open: body.open,
  };
};
export const responseFromPost = ({ post }) => {
  return {
    post: post,
  };
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
