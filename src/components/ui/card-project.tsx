import React from "react";
import { CardSpotlight, Step } from "./card-spotlight";
import { Project } from "@/lib/types";
import { Label } from "./label";
import TechCard from "./tech-card";
import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";
import { ArrowRightIcon, GlobeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const CardProject = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, x: index % 2 == 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <CardSpotlight
        className="h-96 w-96 relative rounded-xl"
        colors={project.colors}
      >
        <div className="px-4 py-2 flex flex-col h-full">
          <p
            className={cn(
              "text-xl font-bold relative z-20 mt-2",
              project.colorCard
            )}
          >
            {project.title}
          </p>
          <Label className="text-xs text-muted-foreground mt-2">
            {" "}
            {project.date}
          </Label>
          <div className="grow z-20">
            <p className="text-neutral-300 mt-4 relative z-20 text-sm grow">
              {project.description}
            </p>
            <div className="mt-4 z-20 flex gap-2 justify-center">
              {project.href && (
                <Link
                  target="_blank"
                  href={project.href}
                  className={cn(
                    "text-sm border-[1px] px-2 py-1 rounded-[8px] bg-transparent  inline-flex items-center justify-center",

                    project.borderColor
                  )}
                >
                  <GlobeIcon size={16} className="mr-2" />
                  Website
                </Link>
              )}

              {project.github && (
                <Link
                  href={project.github}
                  className="bg-transparent border-[1px] border-muted-foreground p-1.5 backdrop-blur-sm rounded-[8px] inline-flex cursor-pointer"
                  target="_blank"
                >
                  <Image
                    src="/logos/github-mark.svg"
                    alt="Github"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </Link>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 ">
            {project.technologies.map((technology, index) => (
              <TechCard techName={technology} key={index} />
            ))}
          </div>
        </div>
      </CardSpotlight>
    </motion.div>
  );
};

export default CardProject;
