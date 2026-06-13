import {
  getTeamDescription,
  getTeamMembers,
  getTeams,
} from "@/app/lib/data-service";
import MembersList from "../../_components/MembersList";
import { capitalize } from "../../_helper/capitalize";

export async function generateStaticParams() {
  const teams = await getTeams();
  const team = teams.map((t) => ({ team: String(t.name) }));
  return team;
}

async function page({ params }) {
  const { team } = await params;
  const teamName = decodeURIComponent(team);
  const teamMembers = await getTeamMembers(teamName);
  const description = await getTeamDescription(teamName);

  return (
    <div className="flex flex-col p-10 gap-10">
      <div className="text-7xl text-center m-10 font-bold">
        {capitalize(teamName)} Team
      </div>
      <div className="text-xl">{description}</div>
      <div className="flex justify-center mt-10 text-2xl flex-col gap-10 items-center ">
        <div className="">Members:</div>
        <MembersList data={teamMembers} team={teamName} />
      </div>
    </div>
  );
}

export default page;
