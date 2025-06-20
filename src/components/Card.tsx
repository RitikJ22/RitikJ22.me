"use client";

import React from "react";
import Link from "next/link";
import { Tags } from "./Tags";
import { Project } from "@/types";
import { IconBrandX } from "@tabler/icons-react";

const Card = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col justify-between p-6 rounded-lg border dark:border-neutral-700 border-neutral-300 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] relative h-full transition-transform duration-300 ease-in-out hover:scale-103 group">
      <Link
        href={project.link || ""}
        target="_blank"
        className="absolute inset-0 z-10"
      />
      <div>
        <h1 className="text-2xl font-sans tracking-tight font-semibold my-4">
          {project.title}
        </h1>
        <p className="text-zinc-700 dark:text-zinc-300 mb-8">
          {project.description}
        </p>
      </div>
      <div className="flex justify-between items-end">
        <div className="flex gap-2 flex-wrap">
          {<Tags items={project.tags} />}
        </div>
        {project.twitter && (
          <Link
            href={project.twitter}
            target="_blank"
            className="z-20 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
          >
            <IconBrandX />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
