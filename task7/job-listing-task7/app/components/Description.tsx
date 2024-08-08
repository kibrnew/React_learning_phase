import React from 'react'
import JobType from "@/types/JobType";
import { poppins } from "../layout";

const Description = ({ job }: { job: JobType }) => {
  return (
    <>
    <h1 className={`font-black  text-2xl ${poppins.className}`}> Description</h1>
    <div className='text-justify'>{job.description}</div>
    </>
  )
}

export default Description