import { responseFromUserPostOpen } from "../dtos/user.dto.js";;
import { patchOpen, getPost } from "../repositories/user.repository.js";
import { NotExistPost } from "../errors/user.errors.js"
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
    

    return responseFromUserPostOpen(
        {
            post
        });
};