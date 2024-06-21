import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import NextAuth from "next-auth";
import { authOptions } from "./authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
