import swaggerAutogen from "swagger-autogen";
import swaggerUiExpress from "swagger-ui-express";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { handleUserSignUp } from "./controllers/user.controller.js";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import session from "express-session";
import passport from "passport";
import {
    kakaoStrategy
} from "./auth.config.js";
import { prisma } from "./db.config.js";

BigInt.prototype.toJSON = function () { // bigint 호환
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
};


dotenv.config();

passport.use(kakaoStrategy);
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));


const app = express();
const port = process.env.PORT;

app.use(cors({ origin: '*' }));
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
app.get("/oauth2/login/kakao", passport.authenticate('kakao', { authType: 'reprompt' }));
app.get(
    "/oauth2/callback/kakao",
    passport.authenticate("kakao", {
        failureRedirect: "/oauth2/login/kakao",
        failureMessage: true,
    }),
    (req, res) => res.redirect("/")
);
//--------------------------------

app.get('/', (req, res) => {
    console.log(req.user);
    res.send(req.user);
})
app.post('/test', handleUserSignUp);

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
    console.log(`Example app listening on port ${port}`)
})