"use server";
import portfolioJonatanmgdev from "@assets/images/jonatanmgdev-portfolio-web.webp";
import portfolioTaxiLasPalmas from "@assets/images/portfolio-web-taxilaspalmas.webp";
import portfolioLogoAirproradio from "@assets/images/Airproradio-portfolio-logo.png";
import portfolioLogoVipCarsTransfers from "@assets/images/vipcarstransfers-portfolio-logo.png";
import portfolioVentajon from "@assets/images/portfolio-app-ventajon.jpg";
import {
  IconFigma,
  IconFlutter,
  IconGithub,
  IconHTML,
  IconNextJS,
  IconPhotoshop,
  IconWordpress,
} from "@/components/svgIcons";
import { PortfolioCard, PortfolioDevelopCard } from ".";
import SectionHeader from "@/components/SectionHeader";

async function PortfolioSectionComponent() {
  return (
    <section>
      <SectionHeader
        className="mb-8"
        title="Últimos proyectos"
        subtitle="Mis granitos de arena"
        description="Estos son los proyectos más recientes en los que he trabajado, ya sea individualmente o colaborando con mis compañeros de equipo. Solo comparto el acceso a mis proyectos individuales en GitHub."
      />
      <div className="relative">
        <div className="relative z-10 grid gap-4 grid-cols-6">
          <div className="col-span-full lg:col-span-2 overflow-hidden flex relative">
            <PortfolioCard
              title={"App Mi Ventajón"}
              description="App desarrollada colaborando en el equipo de Bitbox SL. Permite a los usuarios de club Ventajon controlar sus gastos y ahorrar en sus compras del día a día."
              techIcons={[
                { icon: IconFlutter(20), name: "Flutter" },
                { icon: IconGithub(20), name: "Github" },
                { icon: IconFigma(20), name: "Figma" },
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
              description="Este sitio permite la reserva online de servicios de taxi en Las Palmas de Gran Canaria desde un formulario o mediante otros métodos de contacto."
              techIcons={[
                { icon: IconWordpress(20), name: "Wordpress" },
                { icon: IconHTML(20), name: "HTML" },
                { icon: IconPhotoshop(20), name: "Photoshop" },
              ]}
              imageSrc={portfolioTaxiLasPalmas.src}
              url={"https://taxilaspalmasdegrancanaria.com"}
              type={"Web"}
            />
          </div>
          <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative">
            <PortfolioCard
              title={"Jonatanmg.dev"}
              description="Mi portfolio es un proyecto en el que he podido mostrar mis trabajos, formación y skills. Si lo deseas, accede al repositorio en github y utilízalo libremente."
              techIcons={[
                { icon: IconNextJS(20), name: "NextJS" },
                { icon: IconGithub(20), name: "Github" },
                { icon: IconFigma(20), name: "Figma" },
                { icon: IconPhotoshop(20), name: "Photoshop" },
              ]}
              imageSrc={portfolioJonatanmgdev.src}
              url={"#welcome-section"}
              gitHubUrl={
                "https://github.com/jonatanmgdev/jonatanmgdev-website.git"
              }
              type={"Web"}
            />
          </div>
          <div className="col-span-full lg:col-span-3 overflow-hidden relative h-full">
            <PortfolioDevelopCard
              title={"VipCarsTransfers.com"}
              description="Esta plataforma permitirá realizar reservas online de vehículos de lujo con chófer privado para empresas y particulares."
              imageSrc={portfolioLogoVipCarsTransfers.src}
              type={"Web"}
            />
          </div>
          <div className="col-span-full lg:col-span-3 overflow-hidden relative h-full">
            <PortfolioDevelopCard
              title={"AirProRadio.com"}
              description="Landing page con todos los features que ofrece el software de radiodifusión de Air Pro Radio el cual es uno de mis side projects."
              imageSrc={portfolioLogoAirproradio.src}
              type={"Web"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSectionComponent;
