import React from "react";
import { Spotlight } from "./ui/spotlight";
import { cn } from "@/lib/cn";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Heart } from "lucide-react";
const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* spotlight effects  */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw] fill="purple' />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      {/* grid and dots  */}
      <div className="absolute top-0 left-0 flex h-[100vh] w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:70px_70px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      </div>
      {/* text content  */}
      <div className="flex items-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center mx-auto">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            My NextJs Portfolio
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px]
            md:text-5xl
            lg:text-6xl"
            words="Code that feels smooth. Interfaces that feel alive."
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;am Nhat Cao, a Front End Developer in Ha Noi!
          </p>
          <a href="#about">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="flex items-center dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <p>Contact me Now</p>
              <Heart width={20} strokeWidth={2} />
            </HoverBorderGradient>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
