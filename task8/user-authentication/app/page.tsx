"use client";
import { SessionProvider, useSession } from "next-auth/react";
import React from "react";
import CMP from "./cmp";

export default function Home() {
  return (
    <SessionProvider>
      <CMP />
    </SessionProvider>
  );
}
