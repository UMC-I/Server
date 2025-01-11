import { responseFromUser, responseFromUserPostOpen } from "../dtos/user.dto.js";;
import {
    patchOpen,
} from "../repositories/user.repository.js";
import { DuplicateUserEmailError } from "../errors/errors.js";

export const userSignUp = async (data) => {
    const UserId = await addUser({
        name: data.name,
        email: data.email,
    });

    if (UserId === null) {
        throw new DuplicateUserEmailError("이미 존재하는 이메일입니다.", data);
    }

    const user = await getUser(UserId);
    return responseFromUser(
        {
            user
        });
};

// 나의 꿈 비공개로 설정하기
export const patchPostOpen = async (userId, data) => {
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