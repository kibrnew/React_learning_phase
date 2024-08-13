"use client";
import { signOut } from "next-auth/react";
import { cookies } from "next/headers";
import React from "react";
import Cookie from "js-cookie";

export default function SignOut() {
  function logOut() {
    signOut();
    Cookie.remove("currentUser");
  }
  return (
    <button
      className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition duration-300 w-auto inline-block"
      onClick={logOut}
    >
      log out{" "}
    </button>
  );
}
