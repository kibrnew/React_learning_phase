import Image from "next/image";
import JobType from "@/types/JobType";
import Description from "@/app/components/Description";
import Responsibilities from "@/app/components/Responsibilities";
import WeWant from "@/app/components/WeWant";
import WhenWhere from "@/app/components/WhenWhere";
import Others from "@/app/components/Others";
import { poppins,epilogue } from "@/app/layout";
import { ApiResponse } from "@/types/ApiResponse";
interface JobIndex {
  params: { id: string };
}

async function getData(id:string): Promise<ApiResponse<JobType>> {
  const res = await fetch(`https://akil-backend.onrender.com/opportunities/${id}`);
  const data = await res.json();
  return data;
}


export default async function Home({ params }: JobIndex) {
  const { id } = params;
  const jobs= (await getData(id)).data
  return (
    <>
      <div className={`w-[95%] mx-auto flex flex-row gap-5 ${epilogue.className}`}>
        <div className="w-[95%] mx-auto flex flex-col gap-5">
          <Description job={jobs} key={id} />

          <Responsibilities job={jobs} key={id} />
          <WeWant job={jobs} key={id} />
          <WhenWhere job={jobs} key={id} />
        </div>
        <div>
          <Others job={jobs} key={id} />
        </div>
      </div>
    </>
  );
}
