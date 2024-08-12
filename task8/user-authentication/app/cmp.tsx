"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";

import { useSession } from "next-auth/react";
import React from "react";

export default function CMP() {
  const session = useSession();
  console.log(session);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="flex flex-col items-center justify-center py-6 px-8 space-y-6 border border-gray-300 shadow-lg rounded-xl bg-white w-1/3">
        <Link
          href="auth/signup"
          className="w-full text-center text-white bg-blue-600 hover:bg-blue-700 py-3 px-6 rounded-lg text-lg font-semibold transition transform hover:scale-105"
        >
          Signup
        </Link>
        <Link
          href="auth/signin"
          className="w-full text-center text-white bg-purple-600 hover:bg-purple-700 py-3 px-6 rounded-lg text-lg font-semibold transition transform hover:scale-105"
        >
          Signin
        </Link>
      </div>
    </div>
  );
}
