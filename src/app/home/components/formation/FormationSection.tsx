"use server";
import portfolioJonatanmgdev from "@assets/images/portfolio-web-jonatanmgdev.jpg";
import portfolioTaxiLasPalmas from "@assets/images/portfolio-web-taxilaspalmas.webp";
import portfolioLogoCanarybytes from "@assets/images/canarybytes-portfolio-logo.png";
import portfolioLogoVipCarsTransfers from "@assets/images/vipcarstransfers-portfolio-logo.png";
import portfolioVentajon from "@assets/images/portfolio-app-ventajon.jpg";
import {
  IconFigma,
  IconFlutter,
  IconGithub,
  IconHTML,
  IconNextJS,
  IconPhotoshop,
  IconTailwindCSS,
  IconTypescript,
  IconWordpress,
} from "@assets/icons";
import { SectionHeader } from "@/components/layout/SectionHeader";

async function FormationSection() {
  return (
    <section>
      <SectionHeader
        className="mb-8"
        title="Mi formación"
        subtitle="Cursos y certificaciones"
        description="Formarse es una necesidad en esta profesión y es por ello que trato de mantenerme actualizado con cursos online. Además he realizado en el pasado dos ciclos formativos con los que obtuve la base necesaria para empezar."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ul className="mt-4">
          <li>
            FP Grado superior en desarrollo de aplicaciones multiplataforma.
          </li>
          <li>FP Grado medio en sistemas microninformáticos y redes.</li>
          <li>Curso React Native con EXPO (30 Horas).</li>
        </ul>
      </div>
    </section>
  );
}

export default FormationSection;
