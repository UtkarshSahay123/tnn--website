import { CometCard } from "@/app/app/_components/comet-card";
import SocialLinks from "./SocialLinks";
import { capitalize } from "../_helper/capitalize";
import Image from "next/image";

export function MemberIdCard({ memberDetails }) {
  const {
    name,
    position,
    linkedin,
    email,
    instagram,
    twitter,
    github,
    team,
    id,
  } = memberDetails;

  return (
    <CometCard>
      <button
        type="button"
        className="relative my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-base-300 p-2 md:my-20 md:p-4 overflow-hidden"
        aria-label="View invite F7RA"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}
      >
        {/* Background repeating diagonal text */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-10 overflow-hidden">
          <div className="w-[200%] h-[200%] rotate-[-30deg] grid grid-cols-5 grid-rows-20 gap-6 place-items-center">
            {Array.from({ length: 100 }).map((_, i) => (
              <span
                key={i}
                className="text-gray-500 font-bold text-xs whitespace-nowrap"
              >
                TeamNextNexus
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="mx-2 flex-1">
            <div className="relative mt-2 aspect-square flex justify-center items-center w-full">
              <Image
                loading="lazy"
                fill
                className="absolute inset-0 h-full w-full rounded-[16px] object-cover contrast-75"
                alt="Invite background"
                src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                  opacity: 1,
                }}
              />
            </div>
          </div>

          <div className="mt-2 text-3xl font-semibold">{name}</div>
          <div className="mt-2">{capitalize(team)} Team</div>
          <div className="text-lg">{position}</div>

          <div className="px-5 my-2">
            <SocialLinks
              linkedin={linkedin}
              github={github}
              instagram={instagram}
              twitter={twitter}
              email={email}
            />
          </div>

          <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
            <div className="text-xs">TeamNextNexus</div>
            <div className="text-xs text-gray-300 opacity-50">
              Member Id: {id}
            </div>
          </div>
        </div>
      </button>
    </CometCard>
  );
}
