import { getTeams } from "@/app/lib/data-service";
import TeamCard from "./TeamCard";

async function TeamsList() {
  const teams = await getTeams();
  return (
    <div className="flex gap-5 flex-wrap self-center justify-center  mt-5">
      {teams.map((t) => (
        <TeamCard
          name={t.name}
          description={t.description}
          image={t.image}
          key={t.name}
        />
      ))}
    </div>
  );
}

export default TeamsList;
