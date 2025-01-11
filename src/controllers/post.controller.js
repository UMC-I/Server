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
};
