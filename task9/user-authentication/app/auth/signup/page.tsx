"use client";
import { GoogleSignIn } from "@/lib/Icons";
import { headers } from "next/headers";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/app/context/UserContext";
import { signIn } from "next-auth/react";

export default function Home() {
  const { userData, setUserData } = useUserContext();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
    };

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log(data);
    try {
      const response = await fetch("https://akil-backend.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Accepted! Please check your email to verify your account.");
        setUserData(data);
        router.push("../auth/verify");
      } else {
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  py-1">
      <h1 className="py-3 text-3xl">Sign Up Today!</h1>
      <div onClick={() => signIn("google")}>
        <GoogleSignIn />
      </div>

      <div className="flex items-center mt-5 text-sm py-2">
        <hr className="w-[110px] flex-grow border-t border-gray-300" />
        <span className="px-3 text-gray-500">Or Sign Up with Email</span>
        <hr className="w-[110px] flex-grow border-t border-gray-300" />
      </div>

      <div>
        <hr className="" />
      </div>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col items-start justify-center"
      >
        <label htmlFor="full-name" className="font-bold">
          Full Name
        </label>
        <input
          type="text"
          id="full-name"
          name="name"
          value={userData.name}
          onChange={handleChange}
          className="py-3 pl-4 pr-48 mb-6 mt-2 rounded-lg border-2 border-gray-200 outline-none"
          placeholder="Enter your full name"
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          className="py-3 pl-4 pr-48 mb-6 mt-2 rounded-lg border-2 border-gray-200 outline-none"
          placeholder="Enter email address"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          className="py-3 pl-4 pr-48 mb-6 mt-2 rounded-lg border-2 border-gray-200 outline-none"
          placeholder="Enter password"
          required
        />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleChange}
          className="py-3 pl-4 pr-48 mb-6 mt-2 rounded-lg border-2 border-gray-200 outline-none"
          placeholder="Enter password"
          required
        />

        <button
          type="submit"
          className="px-44 py-3  mb-6 mt-2 rounded-full bg-indigo-900 text-white outline-none"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
