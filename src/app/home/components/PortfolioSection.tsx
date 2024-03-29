"use client";

export default function PortfolioSectionComponent() {
  return (
    <section id="portfolio-section">  
        <div>
          <div className="flex">
            <div className="flex w-full justify-center items-center ">
              <p className="overflow-hidden whitespace-nowrap text-xl font-semibold leading-7 text-[--tertiary-color]">
                Descubre mis trabajos
              </p>
            </div>
          </div>
          <div className="flex w-full justify-center items-center">
            <h2 className="animate-slideinLeft justify-center mt-2">
              Últimos proyectos
            </h2>
          </div>
        </div>
        <div className="my-8">
          <div className="grid my-auto"></div>
        </div>
    </section>
  );
}
