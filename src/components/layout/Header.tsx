"use client";
import { useMemo } from "react";
import { useScrollDirection } from "@/hooks";
import { generateMenuItems } from "@/utils";
import { desktopMenuItemsList } from "@/data";
import { SpotlightWrapper } from "..";
import LogoComponent from "./logo/LogoComponent";

/**
 * Header component of the web
 * @returns {JSX.Element} HTML content of the component.
 * @author Jonatan Montesdeoca González
 **/

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
          <SpotlightWrapper spotlightCardClassName="bg-neutral-deep border border-neutral-light hover:border-primary-dark rounded-full">
            <div className="py-4 md:px-4 lg:px-8 xl:px-16">
              <ul className="list-none font-semibold flex flex-row items-center lg:gap-10 md:gap-8">
                {memoizedMenuItems}
              </ul>
            </div>
          </SpotlightWrapper>
        </nav>
      </div>
      <div
        className={`lg:hidden fixed w-full z-50 ${
          scrollDirection === "down" ? "-top-96" : "top-0"
        } transition-all duration-1000 flex justify-center mt-4`}
      >
        <div className="w-fit bg-neutral-deep border border-primary-dark hover:border-primary-dark rounded-full py-2 px-8">
          <LogoComponent />
        </div>
      </div>
    </header>
  );
}
