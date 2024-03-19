"use server";

export default async function MyPortfolioComponent() {
  return (
    <section id="portfolio-section" className="bg-[--primary-color]">
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-20 lg:px-12 lg:py-20 xl:px-0 xl:pt-28">
        <div>
          <div className="flex">
            <div className="flex w-full justify-center items-center ">
              <p className="overflow-hidden whitespace-nowrap text-xl font-semibold leading-7 text-[--tertiary-color]">
                Portfolio
              </p>
            </div>
          </div>
          <div className="flex w-full justify-center items-center">
            <h2 className="animate-slideinLeft justify-center mt-2">
              Mis últimos proyectos
            </h2>
          </div>
        </div>
        <div className="my-8">
          <div className="grid my-auto"></div>
        </div>
      </div>
    </section>
  );
}
