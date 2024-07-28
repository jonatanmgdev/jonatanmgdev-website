import { IconGithub, IconLinkedin, IconYoutube } from "@/components/svgIcons";
import { RoutePaths } from "@/core/config/router/routes";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex bg-neutral-deep border-t border-primary-dark ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex">
            <p className="font-semibold text-2xl text-white">Jonatanmg</p>
            <p className="font-bold text-2xl text-primary-dark">.</p>
            <p className="font-normal text-2xl text-primary-dark">dev</p>
          </div>
          <ul className="list-none flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 mt-3 sm:mt-0">
            <li>
              <Link href={RoutePaths.PrivacyPolicy} className="hover:underline mr-2">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link href={RoutePaths.LegalAdvice} className="hover:underline">
                Aviso legal
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-neutral-medium sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm sm:text-center">
            2024 - Made with ♥ love in Canary Islands, Spain.
          </p>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-4">
            <a
              className="text-neutral-light hover:text-primary-dark"
              href="https://www.youtube.com/@jonatanmgdev"
            >
              {IconYoutube(20)}
              <span className="sr-only">Mi cuenta en Youtube</span>
            </a>
            <a
              className="text-neutral-light hover:text-primary-dark"
              href="https://github.com/jonatanmgdev"
            >
              {IconGithub(20)}
              <span className="sr-only">Mi cuenta en GitHub</span>
            </a>
            <a
              className="text-neutral-light hover:text-primary-dark"
              href="https://www.linkedin.com/in/jonatanmgdev/"
            >
              {IconLinkedin(20)}
              <span className="sr-only">Mi cuenta en Linkedin</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
