import { MenuItem } from "@/types";
import LogoComponent from "../components/layout/logo/LogoComponent";

export const desktopMenuItemsList: MenuItem[] = [
  { label: "Sobre mi", href: "#aboutme-section" },
  { label: "Formación", href: "#formation-section" },
  { label: "Experiencia", href: "#experience-section" },
  {
    label: <LogoComponent />,
    href: "https://jonatanmg.dev",
    applyStyles: false,
  },
  { label: "Portfolio", href: "#portfolio-section" },
  { label: "Skills", href: "#skills-section" },
  { label: "Contacto", href: "#contact-section" },
];