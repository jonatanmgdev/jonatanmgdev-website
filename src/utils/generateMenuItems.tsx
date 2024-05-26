"use client";
import { MenuItem } from "@/types/MenuItem";

export function generateMenuItems<FC>(menuItems: MenuItem[]): JSX.Element[] {
  return menuItems.map((item, index) => {
    return (
      <li key={index} >
        <a
          href={item.href}
          className="flex hover:text-accent-dark"
        >
          {item.label}
        </a>
      </li>
    );
  });
}
