import { getPostRank } from "../repositories/home.repository.js";
import { responseFromPostRank } from "../dtos/home.dto.js";

export const listPostRank = async () => {
  try {
    const posts = await getPostRank();
    return responseFromPostRank(posts);
  } catch (error) {
    console.error("Service error:", error);
    throw error;
  }
};
