import { StatusCodes } from "http-status-codes";

import {userToPosts, bodyToUserPostOpen} from "../dtos/user.dto.js";
import {myPageGetDream,patchPostOpen } from "../services/user.service.js";

import { NotSocialError } from "../errors/post.errors.js";

// 나의 꿈 비공개로 설정하기
export const handlerReleaseOption = async(req,res, next) =>{
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
                        postId: { type: "integer", example: 1 },
                        open: { type: "boolean", example: false }
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
                      type: "boolean",
                      example: "0",
                      description: "게시물 공개 여부 ('0' 또는 '1')"
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
                    errorCode: { type: "string", example: "P001" },
                    reason: { type: "string", example: "유저를 찾을 수 없음" },
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
      #swagger.responses[404] = {
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
                    errorCode: { type: "string", example: "P002" },
                    reason: { type: "string", example: "게시물를 찾을 수 없음" },
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
  try {
     if (!req.user) {
      throw new NotSocialError("소셜 로그인을 해주세요.", req.user)
    }
    console.log("body:", req.body); // 값이 잘 들어오나 확인하기 위한 테스트용
        const user = await patchPostOpen(req.user.id, bodyToUserPostOpen(req.body));
        res.status(StatusCodes.OK).success(user);
    } catch (err) {
        return next(err);
    }
}

// 나의 꿈 조회(내가 작성한 게시글 조회)
export const handleListMyPost = async (req, res, next) => {
    const dreams = await myPageGetDream(userToPosts(req.user))
    res.status(StatusCodes.OK).success(dreams)
    /*
  #swagger.summary = '사용자가 작성한 게시글 조회 API';
  #swagger.tags = ['User']

  #swagger.responses[200] = {
    description: "내가 작성한 게시글 조회 성공",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "SUCCESS", description: "결과 상태 (성공 여부)" },
            error: { type: "object", nullable: true, example: null, description: "에러 정보 (없을 경우 null)" },
            success: {
              type: "object",
              properties: {
                data: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "integer", example: 1, description: "게시물 ID" },
                      title: { type: "string", example: "첫 번째 게시물", description: "게시물 제목" },
                      content: { type: "string", example: "첫 번째 게시물의 내용입니다.", description: "게시물 내용" },
                      open: { type: "boolean", example: true, description: "게시물 공개 여부 (true: 공개, false: 비공개)" },
                      category: { type: "string", example: "개꿈" }
                    }
                  },
                  description: "작성한 게시물의 데이터 배열"
                }
              }
            }
          }
        }
      }
    }
  };

  #swagger.responses[400] = {
    description: "해당 유저가 존재하지 않을 때",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL", description: "결과 상태 (실패 여부)" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "U003", description: "에러 코드" },
                reason: { type: "string", example: "해당 유저를 찾을 수 없습니다.", description: "에러 이유" },
                data: {
                  type: "object",
                  properties: {
                    userId: { type: "integer", example: 1, description: "존재하지 않는 유저의 ID" }
                  }
                }
              }
            },
            success: { type: "object", nullable: true, example: null, description: "성공 결과 (없을 경우 null)" }
          }
        }
      }
    }
  };
*/

};

