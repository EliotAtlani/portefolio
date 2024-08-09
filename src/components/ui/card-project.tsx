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

const CardProject = ({ project }: { project: Project }) => {
  return (
    <CardSpotlight
      className="h-96 w-96 relative"
      color={project.colorCard}
      colors={project.colors}
    >
      <div className="absolute top-4 right-4 z-50 cursor-pointer">
        <Link
          href={project.href}
          className="bg-transparent border-[1px]  border-muted-foreground p-1 backdrop-blur-sm rounded-md inline-flex cursor-pointer"
        >
          <Image
            src="/logos/github-mark.svg"
            alt="Github"
            width={24}
            height={24}
            className="p-1 cursor-pointer"
          />
        </Link>
      </div>
      <div className="px-4 py-2 flex flex-col h-full">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">
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
          <div className="mt-4 z-20 ">
            <Link
              href={project.href}
              className={cn(
                "text-sm border-[1px] px-2 py-1 rounded-md bg-transparent  inline-flex items-center justify-center",

                project.borderColor
              )}
            >
              <GlobeIcon size={16} className="mr-2" />
              Website
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 ">
          {project.technologies.map((technology, index) => (
            <TechCard techName={technology} key={index} />
          ))}
        </div>
      </div>
    </CardSpotlight>
  );
};

export default CardProject;
