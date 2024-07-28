import { MenuItem } from "@/types";
import LogoComponent from "../components/layout/logo/LogoComponent";
import { RoutePaths } from "@/core/config/router/routes";
export const desktopMenuItemsList: MenuItem[] = [
  { label: "Sobre mi", href: RoutePaths.Home+"#aboutme-section" },
  { label: "Formación", href: RoutePaths.Home+"#formation-section" },
  { label: "Experiencia", href: RoutePaths.Home+"#experience-section" },
  {
    label: <LogoComponent />,
    href: RoutePaths.Home,
    applyStyles: false,
    hiddenMobile: true
  },
  { label: "Portfolio", href: RoutePaths.Home+"#portfolio-section" },
  { label: "Skills", href: RoutePaths.Home+"#skills-section" },
  { label: "Contacto", href: RoutePaths.Home+"#contact-section" },
];