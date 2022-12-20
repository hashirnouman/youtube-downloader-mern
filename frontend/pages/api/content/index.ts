// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
type Data = {
  name?: string;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await prisma.$connect();
  switch (req.method) {
    case "POST": {
      await prisma.content.create({
        data: {
          title: req.body.title,
          description: req.body.description,
        },
      });
      res.status(200).json({ name: "insertion successful" });
      break;
    }
    case "GET": {
      const response = await prisma.content.findMany();
      res.send(response);
      break;
    }
    case "PUT": {
      for (let key in req.body) {
        if (req.body.hasOwnProperty(key)) {
          let value = req.body[key];
          const response = await prisma.content.update({
            where: {
              id: value.id,
            },
            data: {
              description: value.description,
            },
          });
        }
      }

      res.send("HELO");
      break;
    }

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
