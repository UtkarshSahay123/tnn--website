import Image from "next/image";

function page() {
  return (
    <div className="min-h-full flex flex-col">
      <div className="text-7xl text-center m-10 font-bold">About Us</div>
      <div className="p-10">
        <div className="text-2xl font-semibold ">Our Origin Story:</div>
        <div className="mt-5">
         Team Next Nexus is a community of builders, researchers, and problem-solvers driven by curiosity and execution. Over the years, our members have contributed to research publications, built impactful technical projects, and gone on to secure roles at leading high-paying companies. As a club, we continue to design, develop, and ship real-world solutions, including the official VITOPIA 2025 website, while also serving as a major contributor to V-Launchpad. Our goal is to create a space where students learn by building, collaborate across domains, and turn ideas into working products.
        </div>
      </div>

      <div className="p-10 flex flex-col">
        <div className="text-2xl font-semibold mb-5">Special Thanks to</div>
        <div>Mohit Sir (Faculty Coordinator)</div>
        <div>Rahul Nayak (Ex-President)</div>
        <div>Pisapati Tejoram (Ex-President)</div>
      </div>
    </div>
  );
}

export default page;
