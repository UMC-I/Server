import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import {handlerReleaseOption, handleListMyPost} from "./controllers/user.controller.js";
import swaggerUiExpress from "swagger-ui-express";
import swaggerAutogen from "swagger-autogen";
import {
  handlerGetPostView,
  handlerPostLike,
} from "./controllers/post.controller.js";
import { handleListPostRank } from "./controllers/home.controller.js";
import {
  handleListPost,
  handleCreatePost,
} from "./controllers/post.controller.js";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import session from "express-session";
import passport from "passport";
import { kakaoStrategy } from "./auth.config.js";
import { prisma } from "./db.config.js";

BigInt.prototype.toJSON = function () {
  // bigint 호환
  const int = Number.parseInt(this.toString());
  return int ?? this.toString();
};

dotenv.config();

passport.use(kakaoStrategy);
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

const app = express();
const port = process.env.PORT;
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

app.use(cors({ origin: "*" }));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // ms
    },
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000, // ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

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

//--------------------------------
app.get(
  "/oauth2/login/kakao",
  passport.authenticate("kakao", { authType: "reprompt" })
);
app.get(
  "/oauth2/callback/kakao",
  passport.authenticate("kakao", {
    failureRedirect: "/oauth2/login/kakao",
    failureMessage: true,
  }),
  (req, res) => res.redirect("/")
);
//--------------------------------

app.get("/", (req, res, next) => {
  res.send(req.user);
});

// 홈 화면에에서 3개의 랭크 조회
app.get("/posts/rank", handleListPostRank);

// 각 장르별 게시물 조회
app.get("/posts", handleListPost);

// 게시물 생성
app.post("/users/posts", handleCreatePost);

// 내가 작성한 게시물 조회 (제목, 내용 일부, 비공개 여부)
app.get("/my-posts", handleListMyPost);

//나의 꿈 비공개 여부 수정
app.patch("/users/posts/open", handlerReleaseOption);

// 꿈 상세 조회
app.get("/posts/:postId", handlerGetPostView);

//게시물 좋아요 누르기
app.patch("/posts/:postId/like", handlerPostLike);

//--------------------------------

app.use((err, req, res, next) => {
    console.log({ err })
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
