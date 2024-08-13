"use client";

import Options from "@/Options";
import JobType from "@/types/JobType";
import axios from "axios";
import { useSession } from "next-auth/react";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";
import Cookie from "js-cookie";

const Bookmark = ({ job, token }: { job: JobType; token: string }) => {
  Cookie.set("accessToken", token);
  const [isBookmarked, setIsBookmarked] = React.useState(job.isBookmarked);

  // console.log("token:",token);
  const handleBookMarkClick = async () => {
    console.log("clicked");
    console.log(token);
    try {
      const method = isBookmarked ? "DELETE" : "POST";
      const response = await axios({
        method: method,
        url: `https://akil-backend.onrender.com/bookmarks/${job.id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setIsBookmarked(!isBookmarked);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div onClick={handleBookMarkClick}>
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={isBookmarked ? "red" : "none"}
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
        />
      </svg>
    </div>
  );
};

export default Bookmark;
