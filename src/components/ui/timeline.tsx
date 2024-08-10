"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Label } from "./label";
import { cn } from "@/lib/utils";
import { Experience } from "@/lib/types";

function Item({
  milestones,
  descriptions,
  mainIndex,
}: {
  milestones: number[];
  descriptions: Experience[];
  mainIndex: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <div ref={ref} style={{ width: "100%", position: "relative" }}>
        {/* Descriptions next to milestones */}
        {milestones.map((pos, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col items-center w-[200px] absolute",
              descriptions[index].category === "work"
                ? "left-[10px]"
                : "right-[10px]"
            )}
            style={{
              top: pos - 10, // Adjusting to center description with the circle
            }}
          >
            <Label className="text-sm text-primary">
              {descriptions[index].title}
            </Label>
            <Label className="text-xs">{descriptions[index].place}</Label>
            <Label className="text-xs text-muted-foreground">
              {descriptions[index].date}
            </Label>
          </div>
        ))}
        <figure
          className="progress"
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <svg
            id="progress"
            width="10"
            height="400"
            viewBox="0 0 10 400"
            style={{ overflow: "visible" }}
          >
            {/* The main timeline line */}
            <line
              x2="5"
              y2="400"
              x1="5"
              y1="0"
              stroke="#ddd"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <motion.line
              x2="5"
              y2="400"
              x1="5"
              y1="0"
              stroke="#6d28d9"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ pathLength: pathLength }}
            />

            {/* Circles representing milestones */}
            {milestones.map((pos, index) => (
              <circle
                key={index}
                cx="5"
                cy={pos}
                r="6"
                fill="white"
                stroke="#6d28d9"
                strokeWidth="3"
              />
            ))}
          </svg>
        </figure>
      </div>
    </section>
  );
}

export default function Timeline({
  milestones,
  descriptions,
}: {
  milestones: number[];
  descriptions: Experience[];
}) {
  return (
    <div className="flex justify-center gap-16 w-full">
      <Label className="font-medium text-muted-foreground">Academic</Label>
      <Item milestones={milestones} descriptions={descriptions} mainIndex={0} />
      <Label className="font-medium text-muted-foreground">Professional</Label>
    </div>
  );
}
