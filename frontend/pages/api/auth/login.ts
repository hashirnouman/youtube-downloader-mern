/* eslint-disable import/no-anonymous-default-export */
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
type Data = {
  message: string;
  token?: string;
  username?: string;
};

const secret: string | any = process.env.SECRET;

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const prisma = new PrismaClient();
  const { username, password } = req.body;
  const data = await prisma.admin.findFirst();
  let encrptionresponse;
  if (data) {
    encrptionresponse = await bcrypt.compare(password, data?.password);
  }

  if (username === data?.username && encrptionresponse == true) {
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
        username: username,
      },
      secret
    );

    res.status(200).json({ message: "Success!", token });
  } else {
    res.json({ message: "Invalid credentials!" });
  }
}
