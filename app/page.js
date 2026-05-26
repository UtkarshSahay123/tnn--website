import React from "react";
import Link from "next/link.js";
import Carousel from "./_components/Carousel.jsx";
import TeamsList from "./_components/TeamsList.jsx";
import { WhyJoin } from "./_components/WhyJoin.jsx";
import { HeroSection } from "./_components/HeroSection.jsx";
import { Advantages } from "./_components/Advantages.jsx";
import { HeroHome } from "./_components/HeroHome.jsx";
import { BackgroundLines } from "./_components/background-lines.jsx";

export default function Page() {
  return (
    <>
      <BackgroundLines
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-screen"
      >
        <div className="flex flex-col justify-center items-center h-full gap-6">
          <h1
            className="bg-clip-text text-transparent text-center 
      bg-gradient-to-b from-neutral-900 to-neutral-700 
      dark:from-neutral-600 dark:to-white 
      text-5xl md:text-7xl lg:text-9xl 
      font-extrabold tracking-tight"
          >
            Hello
          </h1>

          <HeroHome />
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="#first"
            className="text-xl md:text-2xl font-semibold hover:text-purple-500 transition"
          >
            Dive in ↆ
          </Link>
        </div>
      </BackgroundLines>

      <div
        className=" bg-base-300 rounded-2xl p-10 mt-10  flex flex-col gap-3"
        id="first"
      >
        {/* <HeroSection /> */}
        {/* <div className="text-2xl font-semibold">Who are we ?</div>
        <div>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?{" "}
        </div> */}
      </div>

      <div className="flex justify-center mt-10 flex-col gap-5 p-10">
        <div className="font-semibold text-2xl">Our track record:</div>
        <div className="stats stats-vertical lg:stats-horizontal shadow ">
          <div className="stat">
            <div className="stat-title">Events Conducted</div>
            <div className="stat-value">40</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-title">Participants</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-title">Prizes awarded</div>
            <div className="stat-value text-success">₹50,000</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>

      <div className="m-10 text-2xl flex flex-col gap-10">
        <p className="font-semibold">Highlights</p>
        <Carousel />
      </div>

      {/* <div className="flex flex-col p-10 gap-5 bg-base-300 rounded-2xl">
        <div className="text-2xl font-semibold">
          Why join{" "}
          <span className="font-bold tracking-wider text-3xl">
            TeamNextNexus
          </span>{" "}
          ?
        </div>
        <div>
          Become a part of our community to gain hands-on, real-world experience
          and collaborate with a diverse group of talented individuals. Your
          skills and contributions will be respected and valued as you work
          alongside others.
        </div>
        <div>
          As a member, you&apos;ll benefit from:
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>
              <span className="font-semibold">Project-Based Learning:</span> Our
              resume-building program allows you to dedicate a full semester to
              a project designed to enhance your professional portfolio.
            </li>
            <li>
              <span className="font-semibold">Skill Development:</span> We host
              workshops and events on a variety of technical topics to help you
              grow your skills.
            </li>
            <li>
              <span className="font-semibold">Personalized Support:</span> Our
              kind and helpful committee offers technical assistance if you need
              help with your personal projects.
            </li>
          </ul>
        </div>
      </div> */}

      <Advantages />
      {/* <WhyJoin /> */}

      <div className="flex w-full flex-col my-10">
        <div className="divider "></div>
      </div>

      <div className="flex justify-center mt-10 text-2xl flex-col gap-10 items-center  ">
        <p className="font-semibold">Meet Our Crew</p>
        <TeamsList />
      </div>
    </>
  );
}

// export default page;
