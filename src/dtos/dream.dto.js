// dtos/dream.dto.js
export const responseFromDream = (dream) => {
  return {
    success: {
      id: dream.id,
      postId: dream.postId,
      content: dream.content,
    },
  };
};
