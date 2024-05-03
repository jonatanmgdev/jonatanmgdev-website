import { MenuItem } from "@/types/MenuItem";
import Link from "next/link";

export function generateMenuItems(menuItems: MenuItem[]): JSX.Element[] {
  return menuItems.map((item, index) => {
    return (
      <li key={index} className="relative max-w-fit justify-center">
        <Link href={item.href} className="justify-center items-center">
          {item.label}
        </Link>
      </li>
    );
  });
}