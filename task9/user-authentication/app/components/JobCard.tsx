import JobType from "@/types/JobType";
import Image from "next/image";
import Link from "next/link";
import Bookmark from "./Bookmark";
import { getServerSession } from "next-auth";
import Options from "@/Options";

const JobCard = async ({ job }: { job: JobType }) => {
  const session = await getServerSession(Options);
  const tokenFromJobCard = session.accessToken;

  return (
    <div className="flex justify-between m-1 border-2 border-gray-200 py-7 px-8 rounded-3xl shadow-md">
      <Link href={`../listing/detail/${job.id}`} key={job.id}>
        <div className="flex gap-2 ">
          <div className="w-[200px] h-[200px] ">
            <Image
              src={job.logoUrl}
              width={200}
              height={200}
              alt={`${job.orgName} logo`}
            />
          </div>

          <div className="text-gray-800 space-y-3">
            <h1 className="font-bold text-lg ">{job.title}</h1>
            <h3 className=" flex text-base font-medium text-gray-400">
              {job.whenAndWhere} <li className="mx-4">{job.location[0]}</li>
            </h3>
            <p className="text-justify">{job.description}</p>
            <div className="flex gap-3">
              <button className="border-2 border-green-50 py-2 px-4 text-sm bg-green-50 text-green-400 font-semibold rounded-3xl">
                In Person{" "}
              </button>
              <div className="border border-gray-200"></div>
              <button className="border-2 border-yellow-400 py-2 px-4 text-sm text-yellow-400  font-semibold rounded-3xl">
                Education{" "}
              </button>
              <button className="border-2 border-blue-800 py-2 px-8 text-sm text-blue-800  font-semibold rounded-3xl">
                IT{" "}
              </button>
            </div>
          </div>
        </div>
      </Link>

      <div>
        <Bookmark job={job} token={tokenFromJobCard}/>
      </div>
    </div>
  );
};

export default JobCard;

// const Bookmark = () => {

//   return (
//     <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill={isBookmarked ? "red" : "none"}
//     viewBox="0 0 24 24"
//     stroke-width="1.5"
//     stroke="currentColor"
//     className="size-6"
//   >
//     <path
//       stroke-linecap="round"
//       stroke-linejoin="round"
//       d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
//     />
//   </svg>
//   )
// }
