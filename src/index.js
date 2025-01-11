import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import {
  handleUserSignUp,
  handleListMyPost,
} from "./controllers/user.controller.js";
import { handleListPostRank } from "./controllers/home.controller.js";
import {
  handleListPost,
  handleCreatePost,
} from "./controllers/post.controller.js";
import swaggerUiExpress from "swagger-ui-express";
import swaggerAutogen from "swagger-autogen";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors({ origin: "*" }));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  "/docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(
    {},
    {
      swaggerOptions: {
        url: "/openapi.json",
      },
    }
  )
);
app.get("/openapi.json", async (req, res, next) => {
  // #swagger.ignore = true
  const options = {
    openapi: "3.0.0",
    disableLogs: true,
    writeOutputFile: false,
  };
  const outputFile = "/dev/null"; // 파일 출력은 사용하지 않습니다.
  const routes = ["./src/index.js"];

  // 요청의 host와 protocol을 동적으로 가져오기
  const protocol = req.protocol; // http 또는 https
  const host = req.get("host");

  const doc = {
    info: {
      title: "Mongddang",
      description: "Mongddang 프로젝트",
    },
    host: `${protocol}://${host}`,
  };

  const result = await swaggerAutogen(options)(outputFile, routes, doc);
  res.json(result ? result.data : null);
});

//---------------------------------
app.use((req, res, next) => {
  res.success = (success) => {
    return res.json({ resultType: "SUCCESS", error: null, success });
  };
  res.error = ({ errorCode = "unknown", reason = null, data = null }) => {
    return res.json({
      resultType: "FAIL",
      error: { errorCode, reason, data },
      success: null,
    });
  };
  next();
});

//--------------------------------

app.get("/", (req, res, next) => {
  res.send("Hello World!");
});
app.post("/test", handleUserSignUp);

// 홈 화면에에서 3개의 랭크 조회
app.get("/home/posts/rank", handleListPostRank);

// 각 장르별 게시물 조회
app.get("/posts", handleListPost);

// 게시물 생성
app.post("/users/posts", handleCreatePost);

// 내가 작성한 게시물 조회 (제목, 내용 일부, 비공개 여부)
app.get("/my-posts", handleListMyPost);

//--------------------------------

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  res.status(err.statusCode || 500).error({
    errorCode: err.errorCode || "unknown",
    reason: err.reason || err.message || null,
    data: err.data || null,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
