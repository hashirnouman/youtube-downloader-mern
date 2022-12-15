/* eslint-disable import/no-anonymous-default-export */
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
type Data = {
  message: string;
  token?: string;
};

const secret: string | any = process.env.SECRET;

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const prisma = new PrismaClient();
  const { username, password } = req.body;
  const data = await prisma.admin.findFirst();
  let cmp;
  if (data) {
    cmp = await bcrypt.compare(password, data?.password);
  }

  if (username === data?.username && cmp == true) {
    // const token = sign(
    //   {
    //     exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
    //     username: username,
    //   },
    //   secret
    // );

    // const serialised = serialize("OursiteJWT", token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV !== "development",
    //   sameSite: "strict",
    //   maxAge: 60 * 60 * 24 * 30,
    //   path: "/",
    // });

    // res.setHeader("Set-Cookie", serialised);

    res.status(200).json({ message: "Success!" });
  } else {
    res.json({ message: "Invalid credentials!" });
  }
}
