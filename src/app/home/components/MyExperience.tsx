"use server";

import Spotlight, { SpotlightCard } from "@/components/Spotlight";

export default async function MyExperienceComponent() {
  return (
    <section id="experience-section" className="bg-[--primary-color]">
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-20 lg:px-12 lg:py-20 xl:px-0 xl:pt-28">
        <div className="mb-16">
          <div className="text-center">
            <h2>Mi experiencia</h2>
            <p className="font-semibold text-[--tertiary-color] mt-2">
              { `'La única forma de hacer un gran trabajo es amar lo que haces' -
              Steve Jobs`}
            </p>
          </div>
        </div>
        <div className="my-8">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 group-[.is-active]:bg-[--tertiary-color] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="10"
                >
                  <path
                    fillRule="nonzero"
                    d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                  />
                </svg>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                <Spotlight>
                  <SpotlightCard className="my-experience-primary rounded-lg shadow-lg">
                    <div className="h-full items-center justify-start">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div>
                          <p className="font-bold text-[--tertiary-color]">
                            Bitbox S.L.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-[--tertiary-color]">
                            15/02/2023 - Actualidad
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mb-1">
                        <p className="font-semibold text-[--quinary-color] leading-7">
                          Frontend Developer
                        </p>
                      </div>
                      <div className="flex items-starts justify-start space-x-2 mb-1">
                        <div>
                          <p>{"(Las Palmas de Gran Canaria)"}</p>
                        </div>
                      </div>
                      <div className="flex items-starts justify-start">
                        <ul className="list-disc list-inside marker:text-[--tertiary-color]">
                          <li>
                            Desarrollo y mantenimiento de web con PHP, CSS y
                            JavaScript.
                          </li>
                          <li>
                            Desarrollo y mantenimiento de web con Next.js,
                            Tailwind CSS y Typescript.
                          </li>
                          <li>
                            Gestión de base de datos PostgreSQL, docker y CI/CD.
                          </li>
                          <li>Desarrollo de aplicación móvil con Flutter.</li>
                        </ul>
                      </div>
                    </div>
                  </SpotlightCard>
                </Spotlight>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 group-[.is-active]:bg-[--tertiary-color] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="10"
                >
                  <path
                    fillRule="nonzero"
                    d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                  />
                </svg>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                <Spotlight>
                  <SpotlightCard className="my-experience-primary rounded-lg shadow-lg">
                    <div className="h-full items-center justify-start">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div>
                          <p className="font-bold text-[--tertiary-color]">
                            CanaryBytes.com
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-[--tertiary-color]">
                            01/07/2020 - Actualidad
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mb-1">
                        <p className="font-semibold text-[--quinary-color] leading-7">
                          Co-fundador
                        </p>
                      </div>
                      <div className="flex items-starts justify-start space-x-2 mb-1">
                        <div>
                          <p>{"(Las Palmas de Gran Canaria)"}</p>
                        </div>
                      </div>
                      <div className="flex items-starts justify-start">
                        <ul className="list-disc list-inside marker:text-[--tertiary-color]">
                          <li>
                            Desarrollo y mantenimiento de webs con Wordpress y
                            Prestashop.
                          </li>
                          <li>
                            Desarrollo y mantenimiento de apps con Flutter.
                          </li>
                          <li>Gestión de equipos de trabajo.</li>
                          <li>
                            Servicios de branding y marketing para empresas.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </SpotlightCard>
                </Spotlight>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[--tertiary-color] group-[.is-active]:bg-[--tertiary-color] text-slate-500 group-[.is-active]:text-[--quinary-color] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="10"
                >
                  <path
                    fillRule="nonzero"
                    d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                  />
                </svg>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                <Spotlight>
                  <SpotlightCard className="my-experience-primary rounded-lg shadow-lg">
                    <div className="h-full items-center justify-start">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div>
                          <p className="font-bold text-[--tertiary-color]">
                            The Singular Factory S.L.
                          </p>
                        </div>
                        <div className="items-end justify-end align-right">
                          <p className="font-medium text-[--tertiary-color] text-right">
                            01/03/2020 - 30/06/2020
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mb-1">
                        <p className="font-semibold text-[--quinary-color] leading-7">
                          Unity Developer - Prácticas
                        </p>
                      </div>
                      <div className="flex items-starts justify-start space-x-2 mb-1">
                        <div>
                          <p>{"(Las Palmas de Gran Canaria)"}</p>
                        </div>
                      </div>
                      <div className="flex items-starts justify-start">
                        <ul className="list-disc list-inside marker:text-[--tertiary-color]">
                          <li>
                            Desarrollo de aplicación para gafas de realidad
                            mixta con Unity.
                          </li>
                          <li>
                            Conexión del bridge de Philips Hue con la
                            aplicación.
                          </li>
                          <li>
                            Diseño de la interfaz de usuario de la aplicación.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </SpotlightCard>
                </Spotlight>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 group-[.is-active]:bg-[--tertiary-color] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="10"
                >
                  <path
                    fillRule="nonzero"
                    d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                  />
                </svg>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                <Spotlight>
                  <SpotlightCard className="my-experience-primary rounded-lg shadow-lg">
                    <div className="h-full items-center justify-start">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div>
                          <p className="font-bold text-[--tertiary-color]">
                            Vimesa S.L.
                          </p>
                        </div>
                        <div className="items-end justify-end align-right">
                          <p className="font-medium text-[--tertiary-color] text-right">
                            01/03/2017 - 30/06/2017
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mb-1">
                        <p className="font-semibold text-[--quinary-color] leading-7">
                          Helpdesk - Prácticas
                        </p>
                      </div>
                      <div className="flex items-starts justify-start space-x-2 mb-1">
                        <div>
                          <p>{"(Madrid)"}</p>
                        </div>
                      </div>
                      <div className="flex items-starts justify-start">
                        <ul className="list-disc list-inside marker:text-[--tertiary-color]">
                          <li>Desarrollo y mantenimiento de web con Drupal.</li>
                          <li>
                            Desarrollo y mantenimiento de web con HTML / CSS.
                          </li>
                          <li>Informático de soporte en oficina.</li>
                          <li>Montaje y mantenimiento de equipos.</li>
                        </ul>
                      </div>
                    </div>
                  </SpotlightCard>
                </Spotlight>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 group-[.is-active]:bg-[--tertiary-color] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                >
                  <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
                </svg>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                <Spotlight>
                  <SpotlightCard className="my-experience-primary rounded-lg shadow-lg">
                    <div className="h-full items-center justify-start">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div>
                          <p className="font-bold text-[--tertiary-color]">
                            Faycán Publicidad S.L
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-[--tertiary-color]">
                            01/06/2016 - 30/04/2022
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mb-1">
                        <p className="font-semibold text-[--quinary-color] leading-7">
                          Ayundante de dirección
                        </p>
                      </div>
                      <div className="flex items-starts justify-start space-x-2 mb-1">
                        <div>
                          <p>{"(Las Palmas de Gran Canaria)"}</p>
                        </div>
                      </div>
                      <div className="flex items-starts justify-start">
                        <ul className="list-disc list-inside marker:text-[--tertiary-color]">
                          <li>
                            Desarrollo y mantenimiento de web con Wordpress.
                          </li>
                          <li>
                            Gestión de equipos de trabajo y ayudante de
                            dirección.
                          </li>
                          <li>Técnico de sonido y grabación.</li>
                          <li>
                            Configuración de redes locales con windows server.
                          </li>
                          <li>Montaje y mantenimiento de equipos.</li>
                        </ul>
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
