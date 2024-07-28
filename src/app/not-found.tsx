"use client";
import { RoutePaths } from '../core/config/router/routes';

export default function NotFound({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="container min-h-screen bg-neutral-deep pt-52">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-textcolor-accent md:text-4xl">
            Algo ha salido mal.
          </p>
          <p className="mb-4 text-md font-light text-white md:text-lg">
            Lo sentimos, no hemos podido encontrar el recurso que estás buscando.</p>
          <a
            href={RoutePaths.Home}
            className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-dark font-medium rounded-lg px-5 py-2.5 text-center my-4"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </section>
  );
}