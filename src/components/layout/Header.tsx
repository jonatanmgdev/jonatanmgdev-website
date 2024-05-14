"use client";
import { useMemo } from "react";
import { Spotlight, SpotlightCard } from "../Spotlight";
import CustomButton from "../custom/CustomButton";
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
              className={`bg-neutral-deep shadow-lg shadow-primary-medium/5 border-2 border-neutral-dark hover:border-primary-medium  animate-slidein rounded-full`}
            >
              <div className="py-4 md:px-4 lg:px-8 xl:px-16">
                {/* List of menu items */}
                <ul className="list-none font-semibold flex flex-row items-center lg:gap-10 md:gap-8">
                  {memoizedMenuItems}
                </ul>
              </div>
            </SpotlightCard>
          </Spotlight>
        </nav>
      </div>
      {/* Navigation bar for small screens */}
      <div className="flex justify-between w-full lg:hidden p-2  bg-neutral-deep border-b-2 border-primary-dark shadow-lg">
        <div className="flex items-center">
          <LogoComponent />
        </div>
        <div className="flex items-center justify-end">
          <CustomButton
            text="CV"
            href="#aboutme-section"
          />
        </div>
      </div>
    </header>
  );
}
