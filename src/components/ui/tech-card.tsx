import React from "react";
import { Label } from "./label";

const TechCard = ({ techName }: { techName: string }) => {
  return (
    <div className="px-2 py-1 rounded-md bg-transparent border-[1px] backdrop-blur-sm z-50">
      <Label className="text-xs">{techName}</Label>
    </div>
  );
};

export default TechCard;
