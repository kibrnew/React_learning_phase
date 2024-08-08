import React from "react";
import JobType from "@/types/JobType";
import { formatDateToCustomString } from "@/utils/formatDate";
import {
  PostedOnIcon,
  LocationIcon,
  StartDateIcon,
  EndDateIcon,
  DeadlineIcon,
} from "@/lib/icons";
import { poppins } from "../layout";

const selectColor = (color: string) => {
  return `border-2 border-${color}-50 py-2 px-4 text-sm bg-${color}-50 text-${color}-400  font-semibold rounded-3xl`;
};

const colors = ["green", "yellow", "blue"];

const Description = ({ job }: { job: JobType }) => {
  return (
    <div className="w-[80%] mx-auto flex flex-col gap-5">
      <h1 className={`font-black text-2xl ${poppins.className}`}>About</h1>

      <div className="flex items-start gap-2 mb-2">
        <PostedOnIcon />
        <div className="px-3 flex-col">
          <h3>Posted On</h3>
          {formatDateToCustomString(job.datePosted)}
        </div>
      </div>

      <div className="flex gap-2 items-start mb-2">
        <DeadlineIcon />
        <div className="px-3 flex-col">
          <h3>Deadline</h3>
          <div>{formatDateToCustomString(job.deadline)}</div>
        </div>
      </div>

      <div className="flex gap-2 items-start mb-2">
        <LocationIcon />
        <div className="px-3 flex-col">
          <h3>Location</h3>
          {job.location}
        </div>
      </div>

      <div className="flex gap-2 items-start mb-2">
        <StartDateIcon />
        <div className="px-3 flex-col">
          <h3>Start Date</h3>
          {formatDateToCustomString(job.startDate)}
        </div>
      </div>

      <div className="flex gap-2 items-start mb-2">
        <EndDateIcon />
        <div className="px-3 flex-col">
          <h3>End Date</h3>
          {formatDateToCustomString(job.endDate)}
        </div>
      </div>

      <div className="border border-gray-200"></div>

      <h1 className={`font-black text-2xl ${poppins.className}`}>Categories</h1>
      <div className="flex gap-3">
        {job.categories.map((category, index) => (
          <button key={index} className={selectColor(colors[index % 3])}>
            {category}
          </button>
        ))}
      </div>
      <div className="border border-gray-200"></div>

      <h1 className={`font-black text-2xl ${poppins.className}`}>
        Required Skills
      </h1>
      <div className="flex gap-3">
        {job.requiredSkills.map((skill, index) => (
          <button
            key={index}
            className="border-2 border-blue-50 py-2 px-4 text-sm bg-blue-50 text-blue-800 font-semibold "
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Description;
