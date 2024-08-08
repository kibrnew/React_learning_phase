import React from "react";
import JobType from "@/types/JobType";
import { CheckMarkIcon } from "@/lib/icons";
import { poppins } from "../layout";

const Responsibilities = ({ job }: { job: JobType }) => {
  return (
    <>
      <h1 className={`font-black text-2xl ${poppins.className}`}>Responsibilities</h1>
      <div>
        {job.responsibilities.split("\n").map((line, index) => (
          <div key={index} className="flex items-start gap-2 mb-2">
            {/* <div className="border border-gray-200 p-2 rounded-full"> */}
              <CheckMarkIcon />
            {/* </div> */}
            <p>{line}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Responsibilities;
