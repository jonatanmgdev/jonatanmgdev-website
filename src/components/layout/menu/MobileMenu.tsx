"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MenuItem } from "@/types";
import LogoComponent from "../logo/LogoComponent";
import { RoutePaths } from "@/core/config/router/routes";

interface MenuProps {
  openIcon: JSX.Element;
  closeIcon: JSX.Element;
  items: MenuItem[];
}

const MobileMenu: React.FC<MenuProps> = ({ openIcon, closeIcon, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex container w-full mx-6 py-4 md:px-4 lg:px-8 xl:px-16 bg-neutral-deep border-2 border-neutral-light hover:border-primary-dark rounded-full">
      <div className="flex flex-row w-full items-center justify-between mx-6 cursor-pointer gap-4">
        <span onClick={() => setIsOpen(true)} className="text-white">{openIcon}</span><Link className="h-fit" href={RoutePaths.Home}><LogoComponent /></Link>
      </div>
      <div
        className={`fixed w-full top-0 left-0 h-full bg-neutral-deep shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <div className="cursor-pointer text-white" onClick={handleClose}>
            {closeIcon}
          </div>
        </div>
        <ul className="p-4 list-none">
          {items
            .filter((item) => !item.hiddenMobile)
            .map((item, index) => (
              <li key={index} className="py-4 border-b border-neutral-light">
                <Link
                  href={item.href}
                  onClick={handleClose}
                  className={`mb-4 ${item.applyStyles ? "text-blue-500" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
