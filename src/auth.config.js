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

    const member = await prisma.member.findFirst({ where: { email } });
    if (member !== null) {
        return { id: member.id, email: member.email, name: member.name, socialType: member.socialType, point: member.point };
    }
    const created = await prisma.member.create({

        data: {
            email,
            name: profile.username,
            gender: "추후 수정",
            age: 0,
            address: "추후 수정",
            specAddress: "추후 수정",
            phoneNum: "추후 수정",
            status: "추후 수정",
            socialType: "Kakao",
            point: 0,
        },
    });

    return { id: created.id, email: created.email, name: created.name, socialType: created.socialType, point: created.point };
}