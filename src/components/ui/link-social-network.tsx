import Link from "next/link";
import React from "react";
import Image from "next/image";
import { SocialNetwork } from "@/lib/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const LinkSocialNetwork = ({
  socialNetwork,
}: {
  socialNetwork: SocialNetwork;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild className="w-auto">
          <Link
            href={socialNetwork.href}
            className=" bg-transparent border-[1px] border-muted px-2 py-1 rounded-md"
          >
            <Image
              src={socialNetwork.svg}
              alt={socialNetwork.name}
              width={24}
              height={24}
              className="p-1"
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{socialNetwork.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LinkSocialNetwork;
