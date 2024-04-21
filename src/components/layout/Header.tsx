"use client";
import { useMemo } from "react";
import Spotlight, { SpotlightCard } from "../Spotlight";
import CustomButton from "../CustomButton";
import LogoComponent from "../../../public/logo/logoComponent";
import { useScrollDirection } from "@/hooks";
import { generateMenuItems } from "@/utils";
import { desktopMenuItemsList } from "@/data";

/*
  Author: [Jonatan Montesdeoca González]
  Date Created: [15/03/2024]
  Description: [Header fuctional component of the website]
*/

export default function Header() {
  // Get scroll direction
  const scrollDirection = useScrollDirection();
  // Generate menu items and memoize for performance improvement
  const memoizedMenuItems = useMemo(() => generateMenuItems(desktopMenuItemsList), []);

  return (
    <header>  
      <div className="hidden lg:flex w-full fixed z-[500] p-6">
        <nav className={`max-w-screen-xl mx-auto relative z-10 ${ scrollDirection === "down" ? "-top-96" : "top-0"} transition-all duration-1000`}>
          <Spotlight>
            <SpotlightCard className={`card-secondary animate-slidein shadow-lg rounded-full`}>
              <div className="py-4 md:px-4 lg:px-8 xl:px-16">
                {/* List of menu items */}
                <ul className="flex flex-row items-center lg:gap-10 md:gap-8">
                  {memoizedMenuItems}
                </ul>
              </div>
            </SpotlightCard>
          </Spotlight>
        </nav>
      </div>
      {/* Navigation bar for small screens */}
      <div className="lg:hidden flex p-3 items-center justify-between bg-[--primary-color] w-full shadow-lg">
        <LogoComponent/>
      {/* TODO: AÑADIR AL BOTON ENLACE DE CV  */}
        <CustomButton text="CV" className="btn-primary" href="#aboutme-section" />
      </div>
    </header>
  );
}