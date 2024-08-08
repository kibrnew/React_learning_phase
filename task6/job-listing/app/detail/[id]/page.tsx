import Image from "next/image";
import data from "@/data/data.json";
import JobType from "@/types/JobType";
import Description from "@/app/components/Description";
import Responsibilities from "@/app/components/Responsibilities";
import WeWant from "@/app/components/WeWant";
import WhenWhere from "@/app/components/WhenWhere";
import Others from "@/app/components/Others";
const jobs: JobType[] = data.data;
import { poppins,epilogue } from "../../layout";
interface JobIndex {
  params: { id: number };
}

export default function Home({ params }: JobIndex) {
  const { id } = params;
  return (
    <>
      <div className={`w-[95%] mx-auto flex flex-row gap-5 ${epilogue.className}`}>
        <div className="w-[95%] mx-auto flex flex-col gap-5">
          <Description job={jobs[id]} key={id} />

          <Responsibilities job={jobs[id]} key={id} />
          <WeWant job={jobs[id]} key={id} />
          <WhenWhere job={jobs[id]} key={id} />
        </div>
        <div>
          <Others job={jobs[id]} key={id} />
        </div>
      </div>
    </>
  );
}
