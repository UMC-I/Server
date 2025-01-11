import {responseFromUserPosts} from "../dtos/user.dto.js";;
import {
    getUser,
    getUserDreams
} from "../repositories/user.repository.js";
import {ExsistsNotUserError} from "../errors/user.errors.js";


//내가 쓴 게시물 조회(나의 꿈 조회)
export const myPageGetDream = async (data) =>{

    const user = await getUser(data);
    if(!user){
        throw new ExsistsNotUserError("존재하지 않는 유저입니다.")
    }

    const dreams = await getUserDreams(data);
    return responseFromUserPosts(dreams);
}