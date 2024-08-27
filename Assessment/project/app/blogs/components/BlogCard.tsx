import React from "react";
import { BlogType } from "@/types/Blog-type";
import Image from "next/image";
interface BlogCardProps {
  blog: BlogType;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-lg  p-6 flex mb-6 border-b border-gray-300">
      {/* Left Side: Content */}
      <div className="flex-1">
        {/* Author Section */}
        {blog.author && (
          <div className="flex items-center mb-4">
            <Image
              src={blog.author.image || "/toy-icon.svg"}
              alt={blog.author.name}
              width={200}
              height={200}
            />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">{blog.author.name}</h3>
              <p className="text-gray-500 text-sm">{blog.author.role}</p>
              <p className="text-gray-400 text-xs">
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        )}

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>

        {/* Description */}
        <p className="text-gray-600 mt-2">{blog.description}</p>

        {/* Tags */}
        <div className="flex mt-4 space-x-2">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="ml-6">
        <Image
          src={blog.image || "/toy-icon.svg"}
          alt={blog.title}
          width={200}
          height={200}
          className="w-48 h-32 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default BlogCard;
