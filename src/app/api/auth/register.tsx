import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/app/lib/mongoDB";
import bcrypt from "bcryptjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if ((req.method = "POST")) {
    try {
      const client = await clientPromise;
      const db = client.db("users");

      const { email, password } = req.body;

      const user = await db.collection("users").findOne({
        email: email,
      });

      if (user) {
        res.status(422).json({ message: "user exists " });
      }

      const hashedPassword = bcrypt.hashSync(password, 10);

      const newUser = db.collection("users").insertOne({
        email,
        password: hashedPassword,
      });

      res.status(201).json({ message: "user created" });
    } catch (error) {
      console.error("registration error " + error);
      res.status(500).json({ message: "internal server error" });
    }
  }
}
