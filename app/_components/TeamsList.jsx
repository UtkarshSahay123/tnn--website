import { getTeams } from "@/app/lib/data-service";
import TeamCard from "./TeamCard";

function isFacultyTeam(team) {
  return [team.name, team.description, team.image]
    .filter(Boolean)
    .some((value) => value.toLowerCase().includes("faculty"));
}

async function TeamsList() {
  const teams = await getTeams();
  const facultyTeam = teams.find(isFacultyTeam);
  const otherTeams = teams.filter((team) => team !== facultyTeam);

  return (
    <div className="flex flex-col items-center gap-5 self-center mt-5">
      {facultyTeam && (
        <TeamCard
          name={facultyTeam.name}
          description={facultyTeam.description}
          image={facultyTeam.image}
          key={facultyTeam.name}
        />
      )}

      <div className="flex gap-5 flex-wrap justify-center">
        {otherTeams.map((t) => (
          <TeamCard
            name={t.name}
            description={t.description}
            image={t.image}
            key={t.name}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamsList;
