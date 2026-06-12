import React from "react";
import { Timeline } from "@/app/app/_components/timeline";

export function Advantages() {
  const data = [
    {
      id: "project-based-learning",
      title: "Project-Based Learning:",
      paragraphClassName:
        "mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200",
      paragraphs: [
        "Our resume-building program allows you to dedicate a full semester to a project designed to enhance your professional portfolio.",
      ],
      images: [
        {
          src: "/sample/solar2.png",
          alt: "solar analyzer",
        },
        {
          src: "/sample/solar3.png",
          alt: "solar analyzer",
        },
        {
          src: "/sample/solar4.png",
          alt: "solar analyzer",
        },
        {
          src: "/sample/solar1.png",
          alt: "solar analyzer",
        },
      ],
    },
    {
      id: "skill-development",
      title: "Skill Development:",
      paragraphClassName:
        "mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200",
      paragraphs: [
        "We host workshops and events on a variety of technical topics to help you grow your skills.",
      ],
      images: [
        {
          src: "/sample/supaedited.png",
          alt: "supabase workshop",
        },
        {
          src: "/sample/firebase.png",
          alt: "Firebase workshop",
        },
        {
          src: "/events/java2.png",
          alt: "Java workshop 2",
        },
        {
          src: "/events/java3.png",
          alt: "Java workshop 3",
        },
      ],
    },
    {
      id: "personalized-support",
      title: "Personalized Support:",
      paragraphClassName:
        "mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200",
      paragraphs: [
        "Our kind and helpful committee offers technical assistance if you need help with your personal projects.",
      ],
      bullets: [
        "Project guidance and code reviews",
        "Debugging support for web and app development",
        "Hackathon and competition mentorship",
        "Peer learning sessions for new technologies",
        "Hands-on support for turning ideas into working projects",
      ],
      images: [
        {
          src: "/events/ml.png",
          alt: "Machine Learning workshop",
        },
        {
          src: "/events/promptus.png",
          alt: "Promptus workshop",
        },
        {
          src: "/events/xploring.png",
          alt: "Web development workshop",
        },
        {
          src: "/sample/webedited.png",
          alt: "Web workshop 2",
        },
      ],
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
