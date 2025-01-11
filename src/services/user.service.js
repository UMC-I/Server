import {responseFromUserPosts} from "../dtos/user.dto.js";;
import {
    getUser,
    getUserDreams
} from "../repositories/user.repository.js";
import {ExsistsNotUser} from "../errors/user.errors.js";


//내가 쓴 게시물 조회(나의 꿈 조회)
export const myPageGetDream = async (data) =>{

    const user = await getUser(data);
    if(!user){
        throw new ExsistsNotUser("존재하지 않는 유저입니다.",data.userId)
    }

    const dreams = await getUserDreams(data);
    return responseFromUserPosts(dreams);
}