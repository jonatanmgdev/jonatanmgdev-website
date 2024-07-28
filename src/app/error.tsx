"use client";
import { RoutePaths } from '../core/config/router/routes';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="bg-neutral-deep min-h-screen pt-52">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white">
            ERROR
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-white md:text-4xl">
            Ha ocurrido un algo inesperado.
          </p>
          <p className="mb-4 text-lg font-light text-white md:text-4xl">
            Si el error persiste, puedes contactarnos a través de nuestro formulario de contacto. Puedes encontrar todo lo que necesitas en la página de inicio.
          </p>
          <a
            href={RoutePaths.Home}
            className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </section>
  );
}
