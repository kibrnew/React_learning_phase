import React from "react";
import JobType from "@/types/JobType";
import { poppins } from "../layout";

const WeWant = ({ job }: { job: JobType }) => {
  return (
    <>
      <h1 className={`font-black text-2xl ${poppins.className}`}>Ideal Canditate We Want</h1>
      <div>
        {job.idealCandidate.split("\n").map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </div>
    </>
  );
};

export default WeWant;
