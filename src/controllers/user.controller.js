import { StatusCodes } from "http-status-codes";
import {bodyToUser, userToPosts} from "../dtos/user.dto.js";
import {myPageGetDream } from "../services/user.service.js";


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
                errorCode: { type: "string", example: "U001", description: "에러 코드" },
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

