import { StatusCodes } from "http-status-codes";
import { bodyToPost } from "../dtos/post.dto.js";
import { postAdding } from "../services/post.service.js";

export const handleListPost = async (req, res, next) => {
  /*
    #swagger.summary = '장르에 따른 게시글 조회 API';
    #swagger.tags = ['Post']
     #swagger.parameters = [{
        in: 'query',
        name: 'genre',
        description: '장르 선택',
        required: false,
        type: 'string',
        example: 'horror'
    }]
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

export const handleCreatePost = async (req, res, next) => {
  /*
    #swagger.summary = '게시글 추가 API';
    #swagger.tags = ['Post']
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              title: { type: "string" },
              content: { type: "string" },
              category: { type: "string" },
              open: { type: "boolean" },
            }
          }
        }
      }
    };
    #swagger.responses[200] = {
      description: "게시글 정상 작성 응답",
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
                  category: { type: "string" },
                  open: { type: "boolean" },
                }
              }
            }
          }
        }
      }
    };
    #swagger.responses[400] = {
      description: "값 누락",
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
    console.log("body:", req.body); // 값이 잘 들어오나 확인하기 위한 테스트용
        const post = await postAdding(req.user.id, bodyToPost(req.body));
        res.status(StatusCodes.OK).success(post);
    } catch (err) {
        return next(err);
    }
};



// 꿈 상세 조회
export const handlerGetPostView = async (req,res) =>{
    /*
  #swagger.summary = '꿈 상세 조회 API';
  #swagger.tags = ['Post']
  #swagger.parameters['postId'] = {
    in: 'path',
    description: "게시물 ID",
    required: true,
    type: "integer",
  }

  #swagger.responses[200] = {
    description: "꿈 상세 조회 성공 응답",
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
                userId: { type: "integer", example: 1, description: "유저의 고유 ID" },
                postId: { type: "integer", example: 1, description: "게시물의 고유 ID" },
                title: { type: "string", example: "구름 속 칼국수" },
                content: {
                  type: "string"
                },
                likeCheck: { type: "boolean", example: true }
              }
            }
          }
        }
      }
    }
  };

  #swagger.responses[400] = {
    description: "꿈 상세 조회 실패",
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
                reason: { type: "string", example: "게시물을 찾을 수 없음" },
                data: {
                  type: "object",
                  properties: {
                    postId: { type: "integer", example: 1 }
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

// 게시물 좋아요 누르기
export const handlerPostLike = async (req,res) =>{
    /*
 #swagger.summary = '게시물 좋아요 누르기API';
 #swagger.tags = ['Post']
 #swagger.parameters['postId'] = {
   in: 'path',
   description: "게시물 ID",
   required: true,
   type: "integer",
 }

 #swagger.responses[200] = {
   description: "게시물 좋아요 누르기 성공 응답",
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
               userId: { type: "integer", example: 1, description: "유저의 고유 ID" },
               postId: { type: "integer", example: 1, description: "게시물의 고유 ID" },
               likeCheck: { type: "boolean", example: true }
             }
           }
         }
       }
     }
   }
 };

 #swagger.responses[400] = {
   description: "게시물 좋아요 누르기 실패",
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
               reason: { type: "string", example: "게시물을 찾을 수 없음" },
               data: {
                 type: "object",
                 properties: {
                   postId: { type: "integer", example: 1 }
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

