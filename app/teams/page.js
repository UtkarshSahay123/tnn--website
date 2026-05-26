import { getTeams } from "@/app/lib/data-service";
import TeamCard from "../_components/TeamCard";
import TeamsList from "../_components/TeamsList";

async function page() {
  const teams = await getTeams();
  return (
    <div className="p-10 flex flex-col justify-center ">
      <div className="text-7xl text-center m-10 font-bold">Our Teams</div>
      <div className="flex justify-center mt-10 text-2xl flex-col gap-10 items-center ">
        <p>Meet our teams</p>
        <TeamsList />
      </div>
    </div>
  );
}

export default page;
