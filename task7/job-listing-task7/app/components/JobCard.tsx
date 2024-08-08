import JobType from "@/types/JobType";
import Image from "next/image";
const JobCard = ({ job }: { job: JobType }) => {
  return (
    <div className="flex gap-2 m-2 border-2 border-gray-200 py-7 px-14 rounded-3xl shadow-md">
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
  );
};

export default JobCard;
