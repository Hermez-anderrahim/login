import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/app/lib/mongoDB"; // Updated import statement using connectToDatabase
import bcrypt from "bcryptjs";

type ResponseData = {
  message: string;
};

export async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const { client, db } = await connectToDatabase(); // Updated to use the new connection method
    const { email, password } = req.body;
    const user = await db.collection("users").findOne({ email });
    if (user) {
      return res.status(200).json({ message: "User already exists." });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    await db.collection("users").insertOne({
      email,
      password: hashedPassword,
    });
    return res.status(201).json({ message: "User created." });
  } catch (error) {
    console.error("Registration error: " + error);
    return res.status(500).json({ message: "Internal server error." });
  }
}
