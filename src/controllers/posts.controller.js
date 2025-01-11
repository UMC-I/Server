

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

