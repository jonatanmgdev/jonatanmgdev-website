"use server";

import Spotlight, { SpotlightCard } from "@/components/Spotlight";

export default async function ExperienceComponent() {
  return (
    <section className="bg-[--primary-color]">
      <div className="relative mx-auto px-6 py-14 md:py-20 lg:px-12 lg:py-20 xl:px-16 xl:pt-28">
        <div>
          <div className="text-center">
            <h2>Mi experiencia</h2>
            <p>
              Esta es mi andadura, siempre buscando proyectos con los que
              aprender y seguir disfrutando de mi trabajo.
            </p>
            <p className="text-center italic text-[--tertiary-color]">
              'La única forma de hacer un gran trabajo es amar lo que haces',
              Steve Jobs.
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
                    fill-rule="nonzero"
                    d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                  />
                </svg>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] testimonial-primary rounded-lg shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div>
                    <p className="font-bold text-[--tertiary-color]">
                      Bitbox S.L.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-[--quinary-color]">
                      Actualidad
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
                <div>
                  <ul className="list-disc list-inside marker:text-[--tertiary-color]">
                    <li>
                      Desarrollo y mantenimiento de web con PHP, CSS y
                      JavaScript.
                    </li>
                    <li>
                      Desarrollo y mantenimiento de web con Next.js, Tailwind
                      CSS y Typescript.
                    </li>
                  </ul>
                </div>
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
                    fill-rule="nonzero"
                    d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                  />
                </svg>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] card-primary rounded-lg shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-[--quinary-color] ">
                    <p>
                      Frontend Developer{" "}
                      <span className="text-[--tertiary-color]">
                        Domingo Santana SL
                      </span>
                    </p>
                  </div>
                  <p className="font-semibold text-[--tertiary-color]">
                    15/02/2023
                  </p>
                </div>
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div>
                    <p>{"(Las Palmas de Gran Canaria)"}</p>
                  </div>
                </div>
                <div>
                  <ul className="list-disc list-inside">
                    <li>
                      Desarrollo y mantenimiento de web con PHP, CSS y
                      JavaScript.
                    </li>
                    <li>
                      Desarrollo y mantenimiento de web con Next.js, Tailwind
                      CSS y Typescript.
                    </li>
                  </ul>
                </div>
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
                    fill-rule="nonzero"
                    d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                  />
                </svg>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">In Transit</div>
                  <time className="font-caveat font-medium text-indigo-500">
                    10/06/2023
                  </time>
                </div>
                <div className="text-slate-500">
                  Pretium lectus quam id leo. Urna et pharetra aliquam
                  vestibulum morbi blandit cursus risus.
                </div>
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
                    fill-rule="nonzero"
                    d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                  />
                </svg>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">
                    Out of Delivery
                  </div>
                  <time className="font-caveat font-medium text-indigo-500">
                    12/06/2023
                  </time>
                </div>
                <div className="text-slate-500">
                  Pretium lectus quam id leo. Urna et pharetra aliquam
                  vestibulum morbi blandit cursus risus.
                </div>
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

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">Delivered</div>
                  <time className="font-caveat font-medium text-amber-500">
                    Exp. 12/08/2023
                  </time>
                </div>
                <div className="text-slate-500">
                  Pretium lectus quam id leo. Urna et pharetra aliquam
                  vestibulum morbi blandit cursus risus.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
