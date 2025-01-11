export const responseFromPostRank = (posts) => {
  const rankedPosts = posts.map((post) => ({
    postId: post.id,
    title: post.title,
    likes: post._count.likes,
  }));

  return {
    success: rankedPosts,
  };
};
