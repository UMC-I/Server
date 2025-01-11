import { StatusCodes } from "http-status-codes";
import { listPostRank } from "../services/home.service.js";

export const handleListPostRank = async (req, res, next) => {
  /*
    #swagger.summary = '랭킹 조회 API';
    #swagger.tags = ['Home']
    #swagger.responses[200] = {
      description: "랭킹 조회 성공",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "SUCCESS" },
              error: { type: "object", nullable: true, example: null },
              success: {
                type: "object",
                properties: {
                  postId: { type: "number" },
                  title: { type: "string" },
                  likes: { type: "number" },
                }
              }
            }
          }
        }
      }
    };
    #swagger.responses[404] = {
      description: "존재하지 않는 게시물 데이터",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "FAIL" },
              error: {
                type: "object",
                properties: {
                  errorCode: { type: "string" },
                  reason: { type: "string" },
                  data: { type: "object" }
                }
              },
              success: { type: "object", nullable: true, example: null }
            }
          }
        }
      }
    };
  */
  try {
    const posts = await listPostRank();
    res.status(StatusCodes.OK).success(posts);
  } catch (error) {
    next(error); // 에러 핸들러로 전달
  }
};
