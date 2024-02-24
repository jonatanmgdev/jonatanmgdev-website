"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative shadow-lg px-3 py-2">
      <nav className="flex max-w-screen-2xl mx-auto justify-between">
        <div className="w-[130px] md:w-[200px] flex items-center">
            <p className="animate-slideinLeft font-semibold text-2xl text-[--quinary-color]">Jonatanmg</p><p className="animate-slideinDown font-bold text-2xl text-[--tertiary-color]">.</p><p className="animate-slideinRight font-light text-2xl text-[--tertiary-color]">dev</p>
        </div>
        <div className="flex items-center gap-3">
        <div className={`navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] flex md:items-center gap-[1.5vw] top-[100%] ${isMenuOpen ? 'left-[0%]' : 'left-[-100%]'} px-5 md:py-0 py-5 `}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 text-[--quinary-color] hover:text-[--tertiary-color] after:bg-gradient-to-r from-[--tertiary-color] to-[--quaternary-color]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <a href="#">Inicio</a>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 text-[--quinary-color] hover:text-[--tertiary-color] after:bg-gradient-to-r from-[--tertiary-color] to-[--quaternary-color] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <a href="#">Sobre mi</a>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 text-[--quinary-color] hover:text-[--tertiary-color] after:bg-gradient-to-r from-[--tertiary-color] to-[--quaternary-color]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <a href="#">Experiencia</a>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 text-[--quinary-color] hover:text-[--tertiary-color] after:bg-gradient-to-r from-[--tertiary-color] to-[--quaternary-color]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <a href="#">Portfolio</a>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 text-[--quinary-color] hover:text-[--tertiary-color] after:bg-gradient-to-r from-[--tertiary-color] to-[--quaternary-color]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <a href="#">Skills</a>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 text-[--quinary-color] hover:text-[--tertiary-color] after:bg-gradient-to-r from-[--tertiary-color] to-[--quaternary-color]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <a href="#">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="btn-primary"
            >
              CV
            </button>
            <button className="btn-secondary md:hidden flex justify-center items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
