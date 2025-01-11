// controllers/dream.controller.js
import { StatusCodes } from "http-status-codes";
import { generateDreamDescription } from "../services/dream.service.js";

export const handleGenerateDreamDescription = async (req, res, next) => {
  /*
    #swagger.summary = '꿈 해석 생성 API'
    #swagger.tags = ['Dream']
    #swagger.responses[200] = {
      description: "꿈 해석 생성 성공",
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
                  id: { type: "number" },
                  postId: { type: "number" },
                  userId: { type: "number" },
                  content: { type: "string" },
                  createdAt: { type: "string" }
                }
              }
            }
          }
        }
      }
    }
  */
  try {
    const postId = BigInt(req.params.postId);
    const result = await generateDreamDescription(postId);
    res.status(StatusCodes.OK).success(result);
  } catch (error) {
    next(error);
  }
};
