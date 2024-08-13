"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { redirect, useRouter } from "next/navigation";
import Cookie from "js-cookie";
import { SessionContext, signIn, useSession } from "next-auth/react";
import Link from "next/link";

interface FormData {
  email: string;
  password: string;
}

interface dataProps {
  user: any;
  expires: string;
  accessToken: string;
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { data, status } = useSession();

  console.log("Data:", useSession());
  Cookie.set("accessToken", data)

  if (status === "authenticated") {
    router.push("/listing");
  }
  const onSubmit = async (SigIndata: any) => {
    console.log("redirected", SigIndata);
    try {
      await signIn("credentials", SigIndata);
      // router.push("/listing");
    } catch (error) {
      alert("failed to log in");
    }

    // try {
    //   const response = await fetch("https://akil-backend.onrender.com/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (response.ok) {
    //     const result = await response.json();
    //     console.log(result);
    //     localStorage.setItem("accessToken", result.data.accessToken);
    //     Cookie.set("currentUser", result.data.accessToken, {
    //       expires: 30 / 1440,
    //       path: "/",
    //     });
    //     alert("log in");
    //     router.push("../listing");
    //   } else {
    //     console.error("Sign-in failed:", response.statusText);
    //     alert("not logged in");
    //   }
    // } catch (error) {
    //   console.error("Error during sign-in:", error);
    // }
  };

  return (
    <div className="flex  flex-col items-center justify-center  py-1">
      <h1 className="py-3 text-3xl">Welcome Back!</h1>

      <div className="flex items-center mt-5 text-sm py-2">
        <hr className="w-[110px] flex-grow border-t border-gray-300" />
        <span className="px-3 text-gray-500">{""}</span>
        <hr className="w-[110px] flex-grow border-t border-gray-300" />
      </div>

      <div>
        <hr className="" />
      </div>
      <form
        action="#"
        method="post"
        className="flex flex-col items-start justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          className="py-3 pl-4 pr-48 mb-6 mt-2 rounded-lg border-2 border-gray-200 outline-none"
          placeholder="Enter email address"
          {...register("email", { required: true })}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="py-3 pl-4 pr-48 mb-6 mt-2 rounded-lg border-2 border-gray-200 outline-none"
          placeholder="Enter password"
          {...register("password", { required: true })}
        />

        <button className="px-44 py-3  mb-6 mt-2 rounded-full bg-indigo-900 text-white outline-none">
          Continue
        </button>
      </form>
      <div className="flex justify-start">
        <div>Dont have an account ? </div>
        <div className="ml-2">
          <Link href="signup"> Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
