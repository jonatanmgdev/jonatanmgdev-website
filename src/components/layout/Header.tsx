"use client";
import { useMemo } from "react";
import { Spotlight, SpotlightCard } from "../Spotlight";
import LogoComponent from "../../../public/logo/logoComponent";
import { useScrollDirection } from "@/hooks";
import { generateMenuItems } from "@/utils";
import { desktopMenuItemsList } from "@/data";

export default function Header() {
  // Get scroll direction
  const scrollDirection = useScrollDirection();
  // Generate menu items and memoize for performance improvement
  const memoizedMenuItems = useMemo(
    () => generateMenuItems(desktopMenuItemsList),
    []
  );

  return (
    <header>
      <div className="hidden lg:flex w-full fixed z-[500] p-6">
        <nav
          className={`max-w-screen-xl mx-auto relative z-10 ${
            scrollDirection === "down" ? "-top-96" : "top-0"
          } transition-all duration-1000`}
        >
          <Spotlight>
            <SpotlightCard
              className={`bg-neutral-deep border-2 border-neutral-dark hover:border-primary-medium  animate-slidein rounded-full`}
            >
              <div className="py-4 md:px-4 lg:px-8 xl:px-16">
                <ul className="list-none font-semibold flex flex-row items-center lg:gap-10 md:gap-8">
                  {memoizedMenuItems}
                </ul>
              </div>
            </SpotlightCard>
          </Spotlight>
        </nav>
      </div>
      <div className="flex justify-center w-full lg:hidden py-4 bg-neutral-deep border-b-2 border-primary-dark rounded-b-2xl">
        <LogoComponent />
      </div>
    </header>
  );
}
