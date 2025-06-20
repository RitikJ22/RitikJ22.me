"use client";

import Card from "./Card";
import {
  IconBrandGraphql,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Project } from "@/types";
import { IconBrandFramerMotion } from "@tabler/icons-react";

const NextJS = {
  name: "Next.js",
  logo: <IconBrandNextjs />,
};

const React = {
  name: "React",
  logo: <IconBrandReact />,
};

const Tailwind = {
  name: "Tailwind CSS",
  logo: <IconBrandTailwind />,
};

const Motion = {
  name: "Motion",
  logo: <IconBrandFramerMotion />,
};

const TypeScript = {
  name: "TypeScript",
  logo: <IconBrandTypescript />,
};

const GraphQL = {
  name: "GraphQL",
  logo: <IconBrandGraphql />,
};

const projects: Project[] = [
  {
    title: "Showdown",
    description:
      "Play, Compete and Earn - Instantly on your favorite games. Bringing the on-chain gaming revolution to @monad_xyz .Join tournaments and win prizes. Compete with players from around the world in various games and formats. ",
    link: "https://showdown.win/",
    twitter: "https://x.com/showdown_gg",
    tags: [NextJS, TypeScript, Tailwind, Motion, GraphQL],
  },
  {
    title: "Noon.AI",
    description:
      "AI for recruiting world-class talent. With Noon, finding the perfect candidates for your most difficult roles has never been so simple. Sign up today!",
    link: "https://www.noon.ai/",
    tags: [NextJS, TypeScript, Tailwind],
  },
  {
    title: "Bubble Maps",
    description:
      "Explore DeFi tokens and NFTs through bubbles in our crypto dApp. Cryptocurrency data for beginners, degens, and experts. Bubblemaps is a data visualization platform that makes research and analysis more accessible and convenient for users.",
    link: "https://bubble.acc8.dev/",
    twitter: "https://x.com/acc8_labs",
    tags: [NextJS, TypeScript, Tailwind],
  },
  {
    title: "Head to Head",
    description:
      "Put your money where your mouth is!. Head to Head is a social wagering platform on Hyperliquid EVM powered by $HEAD. wager on which token/NFT will outperform another. Double or nothing against your opponent.",
    link: "https://www.headtohead.app/",
    twitter: "https://x.com/HeadtoHead_hl",
    tags: [NextJS, TypeScript, Tailwind,GraphQL,Motion],
  },  
  {
    title: "Prophet",
    description:
      "Options gamified and made accessible to everyone on @HyperliquidX EVM. Predict the future and become a Prophet. Prophet is a platform that allows you to predict the correct range of an asset on expiry and win exponentially!",
    link: "https://www.prophet.win/",
    twitter: "https://x.com/prophet_hl",
    tags: [NextJS, TypeScript,Tailwind,GraphQL,Motion],
  },

  {
    title: "Canto",
    description: "Canto is a layer-1 blockchain built to deliver on the promise of defi. as a post-traditional financial movement, canto enables accessibility, transparency, and freedom for new systems. driven by a loosely organized collective of chain-native builders, canto provides a new commons powered by free public infrastructure",
    link: "https://canto.io/",
    twitter: "https://x.com/CantoPublic",
    tags: [NextJS, TypeScript,Tailwind,GraphQL,Motion],
  },
  {
    title: "Canto Pools",
    description: "Liquidity pools on Canto. Put your funds to work by providing liquidity.Earn CANTO incentives and a share of trading fees for eligible pairs",
    link: "https://pools.canto.io/",
    twitter: "https://x.com/CantoPublic",
    tags: [NextJS, TypeScript,Tailwind,GraphQL,Motion],
  },
  {
    title: "Canto Analytics",
    description: "Analytics for the Canto ecosystem. Canto analytics is a platform that allows you to track the performance of your Canto assets/pairs and the Canto ecosystem.",
    link: "https://analytics.neobase.one/",
    twitter: "https://x.com/CantoPublic",
    tags: [NextJS, TypeScript,Tailwind,GraphQL,Motion],
  },
  {
    title: "Canto Liquidity Co-ordinator",
    description: "A tool for coordinating liquidity on Canto. A minimal protocol to incentivize providing liquidity to Canto primitives. Lock CANTO for veCANTO and channel incentives to your desired liquidity pools",
    link: "https://coordinator.canto.io/",
    twitter: "https://x.com/CantoPublic",
    tags: [NextJS, TypeScript,Tailwind,GraphQL,Motion],
  },
  {
    title: "Aither",
    description: "Node-as-a-Service platform.One Click Node Deployment Powered by Luganodes Enterprise-Grade Blockchain Infrastructure.",
    link: "https://naas.luganodes.com/",
    twitter: "https://x.com/luganodes",
    tags: [NextJS, TypeScript, Tailwind,GraphQL,Motion],
  },
  {
    title: "EasyMator",
    description: "An automation platform to Get estimates in minutes using AI for the construction industry. Forget the spreadsheets and pencils,let AI do the work!",
    link: "https://www.easymator.com/",
    tags: [NextJS, TypeScript, Tailwind],
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
