import { StatusCodes } from "http-status-codes";
import { bodyToUser } from "../dtos/user.dto.js";
import { userSignUp } from "../services/user.service.js";

export const handleUserSignUp = async (req, res, next) => {
  try {
    console.log("회원가입을 요청했습니다!");
    console.log("body:", req.body); // 값이 잘 들어오나 확인하기 위한 테스트용

        const user = await userSignUp(bodyToUser(req.body));
        res.status(StatusCodes.OK).success(user);
    } catch (err) {
        return next(err);
    }
};


// 나의 꿈 비공개로 설정하기
export const handlerReleaseOption = async(req,res) =>{
    /*
      #swagger.summary = '나의 꿈 공개 여부 수정 API';
      #swagger.tags = ['User']
      #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    required: ["userId", "postId", "open"],
                    properties: {
                        partyName: { type: "integer", example: 1 },
                        name: { type: "integer", example: 1 },
                        open: { type: "string", example: "private" }
                    }
                }
            }
        }
     }

      #swagger.responses[200] = {
        description: "나의 꿈 공개 여부 수정 성공 응답",
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
                    postId: { type: "integer", example: 1, description: "게시물의 고유 ID" },
                    userId: { type: "integer", example: 1, description: "유저의 고유 ID" },
                    open: {
                      type: "string",
                      example: "private",
                      description: "게시물 공개 여부 ('public' 또는 'private')"
                    }
                  }
                }
              }
            }
          }
        }
      };

      #swagger.responses[400] = {
        description: "나의 꿈 공개 여부 수정 실패 응답",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                resultType: { type: "string", example: "FAIL" },
                error: {
                  type: "object",
                  properties: {
                    errorCode: { type: "string", example: "U001" },
                    reason: { type: "string", example: "게시물 또는 유저를 찾을 수 없음" },
                    data: {
                      type: "object",
                      properties: {
                        postId: { type: "integer", example: 1 },
                        userId: { type: "integer", example: 1 }
                      }
                    }
                  }
                },
                success: { type: "object", nullable: true, example: null }
              }
            }
          }
        }
      };

    */

}

export const handleListMyPost = async (req, res, next) => {
  /*
    #swagger.summary = '내가 작성한 게시글 조회 API';
    #swagger.tags = ['User']
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
                  open: { type: "boolean" },
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
};

