"use client";
import React from "react";
import { TracingBeam } from "@/app/app/_components/tracing-beam";

export function WhyJoin() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-full mx-auto antialiased pt-4 relative">
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
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p>{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Project-Based Learning:",
    description: (
      <>
        <p>
          Our resume-building program allows you to dedicate a full semester to
          a project designed to enhance your professional portfolio.
        </p>
        {/* <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p> */}
      </>
    ),
    badge: "React",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Skill Development:",
    description: (
      <>
        <p>
          We host workshops and events on a variety of technical topics to help
          you grow your skills.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Personalized Support:",
    description: (
      <>
        <p>
          Our kind and helpful committee offers technical assistance if you need
          help with your personal projects.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
