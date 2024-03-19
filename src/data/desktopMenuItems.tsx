import { MenuItem } from "@/types";
import LogoComponent from "../../public/logo/logoComponent";

export const desktopMenuItems: MenuItem[] = [
  { label: "Inicio", href: "#welcome-section" },
  { label: "Sobre mi", href: "#aboutme-section" },
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