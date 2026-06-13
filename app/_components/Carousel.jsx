"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const eventImages = [
  "mohitsir.png",
  "bug.png",
  "code.png",
  "codecraft.png",
  "cyberdog.png",
  "design.png",
  "email.png",
  "ethic.png",
  "events.png",
  "firebase.png",
  "freshers.png",
  "git.png",
  "guest.png",
  "java1.png",
  "java2.png",
  "java3.png",
  "ml.png",
  "per.png",
  "promptus.png",
  "pyday.png",
  "supa.png",
  "trinity.png",
  "ux.png",
  "web.png",
  "xploring.png",
].map((image) => `/events/${image}`);

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % eventImages.length);
    }, 2500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full">
      <div className="relative h-[260px] w-full overflow-hidden rounded-2xl bg-black shadow-xl md:h-[430px]">
        {eventImages.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={`Event highlight ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 90vw"
            priority={index === 0}
            className={`object-contain transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="mt-4 flex w-full flex-wrap justify-center gap-2">
        {eventImages.map((image, index) => (
          <button
            key={image}
            type="button"
            aria-label={`Show event highlight ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === activeIndex ? "bg-white" : "bg-white/35"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
