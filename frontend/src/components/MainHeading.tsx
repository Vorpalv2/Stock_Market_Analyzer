"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect.tsx";
export function MainHeading() {
  const words = [
    {
      text: "Find",
    },
    {
      text: "the",
    },
    {
      text: "perfect",
    },
    {
      text: "Investment",
    },
    {
      text: "with",
    },
    {
      text: "SCRAPPY.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] dark:bg-black dark:bg-dot-white/[0.2] rounded-lg">
      <p className="text-neutral-600 dark:text-neutral-200 dark:bg-black sm:text-2xl text-sm">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 dark:text-white rounded-xl dark:bg-black bg-white text-black border border-black dark:border-white text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
