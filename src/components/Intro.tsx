"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Intro = () => {
  const childVariant = {
    hidden: {
      opacity: 0.5,
      y: 20,
      filter: "blur(10px)",
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  const parentVariant = {
    hidden: {},
    show: {
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <motion.div
      initial={"hidden"}
      animate={"show"}
      variants={parentVariant}
      className="p-8 my-4"
    >
      <div className="flex justify-between max-md:flex-col-reverse">
        <motion.div variants={childVariant}>
          <h1 className="text-5xl md:text-7xl font-sans mt-5 font-bold tracking-tight my-2">
            Ritik Jaiswal
          </h1>
          <p className="text-zinc-700 dark:text-zinc-300">
            Frontend Engineer ( UI | UX | DEFI )
          </p>
        </motion.div>
        <motion.div
          variants={childVariant}
          className="overflow-hidden rounded-lg w-max h-max shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] border border-zinc-700/70"
        >
          <Image
            src={"/avatar.webp"}
            height={120}
            width={120}
            alt="Image"
            className="grayscale-0"
          />
        </motion.div>
      </div>
      <motion.p
        variants={childVariant}
        className="text-zinc-700 dark:text-zinc-400 mt-8"
      >
        I&apos;m a Frontend engineer passionate about building beautiful and
        functional user experiences. With expertise in Next.js, React and
        TypeScript. I bring ideas to life, from sleek interfaces to decentralized
        applications in the Web3 space. I thrive on turning complex problems into
        elegant solutions, ensuring every project I touch is something I&apos;m
        proud of.
      </motion.p>
    </motion.div>
  );
};

export default Intro;
