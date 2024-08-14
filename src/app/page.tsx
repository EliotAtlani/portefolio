"use client";
import BlurIn from "@/components/magicui/blur-in";
import { OrbitingCirclesSection } from "@/components/orbit-techs";
import CardProject from "@/components/ui/card-project";
import { FlipWords } from "@/components/ui/flip-words";
import { Label } from "@/components/ui/label";
import LinkSocialNetwork from "@/components/ui/link-social-network";
import Timeline from "@/components/ui/timeline";
import { descriptions, milestones, words } from "@/data/pageContent";
import { projects } from "@/data/projects";
import { socialNetworks } from "@/data/socialNetworks";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between min-w-1/2 mx-auto">
      <motion.section
        className="flex lg:flex-row flex-col h-4/5 items-center justify-center gap-20 md:gap-8 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col ">
          <BlurIn
            word="Hello, I'm Eliot Atlani 🙋‍♂️"
            className="text-2xl md:text-4xl font-bold md:text-start text-center"
          />

          <Label className=" text-sm md:text-xl font-light text-muted-foreground  md:text-start text-center">
            I&apos;m a
            <FlipWords words={words} /> <br />
            looking for a summer internship.
          </Label>
          <div className="flex gap-4 justify-center md:justify-start mt-4">
            {socialNetworks.map((socialNetwork, index) => (
              <LinkSocialNetwork key={index} socialNetwork={socialNetwork} />
            ))}
          </div>
        </div>
        <OrbitingCirclesSection />
      </motion.section>

      <motion.section
        className="flex flex-col text-center mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Label className="px-10 md:px-0 text-2xl font-bold">
          Academic and professional timeline
        </Label>
        <div className="grid grid-cols-1 mt-12 place-items-center ">
          <Timeline milestones={milestones} descriptions={descriptions} />
        </div>
      </motion.section>

      <motion.section
        className="flex flex-col text-center min-h-screen mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Label className="text-2xl font-bold">Latest projects</Label>
        <Label className="font-light text-muted-foreground my-4">
          Explore my latest projects, showcasing my skills in software
          development and engineering.
        </Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 place-items-center">
          {projects.map((project, index) => (
            <CardProject key={index} project={project} index={index} />
          ))}
        </div>
      </motion.section>
    </main>
  );
}
