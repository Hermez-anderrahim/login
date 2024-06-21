import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Providers from "next-auth/providers";
import bcrypt from "bcryptjs";
import clientPromise from "../../../lib/mongodb";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    Providers.Credentials({
      name: "Credentials",
      Credential: {
        email: { label: "Email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(Credentials: { email: any; password: any }) {
        const client = await clientPromise;
        const db = client.db("users");

        const user = await db.collection("users").findOne({
          email: Credentials.email,
        });

        if (
          user &&
          (await bcrypt.compare(Credentials.password, user.password))
        ) {
          return { id: user._id, name: user.name, email: user.email };
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session(session, token) {
      session.user.id = token.id;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};
