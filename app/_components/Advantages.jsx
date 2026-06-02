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
          src: "https://assets.aceternity.com/templates/startup-1.webp",
          alt: "startup template",
        },
        {
          src: "https://assets.aceternity.com/templates/startup-2.webp",
          alt: "startup template",
        },
        {
          src: "https://assets.aceternity.com/templates/startup-3.webp",
          alt: "startup template",
        },
        {
          src: "https://assets.aceternity.com/templates/startup-4.webp",
          alt: "startup template",
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
          src: "https://assets.aceternity.com/pro/hero-sections.png",
          alt: "hero template",
        },
        {
          src: "https://assets.aceternity.com/features-section.png",
          alt: "feature template",
        },
        {
          src: "https://assets.aceternity.com/pro/bento-grids.png",
          alt: "bento template",
        },
        {
          src: "https://assets.aceternity.com/cards.png",
          alt: "cards template",
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
          src: "https://assets.aceternity.com/pro/hero-sections.png",
          alt: "hero template",
        },
        {
          src: "https://assets.aceternity.com/features-section.png",
          alt: "feature template",
        },
        {
          src: "https://assets.aceternity.com/pro/bento-grids.png",
          alt: "bento template",
        },
        {
          src: "https://assets.aceternity.com/cards.png",
          alt: "cards template",
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
