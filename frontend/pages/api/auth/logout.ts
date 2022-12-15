/* eslint-disable import/no-anonymous-default-export */
import { serialize } from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { cookies } = req;

  const jwt = cookies.OursiteJWT;

  if (!jwt) {
    return res.json({ message: " you are already not logged in..." });
  } else {
    // const serialised: any = serialize();

    // res.setHeader("Set-Cookie", serialised);

    res.status(200).json({ message: "Successfuly logged out!" });
  }
}
