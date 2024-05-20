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
  IconPostgreSQL,
  IconTailwindCSS,
  IconTypescript,
  IconWordpress,
} from "@assets/icons";
import { PortfolioCard, PortfolioDevelopCard } from ".";
import { SectionHeader } from "@/components/layout/sectionHeader";

async function PortfolioSectionComponent() {
  return (
    <section>
      <SectionHeader
        className="mb-8"
        title="Últimos proyectos"
        subtitle="Mis granitos de arena"
        description="Estos proyectos son los más recientes que he desarrollado de forma
      individual o en los equipos de trabajo donde he podido sumar mis
      granitos de arena. Además puedes ver los proyectos que actualmente
      estoy desarrollando."
      />
      <div className="relative">
        <div className="relative z-10 grid gap-4 grid-cols-6">
          <div className="col-span-full lg:col-span-2 overflow-hidden flex relative">
            <PortfolioCard
              title={"Mi Ventajón"}
              description={
                "App desarrollada en Bitbox SL para el cliente Ventaja Europa. Permite a los usuarios de club Ventajon controlar sus gastos y ahorrar en sus compras del día a día."
              }
              
              techIcons={[
                {icon: IconFlutter(20), name: "Flutter"},
                {icon: IconGithub(20), name: "Github"},
                {icon: IconFigma(20), name: "Figma"},
              ]}
              imageSrc={portfolioVentajon.src}
              url={
                "https://play.google.com/store/apps/details?id=com.ventajon.app.android.prod&hl=es_BO"
              }
              type={"App"}
            />
          </div>
          <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative">
            <PortfolioCard
              title={"Taxilaspalmasdegrancanaria.com"}
              description={
                "Web desarrollada con el CMS Wordpress y el theme Divi. Este sitio permite la reserva online de servicios de taxi en Las Palmas de Gran Canaria."
              }
              techIcons={[
                {icon: IconWordpress(20), name: "Wordpress"},
                {icon: IconPhotoshop(20), name: "Photoshop"},
                {icon: IconGithub(20), name: "Github"},
              ]}
              imageSrc={portfolioTaxiLasPalmas.src}
              url={"https://taxilaspalmasdegrancanaria.com"}
              type={"Web"}
            />
          </div>
          <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative">
            <PortfolioCard
              title={"Jonatanmg.dev"}
              description={
                "Este portfolio está completamente desarrollado desde cero con el objetivo de mostrar mis proyectos, experiencia y skills en programación."
              }
              techIcons={[
                {icon: IconGithub(20), name: "Github"},
                {icon: IconHTML(20), name: "HTML"},
                {icon: IconTypescript(20), name: "Typescript"},
                {icon: IconTailwindCSS(20), name: "TailwindCSS"},
                {icon: IconNextJS(20), name: "NextJS"},
              ]}
              imageSrc={portfolioJonatanmgdev.src}
              url={"https://jonatanmg.dev"}
              type={"Web"}
            />
          </div>
          <div className="col-span-full lg:col-span-3 overflow-hidden relative">
            <PortfolioDevelopCard
              title={"VipCarsTransfers.com"}
              description={
                "Esta plataforma permitirá realizar reservas online de vehículos de lujo con chófer privado para empresas y particulares."
              }
              imageSrc={portfolioLogoVipCarsTransfers.src}
              type={"Web"}
            />
          </div>
          <div className="col-span-full lg:col-span-3 overflow-hidden relative">
            <PortfolioDevelopCard
              title={"Canarybytes.com"}
              description={
                "Landing page con todos los servicios que ofrece la empresa y un amplio portfolio de trabajos realizados a sus clientes."
              }
              imageSrc={portfolioLogoCanarybytes.src}
              type={"Web"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSectionComponent;
