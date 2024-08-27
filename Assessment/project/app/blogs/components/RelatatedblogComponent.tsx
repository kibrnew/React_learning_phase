import Image from "next/image";
import React from "react";

interface RelatedBlogProps {
  title: string;
  author: string | null;
  date: string;
  tags: string[];
  description: string;
  likes: number;
  image: string;
}

const RelatedBlogComponent: React.FC<RelatedBlogProps> = ({
  title,
  author,
  date,
  tags,
  description,
  likes,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-80">
      {" "}
      {/* Fixed width */}
      {/* Image */}
      <div className="relative w-full h-44">
        {" "}
        {/* Adjusted height for card design */}
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <div className="flex items-center text-sm text-gray-500 my-2">
          {author ? (
            <>
              <Image
                src="/path/to/author-image.jpg" // Replace with the actual author image path
                alt={author}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="ml-2">{author}</span>
              <span className="mx-2">•</span>
            </>
          ) : null}
          <span>{new Date(date).toLocaleDateString()}</span>
        </div>
        <div className="flex space-x-2 my-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-600 text-sm my-2">
          {description.length > 80
            ? description.slice(0, 80) + "..."
            : description}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
            <span>{likes} Likes</span>
          </div>
          <a href="#" className="text-blue-600">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogComponent;
