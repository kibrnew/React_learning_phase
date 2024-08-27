import React from "react";
import BlogCard from "./components/BlogCard";
import { BlogType } from "@/types/Blog-type";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

async function getData(): Promise<BlogType[]> {
  const res = await fetch("https://a2sv-backend.onrender.com/api/blogs");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const blogData: BlogType[] = await getData();
  console.log(blogData[0], "this is the first data");

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="sticky top-0 z-50">
        <HeaderComponent />
      </div>

      {/* Inserted Search Bar and Button Section */}
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-bold">Blogs</h1>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-full px-4 py-2 text-gray-600 focus:outline-none"
          />
          <button className="bg-blue-600 text-white rounded-full px-4 py-2">
            + New Blog
          </button>
        </div>
      </div>

      <div className="container mx-auto p-20 flex-grow">
        {blogData.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      <FooterComponent />
    </div>
  );
}
