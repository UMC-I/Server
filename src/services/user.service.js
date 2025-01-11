
import {responseFromUserPosts, responseFromUserPostOpen} from "../dtos/user.dto.js";;
import {
    getUser,
    getUserDreams,
  patchOpen, getPost
} from "../repositories/user.repository.js";
import {ExsistsNotUserError, NotExistPost } from "../errors/user.errors.js";


//내가 쓴 게시물 조회(나의 꿈 조회)
export const myPageGetDream = async (data) => {

    const user = await getUser(data);
    if (!user) {
        throw new ExsistsNotUserError("해당 유저를 찾을 수 없습니다.")
    }

    const dreams = await getUserDreams(data);
    console.log(dreams)
    return responseFromUserPosts(dreams);
}

// 나의 꿈 비공개로 설정하기
export const patchPostOpen = async (userId, data) => {
    const postValid = await getPost(userId, data.postId)
    if (!postValid) {
        throw new NotExistPost("존재하지 않는 게시판입니다.", data);
    }
    const post = await patchOpen({
        userId: userId,
        postId: data.postId,
        open: data.open
    });

    return responseFromUserPostOpen({post});
};


