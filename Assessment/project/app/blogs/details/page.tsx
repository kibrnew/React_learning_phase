import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import Image from "next/image";
import RelatedBlogComponent from "../components/RelatatedblogComponent";

// Define blog data as an object
const blogData = {
  _id: "64dfe77d50961c55ce93e7e0",
  image:
    "https://res.cloudinary.com/djtkzulun/image/upload/v1692395388/A2sv/vmjzxwgp3mdvtwn2tlrw.jpg",
  title: "Mastering the Art of Code Refactoring",
  description:
    "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
  author: null,
  isPending: true,
  tags: ["Programming", "Code"],
  likes: 0,
  relatedBlogs: [],
  skills: [],
  createdAt: "2023-08-18T21:49:49.752Z",
  updatedAt: "2023-08-18T21:49:49.752Z",
  __v: 0,
};

const BlogPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-28 min-h-screen">
      <HeaderComponent />

      {/* Blog Content Section */}
      <div className="flex flex-col items-center px-28">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-4">{blogData.title}</h1>
          <p className="text-gray-600">
            {new Date(blogData.createdAt).toLocaleDateString()}
          </p>
        </div>

        <div className="relative h-96 w-full mb-6">
          <Image
            src={blogData.image}
            alt={blogData.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <div className="mb-6">
            <p className="text-lg leading-relaxed text-gray-700">
              {blogData.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {blogData.tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-200 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Blog Section */}
        <div className="flex justify-center gap-12">
          <RelatedBlogComponent
            title={blogData.title}
            author={blogData.author} // Handling a null author
            date={blogData.createdAt}
            tags={blogData.tags}
            description={blogData.description}
            likes={blogData.likes}
            image={blogData.image}
          />
          <RelatedBlogComponent
            title={blogData.title}
            author={blogData.author} // Handling a null author
            date={blogData.createdAt}
            tags={blogData.tags}
            description={blogData.description}
            likes={blogData.likes}
            image={blogData.image}
          />
          <RelatedBlogComponent
            title={blogData.title}
            author={blogData.author} // Handling a null author
            date={blogData.createdAt}
            tags={blogData.tags}
            description={blogData.description}
            likes={blogData.likes}
            image={blogData.image}
          />
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};

export default BlogPage;
