import dotenv from "dotenv";
import { Strategy as KakaoStrategy } from "passport-kakao";
import { prisma } from "./db.config.js";

dotenv.config();

export const kakaoStrategy = new KakaoStrategy(
    {
        clientID: process.env.PASSPORT_KAKAO_CLIENT_ID,
        clientSecret: process.env.PASSPORT_KAKAO_CLIENT_SECRET,
        callbackURL: '/oauth2/callback/kakao',
    },
    (accessToken, refreshToken, profile, done) => {
        return kakaoVerify(profile)
            .then((user) => done(null, user))
            .catch((err) => done(err));
    }
);

const kakaoVerify = async (profile) => {
    const email = profile._json.kakao_account.email;
    if (!email) {
        throw new Error(`profile.email was not found: ${profile}`);
    }

    const user = await prisma.user.findFirst({ where: { email } });
    if (user !== null) {
        return { id: user.id, email: user.email, name: user.name};
    }
    const created = await prisma.user.create({

        data: {
            email,
            name: profile.username,
        },
    });

    return { id: created.id, email: created.email, name: created.name };
}