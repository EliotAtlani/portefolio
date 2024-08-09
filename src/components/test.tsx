"use client";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
export function OrbitingCirclesSection() {
  const [radius, setRadius] = useState<[number, number, number]>([
    80, 150, 220,
  ]); // Default for larger screens

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius([40, 90, 150]); // Smaller radius for small screens
      } else {
        setRadius([80, 150, 220]); // Larger radius for larger screens
      }
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex md:h-[500px] md:w-[500px] h-[300px] w-[300px] flex-col items-center justify-center rounded-lg  bg-background md:shadow-xl">
      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={0}
        radius={radius[0]}
      >
        <Icons.netlify />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={4}
        radius={radius[0]}
      >
        <Icons.expo />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={8}
        radius={radius[0]}
      >
        <Icons.reactNative />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={12}
        radius={radius[0]}
      >
        <Icons.nginx />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={16}
        radius={radius[0]}
      >
        <Icons.mongo />
      </OrbitingCircles>

      {/* Middle Circles */}
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        radius={radius[1]}
        duration={20}
        delay={5}
        reverse
      >
        <Icons.fastapi />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        radius={radius[1]}
        duration={20}
        delay={10}
        reverse
      >
        <Icons.vitejs />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        radius={radius[1]}
        duration={20}
        delay={15}
        reverse
      >
        <Icons.nodejs />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        radius={radius[1]}
        duration={20}
        delay={0}
        reverse
      >
        <Icons.docker />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={radius[2]}
        duration={20}
        delay={0}
      >
        <Icons.postgresql />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={radius[2]}
        duration={20}
        delay={2.5}
      >
        <Icons.next />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={radius[2]}
        duration={20}
        delay={5}
      >
        <Icons.react />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={radius[2]}
        duration={20}
        delay={7.5}
      >
        <Icons.aws />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={radius[2]}
        duration={20}
        delay={10}
      >
        <Icons.prisma />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={radius[2]}
        duration={20}
        delay={12.5}
      >
        <Icons.gitlab />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={radius[2]}
        duration={20}
        delay={15}
      >
        <Icons.tailwindcss />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={radius[2]}
        duration={20}
        delay={17.5}
      >
        <Icons.typescript />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  next: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-auto">
          <img
            src="/techs/next.png"
            alt="Next.js"
            className="h-12 w-12 border-[1px] border-muted-foreground rounded-full bg-white"
          />
        </TooltipTrigger>
        <TooltipContent className="rounded-full">
          <p>NextJS</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  vitejs: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-auto">
          <img src="/techs/vitejs.png" alt="Vite.js" className="h-6 w-6" />
        </TooltipTrigger>
        <TooltipContent className="rounded-full">
          <p>ViteJS</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  react: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-auto">
          <img src="/techs/react.svg" alt="React" className="h-12 w-12" />
        </TooltipTrigger>
        <TooltipContent className="rounded-full">
          <p>ReactJS</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  docker: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-auto">
          <img src="/techs/docker.webp" alt="Docker" className="h-10 w-10" />
        </TooltipTrigger>
        <TooltipContent className="rounded-full">
          <p>Docker</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  nodejs: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-auto">
          <img src="/techs/nodejs.png" alt="Node.js" className="h-8 w-8" />
        </TooltipTrigger>
        <TooltipContent className="rounded-full">
          <p>NodeJS</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  postgresql: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-auto">
          <img
            src="/techs/postgres.png"
            alt="PostgreSQL"
            className="h-12 w-12"
          />
        </TooltipTrigger>
        <TooltipContent className="rounded-full">
          <p>PostgreSQL</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  prisma: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-auto">
          <img src="/techs/prisma.png" alt="Prisma" className="h-12 w-12" />
        </TooltipTrigger>
        <TooltipContent className="rounded-full">
          <p>Prisma</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  tailwindcss: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-auto">
          <img
            src="/techs/tailwind.png"
            alt="Tailwind CSS"
            className="h-12 w-12"
          />
        </TooltipTrigger>
        <TooltipContent className="rounded-full">
          <p>TailwindCSS</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  typescript: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-auto">
          <img
            src="/techs/typescript.webp"
            alt="TypeScript"
            className="h-8 w-8"
          />
        </TooltipTrigger>
        <TooltipContent className="rounded-full">
          <p>TypeScript</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  nextjs: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-auto">
          <img src="/techs/nextjs.png" alt="Next.js" className="h-12 w-12" />
        </TooltipTrigger>
        <TooltipContent className="rounded-full">
          <p>NextJS</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  nginx: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-auto">
          <img src="/techs/nginx.svg" alt="NGINX" className="h-12 w-12" />
        </TooltipTrigger>
        <TooltipContent className="rounded-full">
          <p>Nginx</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  aws: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-auto">
          <img src="/techs/aws.svg" alt="AWS" className="h-12 w-12" />
        </TooltipTrigger>
        <TooltipContent className="rounded-full">
          <p>AWS</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  netlify: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-auto">
          <img src="/techs/netlify.avif" alt="Netlify" className="h-6 w-6" />
        </TooltipTrigger>
        <TooltipContent className="rounded-full">
          <p>Netlify</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  gitlab: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-auto">
          <img src="/techs/gitlab.webp" alt="GitLab" className="h-12 w-12" />
        </TooltipTrigger>
        <TooltipContent className="rounded-full">
          <p>Gitlab</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  expo: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-auto">
          <img src="/techs/expo.png" alt="Expo" className="h-10 w-10" />
        </TooltipTrigger>
        <TooltipContent className="rounded-full">
          <p>ExpoGo</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  fastapi: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-auto">
          <img src="/techs/fastapi.svg" alt="FastAPI" className="h-10 w-10" />
        </TooltipTrigger>
        <TooltipContent className="rounded-full">
          <p>FastAPI</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  reactNative: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-auto">
          <img
            src="/techs/react-native.svg"
            alt="React Native"
            className="h-12 w-12"
          />
        </TooltipTrigger>
        <TooltipContent className="rounded-full">
          <p>React Native</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  mongo: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-auto">
          <img src="/techs/mongo.png" alt="MongoDB" className="h-12 w-12" />
        </TooltipTrigger>
        <TooltipContent className="rounded-full">
          <p>MongoDb</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  nestjs: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-auto">
          <img src="/techs/nestjs.svg" alt="NestJS" className="h-12 w-12" />
        </TooltipTrigger>
        <TooltipContent className="rounded-full">
          <p>NestJS</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
