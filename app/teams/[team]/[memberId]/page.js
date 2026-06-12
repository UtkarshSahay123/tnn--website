import { MemberIdCard } from "@/app/app/_components/MemberIdCard";
import { getMemberDetails } from "@/app/lib/data-service";
import Link from "next/link";
import { notFound } from "next/navigation";

async function Page({ params }) {
  const { memberId } = await params;
  const memberDetails = await getMemberDetails(memberId);

  if (!memberDetails) {
    notFound();
  }

  const { team } = memberDetails;

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href={`/teams/${team}`}>Go back</Link>
      {/* <div className="flex flex-col p-10 gap-5 justify-center items-center">
        <h1 className="text-6xl">{name}</h1>
        <p className="text-xl">{position}</p>

        <div className="h-50 w-50 bg-accent"></div>

        <SocialLinks
          linkedin={linkedin}
          github={github}
          instagram={instagram}
          twitter={twitter}
          email={email}
        />
      </div> */}

      <MemberIdCard memberDetails={memberDetails} />
    </div>
  );
}

export default Page;
