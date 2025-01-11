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


// 꿈 상세조회 요청 DTO
export const dreamToView = (params) =>{
    return{
        postId: params.postId
    }
}

// 꿈 상세조회 전송 DTO
export const responseFromDream = (data) =>{
    return {
        postId: data.dream.id,
        title: data.dream.title,
        content: data.dream.content,
        category: data.dream.category,
        likeCount: data.likeCount
    }
}