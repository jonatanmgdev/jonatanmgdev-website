"use server";
import Image from "next/image";
import ventajonLogo from "@assets/images/ventajon-cliente-logotipo.png";
import lesmesLogo from "@assets/images/lesmes-servicios-turisticos-cliente-logotipo.png";
import portfolioJonatanmgdev from "@assets/images/portfolio-web-jonatanmgdev.jpg";
import portfolioCanarybytes from "@assets/images/portfolio-web-canarybytes.jpg";
import portfolioVentajon from "@assets/images/portfolio-app-ventajon.jpg";
import { Spotlight } from "@/components";
import { SpotlightCard } from "@/components/Spotlight";
import {
  IconCode,
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
import { PortfolioCard } from ".";


async function PortfolioSectionComponent() {
  return (
    <section>
      <div className="flex align-middle justify-center mb-14">
        <div className="text-center lg:max-w-5xl">
          <span>Mis granitos de arena</span>
          <h2>Últimos proyectos</h2>
          <div className="flex flex-col py-4">
            <p className="mt-2">
              Estos proyectos son los más recientes que he desarrollado de forma
              individual o en los equipos de trabajo donde he podido sumar mis
              granitos de arena. Además puedes ver los proyectos que actualmente
              estoy desarrollando.
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="relative z-10 grid gap-3 grid-cols-6">
          <div className="col-span-full lg:col-span-2 overflow-hidden flex relative">
            <PortfolioCard
              title={"Mi Ventajón"}
              companyName={"Bitbox SL"}
              description={
                "App desarrollada en Bitbox SL para el cliente Ventaja Europa. Permite a los usuarios de club Ventajon controlar sus gastos y ahorrar en sus compras del día a día."
              }
              icons={[IconFlutter(20), IconPostgreSQL(20), IconGithub(20)]}
              imageSrc={portfolioVentajon.src}
              url={
                "https://play.google.com/store/apps/details?id=com.ventajon.app.android.prod&hl=es_BO"
              }
              type={"App"}
            />
          </div>
          <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative">
            <PortfolioCard
              title={"Canarybytes.com"}
              companyName={"Autónomo"}
              description={
                "Web desarrollada para mi propia empresa. Se muestran los distintos servicios de desarrollo web y se le facilitan a las personas interesadas los métodos de contacto."
              }
              icons={[
                IconWordpress(20),
                IconFigma(20),
                IconPhotoshop(20),
                IconGithub(20),
              ]}
              imageSrc={portfolioCanarybytes.src}
              url={"https://canarybytes.com"}
              type={"Web"}
            />
          </div>
          <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative">
            <PortfolioCard
              title={"Jonatanmg.dev"}
              companyName={"Autónomo"}
              description={
                "Esta web está desarrollada y diseñada por mi propia cuenta. El objetivo es mostrar mis proyectos, servicios, experiencia y habilidades en la programación."
              }
              icons={[
                IconNextJS(20),
                IconHTML(20),
                IconTypescript(20),
                IconTailwindCSS(20),
                IconGithub(20),
              ]}
              imageSrc={portfolioJonatanmgdev.src}
              url={"https://jonatanmg.dev"}
              type={"Web"}
            />
          </div>
          <div className="col-span-full lg:col-span-3 overflow-hidden relative">
            <Spotlight className="w-full h-full">
              <SpotlightCard className="h-full">
                <div className="rounded-xl w-full h-full bg-neutral-deep border border-neutral-medium hover:border-primary-dark shadow-lg p-8">
                  <div className="grid sm:grid-cols-2">
                    <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                      <div className="flex justify-center items-center gap-2 relative bg-primary-dark rounded-lg max-w-max p-2">
                        {IconCode(20)}
                        <p className="text-neutral-dark font-semibold text-lg">
                          En desarrollo
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h2 className="text-lg text-white">Lesmestur.com</h2>
                        <p className="text-secondary">
                          Nueva web de Lesmestur, gestión de reservas online y
                          digitalización del modelo de negocio.
                        </p>
                      </div>
                    </div>
                    <div className="overflow-hidden relative mt-6 sm:mt-auto h-fit -mb-[34px] -mr-[34px] sm:ml-6 py-6 p-6 border border-primary-dark rounded-tl-3xl">
                      <Image
                        src={lesmesLogo}
                        width={620}
                        height={620}
                        alt="Logotipo de Lesmestur"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Spotlight>
          </div>
          <div className="col-span-full lg:col-span-3 overflow-hidden relative">
            <Spotlight className="w-full h-full">
              <SpotlightCard className="h-full">
                <div className="rounded-xl w-full h-full bg-neutral-deep border border-neutral-medium hover:border-primary-dark shadow-lg p-8">
                  <div className="grid sm:grid-cols-2">
                    <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                      <div className="flex justify-center items-center gap-2 relative bg-primary-dark rounded-lg max-w-max p-2">
                        {IconCode(20)}
                        <p className="text-neutral-dark font-semibold text-lg">
                          En desarrollo
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h2 className="text-lg text-white">Ventajon.com</h2>
                        <p className="text-secondary">
                          Nueva web de Ventaja Europa, con una interfaz renovada
                          y mejor experiencia de usuario.
                        </p>
                      </div>
                    </div>
                    <div className="overflow-hidden relative mt-6 sm:mt-auto h-fit -mb-[34px] -mr-[34px] sm:ml-6 py-6 p-6 border border-primary-dark rounded-tl-3xl">
                      <Image
                        src={ventajonLogo}
                        width={620}
                        height={620}
                        alt="Logotipo de Ventajon"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Spotlight>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSectionComponent;
