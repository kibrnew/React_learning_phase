import Image from "next/image";
import data from "@/data/data.json";
import JobType from "@/types/JobType";
import JobCard from "./components/JobCard";
import Link from "next/link";
import { DownIcon } from "@/lib/icons";
import { epilogue } from "./layout";
import { ApiResponse } from "@/types/ApiResponse";

async function getData(): Promise<ApiResponse<JobType[]>> {
  const res = await fetch(
    "https://akil-backend.onrender.com/opportunities/search"
  );
  const data = await res.json();
  return data;
}

export default async function Home() {
  const jobs: JobType[] = (await getData()).data;
  return (
    <>
      <div
        className={`w-[80%] mx-auto flex flex-col gap-5 ${epilogue.className}`}
      >
        <div className="flex justify-between items-center px-8">
          <div>
            <h1 className="font-black text-2xl">Opportunities</h1>
            <span className="text-gray-400 tex-sm">Show 73 results</span>
          </div>
          <div className="flex">
            <div className="text-gray-400 mx-2 ">Sort by:</div>{" "}
            <div className="font-medium flex items-center">
              Most relevant {<DownIcon />}
            </div>
          </div>
        </div>

        {jobs.map((job, index) => (
          <Link href={`/detail/${job.id}`} key={job.id}>
            <JobCard job={job} key={job.id} />
          </Link>
        ))}
      </div>
    </>
  );
}
