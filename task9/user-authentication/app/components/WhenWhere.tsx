import React from "react";
import JobType from "@/types/JobType";
import { poppins } from "../layout";
import { LocationIcon } from "@/lib/Icons";

const WhenWhere = ({ job }: { job: JobType }) => {
  return (
    <>
      <h1 className={`font-black text-2xl ${poppins.className}`}>
        When & Where
      </h1>
      <div className="flex items-center gap-4 mb-2"> <div className="p-3"><LocationIcon/></div> {job.whenAndWhere}</div>
    </>
  );
};

export default WhenWhere;
