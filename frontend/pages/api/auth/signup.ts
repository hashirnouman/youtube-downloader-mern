// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
}
type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await prisma.$connect();
  const saltRounds = 10;
  const password = req.body.password;
  let hashPassword = await bcrypt.hash(password, saltRounds);
  await prisma.admin.create({
    data: {
      username: req.body.username,
      password: hashPassword,
    },
  });
  res.json({ message: "created" });
}
