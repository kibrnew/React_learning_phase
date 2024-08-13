import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import Options from "@/Options";

 const handlers = NextAuth(Options);

 export {handlers as GET, handlers as POST }