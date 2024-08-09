"use client";
import React from "react";
import { navbarTabs } from "./navbarTabs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Label } from "../ui/label";

const Navbar = () => {
  const pathname = usePathname();
  const activeTab = navbarTabs.find((tab) => tab.href === pathname);

  return (
    <div className="fixed top-4 w-full flex justify-center">
      <div className="flex rounded-md gap-4">
        {navbarTabs.map((tab, index) => (
          <Link
            href={tab.href}
            key={index}
            className={cn("relative px-4 py-2 rounded-full cursor-pointer")}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {activeTab == tab && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-primary/70 dark:bg-primary/30 rounded-full "
                )}
              />
            )}
            <Label className="relative block cursor-pointer">{tab.name}</Label>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
