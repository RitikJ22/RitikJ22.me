"use client";

import Card from "./Card";
import {
  IconBrandReact,
  IconBrandTypescript,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Project } from "@/types";

const React = {
  name: "React",
  logo: <IconBrandReact />,
};

const TypeScript = {
  name: "TypeScript",
  logo: <IconBrandTypescript />,
};

const projects: Project[] = [
  {
    title: "Showdown",
    description: "A skill-based gaming and tournament platform.",
    link: "https://showdown.win/",
    tags: [React, TypeScript],
  },
  {
    title: "Noon.AI",
    description: "An AI platform.",
    link: "https://www.noon.ai/",
    tags: [React, TypeScript, { name: "AI" }],
  },
  {
    title: "Bubble Maps",
    description: "Visualize on-chain connections.",
    link: "https://bubble.acc8.dev/",
    tags: [React, TypeScript, { name: "Web3" }],
  },
  {
    title: "Head to Head",
    description: "A platform for 1v1 challenges.",
    link: "https://www.headtohead.app/",
    tags: [React, TypeScript],
  },
  {
    title: "Prophet",
    description: "A competitive gaming platform.",
    link: "https://www.prophet.win/",
    tags: [React, TypeScript],
  },

  {
    title: "Canto",
    description: "A permissionless general-purpose blockchain.",
    link: "https://canto.io/",
    tags: [React, TypeScript, { name: "Web3" }],
  },
  {
    title: "Canto Pools",
    description: "Liquidity pools on Canto.",
    link: "https://pools.canto.io/",
    tags: [React, TypeScript, { name: "DeFi" }],
  },
  {
    title: "Canto Analytics",
    description: "Analytics for the Canto ecosystem.",
    link: "https://analytics.neobase.one/",
    tags: [React, TypeScript, { name: "Web3" }],
  },
  {
    title: "Canto Liquidity Co-ordinator",
    description: "A tool for coordinating liquidity on Canto.",
    link: "https://coordinator.canto.io/",
    tags: [React, TypeScript, { name: "DeFi" }],
  },
  {
    title: "Aither",
    description: "Node-as-a-Service platform.",
    link: "https://naas.luganodes.com/",
    tags: [React, TypeScript],
  },
  {
    title: "EasyMator",
    description: "An automation platform.",
    link: "https://www.easymator.com/",
    tags: [React, TypeScript],
  },
];

function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="md:p-2 p-8" id="projects">
      <h1 className="text-4xl ml-2 my-8 font-bold font-sans tracking-tight">
        Projects
      </h1>
      <div className="grid md:grid-cols-2 max-md:mx-4 gap-4">
        {projects.slice(0, 6).map((project) => (
          <Card project={project} key={project.title} />
        ))}
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="py-2"
          >
            <div className="grid md:grid-cols-2 max-md:mx-4 gap-4 mt-4">
              {projects.slice(6).map((project) => (
                <Card project={project} key={project.title} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-center">
        {projects.length > 4 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-sm mx-auto my-8 px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-200 cursor-pointer"
          >
            {isExpanded ? "See Less" : "See More"}
            {isExpanded ? (
              <IconChevronUp size={16} />
            ) : (
              <IconChevronDown size={16} />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default Projects;
