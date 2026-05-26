import { HoverEffect } from "./card-hover-effect";
import MemberCard from "./MemberCard";

function MembersList({ data, team }) {
  return (
    <div className="flex gap-10 flex-wrap self-center justify-center items-center  mt-5 max-w-5xl mx-auto px-8">
      <HoverEffect items={data} team={team} />
    </div>
  );
}

export default MembersList;
