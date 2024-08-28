import React from "react";
import BlogCard from "./components/BlogCard";
import { BlogType } from "@/types/Blog-type";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
export const dynamic = "force-dynamic";

export default async function Home() {
  const blogData: BlogType[] = [
    {
      _id: "64dfe79d50961c55ce93e7e4",
      image:
        "https://res.cloudinary.com/djtkzulun/image/upload/v1692395420/A2sv/mnjgq5sntmkerd5hjjba.jpg",
      title: "Mastering the Art of Code Refactoring",
      description:
        "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
      author: null,
      isPending: true,
      tags: ["Programming", "Code"],
      likes: 0,
      relatedBlogs: [],
      skills: [],
      createdAt: "2023-08-18T21:50:21.755Z",
      updatedAt: "2023-08-18T21:50:21.755Z",
    },
    {
      _id: "64dfe81250961c55ce93e7ed",
      image:
        "https://res.cloudinary.com/djtkzulun/image/upload/v1692395536/A2sv/zt8efjgvtxiripl0d961.jpg",
      title: "Mastering the Art of Code Refactoring 2",
      description:
        "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
      author: null,
      isPending: true,
      tags: ["Programming", "Code"],
      likes: 0,
      relatedBlogs: [],
      skills: [],
      createdAt: "2023-08-18T21:52:18.561Z",
      updatedAt: "2023-08-18T21:52:18.561Z",
    },
    {
      _id: "64dfe96a50d83607285ffa08",
      image:
        "https://res.cloudinary.com/djtkzulun/image/upload/v1692395881/A2sv/fvpmjksrplpxgqkgxlj3.jpg",
      title: "Mastering the Art of Code Refactoring 2",
      description:
        "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
      author: null,
      isPending: true,
      tags: ["Programming", "Code"],
      likes: 0,
      relatedBlogs: [],
      skills: ["Web Development", "Mobile"],
      createdAt: "2023-08-18T21:58:02.754Z",
      updatedAt: "2023-08-18T21:58:02.754Z",
    },
    {
      _id: "64dfe9dd50d83607285ffa10",
      image:
        "https://res.cloudinary.com/djtkzulun/image/upload/v1692395995/A2sv/c6fnsnngdrjrrvxv8xos.jpg",
      title: "Mastering the Art of Code Refactoring 2",
      description:
        "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
      author: {
        _id: "64dfe6fb50961c55ce93e7de",
        name: "bruke updated",
        email: "bruk@a2sv.org",
        image:
          "https://res.cloudinary.com/djtkzulun/image/upload/v1702997841/A2sv/lumtcitvklvajczcynqe.png",
        role: "user",
      },
      isPending: true,
      tags: ["Programming", "Code"],
      likes: 0,
      relatedBlogs: [],
      skills: ["Web Development", "Mobile"],
      createdAt: "2023-08-18T21:59:57.206Z",
      updatedAt: "2023-08-18T21:59:57.206Z",
    },
    {
      _id: "64e062e113118e7f1f0a59b5",
      image:
        "https://res.cloudinary.com/djtkzulun/image/upload/v1692426976/A2sv/eqg5kgjzu8o4592darvb.jpg",
      title: "Mastering the Art of Code Refactoring",
      description:
        "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
      author: {
        _id: "64e0623213118e7f1f0a59b0",
        name: "Bruke Mekonen",
        email: "bruke@a2sv.org",
        image:
          "https://res.cloudinary.com/djtkzulun/image/upload/v1684307248/Portfolio/dgxjqlgpys1imwnw2bhq.png",
        role: "user",
      },
      isPending: true,
      tags: ["Programming", "Code"],
      likes: 0,
      relatedBlogs: [],
      skills: ["Web Development", "Mobile"],
      createdAt: "2023-08-19T06:36:17.363Z",
      updatedAt: "2023-08-19T06:36:17.363Z",
    },
    {
      _id: "64e71c32ffcc678c7782c65a",
      image:
        "https://res.cloudinary.com/djtkzulun/image/upload/v1692867633/A2sv/mdvs5jef91utxwbouiki.jpg",
      title: "Mastering the Art of Code Refactoring",
      description:
        "Code ref refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
      author: {
        _id: "64e70f7affcc678c7782c558",
        name: "Bruk Mk",
        email: "bruk.mokenen@a2sv.org",
        image:
          "https://res.cloudinary.com/djtkzulun/image/upload/v1692879691/A2sv/tcp2nlkggansqvjrw1kd.png",
        role: "user",
      },
      isPending: true,
      tags: ["Programming", "Code"],
      likes: 0,
      relatedBlogs: [],
      skills: ["Web Development", "Mobile"],
      createdAt: "2023-08-24T09:00:34.057Z",
      updatedAt: "2023-08-24T09:00:34.057Z",
    },
    {
      _id: "64e7b6a52d2c1de78bf39762",
      image:
        "https://res.cloudinary.com/djtkzulun/image/upload/v1692907173/A2sv/aos9rb55vbfmqwgc1kga.png",
      title: "Africa to silicon valley",
      description: "<p>This is a test for the create blog form</p>",
      author: {
        _id: "64e7483ee093b2606f907740",
        name: "Jony Doe",
        email: "someone@gmail.com",
        image:
          "https://res.cloudinary.com/djtkzulun/image/upload/v1693830636/A2sv/osfnbr2scwfdsaua6c34.png",
        role: "user",
      },
      isPending: true,
      tags: [""],
      likes: 0,
      relatedBlogs: [],
      skills: [""],
      createdAt: "2023-08-24T19:59:33.992Z",
      updatedAt: "2023-08-24T19:59:33.992Z",
    },
  ];
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
