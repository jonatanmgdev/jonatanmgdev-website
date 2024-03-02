"use server";

import Spotlight, { SpotlightCard } from "@/components/Spotlight";

export default async function AboutMeComponent() {
  return (
    <section className="bg-[--primary-color]">
      <div className="relative isolate overflow-hidden px-6 py-24 sm:py-40 lg:overflow-visible lg:px-0">
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="md:flex md:justify-between gap-8">
              <div className="md:w-1/2 mb-4 md:mb-0">
                <div className="flex">
                  <div className="flex w-max ">
                    <p className="animate-typing overflow-hidden whitespace-nowrap text-xl font-semibold leading-7 text-[--tertiary-color]">
                      {"<AboutMeComponent />"}
                    </p>
                  </div>
                </div>
                <h2 className="animate-slideinLeft mt-2">
                  Conoce más sobre mí
                </h2>
                <div className="animate-slideinLeft mt-6">
                  <p>
                    Soy un entusiasta del desarrollo de sitios web. Inicié mi
                    trayectoria con Wordpress y Prestashop en 2011. Luego, en
                    2021, completé el ciclo superior en desarrollo de
                    aplicaciones multiplataforma y desde entonces me he enfocado
                    en crear soluciones digitales personalizadas.
                  </p>
                  <p className="mt-2">
                    En el ámbito del desarrollo web, utilizo tecnologías como
                    React.js, Node.js, TypeScript y Next.js. Para el desarrollo
                    de aplicaciones, mis dos frameworks favoritos son Flutter y
                    React Native.
                  </p>
                  <p className="mt-2">
                    Disfruto creando aplicaciones web eficientes y escalables, me gusta involucrarme lo máximo posible en los proyectos y de ahí viene mi 
                    interés en ser un desarrollador Full-stack.
                  </p>
                </div>
                <button type="button" className="btn-primary shrink-0 mt-6">
                  Descargar CV
                </button>
              </div>
              <div className="md:w-1/2 animate-slideinRight">
                <Spotlight>
                  <SpotlightCard className="card-primary">
                    <div className="flex h-full items-center justify-start">
                      <div className="items-start justify-start">
                        <div className="flex">
                          <div className="flex w-max">
                            <p className="animate-typing overflow-hidden whitespace-nowrap text-xl font-semibold leading-7">
                              <span className="text-[--quinary-color]">
                                {" "}
                                {"> console.log(JSON.stringify("}
                              </span>
                              <span className="text-[--tertiary-color]">
                                user
                              </span>
                              <span className="text-[--quinary-color]">
                                {"));"}
                              </span>
                            </p>
                            <p className="animate-pulse text-3xl font-semibold leading-7 text-[--tertiary-color]">
                              {"_"}
                            </p>
                          </div>
                        </div>
                        <code>
                          <p className="mt-4 text-sm">// User JSON</p>
                          <p className="items-start">
                            <span className="undefined text-[#C98BDF]">
                              {"{"}
                            </span>{" "}
                          </p>
                          <p className="items-start">
                            <span className="ml-4 text-[--quinary-color]">
                              "name":
                            </span>
                            <span className="ml-2 text-[--tertiary-color]">
                              {'"Jonatan"'}
                            </span>
                            <span className="text-[--quinary-color]">
                              {","}
                            </span>
                          </p>
                          <p className="items-start">
                            <span className="ml-4 text-[--quinary-color]">
                              "surname":
                            </span>
                            <span className="ml-2 text-[--tertiary-color]">
                              {'"Montesdeoca"'}
                            </span>
                            <span className="text-[--quinary-color]">
                              {","}
                            </span>
                          </p>
                          <p className="items-start">
                            <span className="ml-4 text-[--quinary-color]">
                              "lastname":
                            </span>
                            <span className="ml-2 text-[--tertiary-color]">
                              {'"González"'}
                            </span>
                            <span className="text-[--quinary-color]">
                              {","}
                            </span>
                          </p>
                          <p className="items-start">
                            <span className="ml-4 text-[--quinary-color]">
                              "birthday":
                            </span>
                            <span className="ml-2 text-[--tertiary-color]">
                              {'"10/04/1994"'}
                            </span>
                            <span className="text-[--quinary-color]">
                              {","}
                            </span>
                          </p>
                          <p className="items-start">
                            <span className="ml-4 text-[--quinary-color]">
                              "job":
                            </span>
                            <span className="ml-2 text-[--tertiary-color]">
                              {'"Developer Full-Stack"'}
                            </span>
                            <span className="text-[--quinary-color]">
                              {","}
                            </span>
                          </p>
                          <p className="items-start">
                            <span className="ml-4 text-[--quinary-color]">
                              "city":
                            </span>
                            <span className="ml-2 text-[--tertiary-color]">
                              {'"Las Palmas de Gran Canaria"'}
                            </span>
                            <span className="text-[--quinary-color]">
                              {","}
                            </span>
                          </p>
                          <p className="items-start">
                            <span className="ml-4 text-[--quinary-color]">
                              "email":
                            </span>
                            <span className="ml-2 text-[--tertiary-color]">
                              {'"info@jonatanmg.dev"'}
                            </span>
                            <span className="text-[--quinary-color]">
                              {","}
                            </span>
                          </p>
                          <p className="items-start">
                            <span className="ml-4 text-[--quinary-color]">
                              "yearsOfExperience":
                            </span>
                            <span className="ml-2 text-[--tertiary-color]">
                              {"2"}
                            </span>
                            <span className="text-[--quinary-color]">
                              {","}
                            </span>
                          </p>
                          <p className="items-start">
                            <span className="ml-4 text-[--quinary-color]">
                              "language":
                            </span>
                            <span className="ml-2 text-[--tertiary-color]">
                              {'"Spanish"'}
                            </span>
                            <span className="text-[--quinary-color]">
                              {","}
                            </span>
                          </p>
                          <p className="items-start">
                            <span className="ml-4 text-[--quinary-color]">
                              "webFramework":
                            </span>
                            <span className="ml-2 text-[--tertiary-color]">
                              {'"Next.js"'}
                            </span>
                            <span className="text-[--quinary-color]">
                              {","}
                            </span>
                          </p>
                          <p className="items-start">
                            <span className="ml-4 text-[--quinary-color]">
                              "mobileFramework":
                            </span>
                            <span className="ml-2 text-[--tertiary-color]">
                              {'"Flutter"'}
                            </span>
                            <span className="text-[--quinary-color]">
                              {","}
                            </span>
                          </p>
                          <p className="items-start">
                            <span className="ml-4 text-[--quinary-color]">
                              "programmingLanguage":
                            </span>
                            <span className="ml-2 text-[--tertiary-color]">
                              {'"Typescript"'}
                            </span>
                          </p>
                          <p className="items-start">
                            <span className="undefined text-[#C98BDF]">
                              {"}"}
                            </span>{" "}
                          </p>
                        </code>
                      </div>
                    </div>
                  </SpotlightCard>
                </Spotlight>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
