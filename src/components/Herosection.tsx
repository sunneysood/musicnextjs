import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

export default function Herosection() {
  return (
    <div className="h-auto text-white md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-10 relative z-10 w-full text-center">
        <h1 className="mt-30 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the Art of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Mastering the art of music requires dedication, passion, and
          continuous learning. Begin by immersing yourself in diverse genres to
          broaden your musical horizons. Consistent practice is key, as it
          refines your technique and enhances your skills. Learn music theory to
          understand the structure and language of music, which will aid in
          composition and improvisation. Experiment with different instruments
          to discover new sounds and inspirations. Above all, stay patient and
          enjoy the process, as mastering music is a lifelong endeavor filled
          with rewarding experiences.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
