import { StatusCodes } from "http-status-codes";
import { listPosts } from "../services/post.service.js";

export const handleListPost = async (req, res, next) => {
  /*
    #swagger.summary = '카테고리에 따른 게시글 조회 API';
    #swagger.tags = ['Post']
    #swagger.responses[200] = {
      description: "게시글 조회 성공",
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
                  content: { type: "string" },
                  likes: { type: "number" },
                }
              }
            }
          }
        }
      }
    };
    #swagger.responses[400] = {
      description: "존재하지 않는 카테고리",
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
    const category = req.query.category?.replace(/['"]+/g, "");
    const posts = await listPosts(category);
    res.status(StatusCodes.OK).success(posts);
  } catch (error) {
    next(error);
  }
};
