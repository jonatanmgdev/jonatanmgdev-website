import { MenuItem } from "@/types/MenuItem";
import Link from "next/link";

export function generateMenuItems(menuItems: MenuItem[]): JSX.Element[] {
  return menuItems.map((item, index) => {
    return (
      <li key={index} className="relative max-w-fit justify-center items-center text-[--quinary-color] hover:text-[--tertiary-color]">
        <Link href={item.href} className="text-[--quinary-color] hover:text-[--tertiary-color] font-medium justify-center items-center">
          {item.label}
        </Link>
      </li>
    );
  });
}