"use server";

import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import CustomTextarea from "@/components/CustomTextarea";
import JsonCodeSimulator from "./JsonCodeSimulator";

export default async function ContactComponent() {
  return (
    <section id="contact-section" className="bg-[--secondary-color]">
      <div className="relative isolate overflow-hidden px-6 py-24 sm:py-36 lg:overflow-visible lg:px-0">
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center mb-6">
              <p className=" flex text-xl font-semibold leading-7 text-[--tertiary-color]">
                ¡Hey! ¿Hablamos?
              </p>
              <h2 className="flex animate-slideinLeft">Envíame un mensaje</h2>
            </div>
            <div className="flex w-full">
              <div className="w-full md:w-4/6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full md:justify-between gap-4">
                  <CustomInput
                    id="name"
                    backgroundColor="--primary-color"
                    placeholder="Nombre"
                    type="text"
                  />
                  <CustomInput
                    id="surnames"
                    backgroundColor="--primary-color"
                    placeholder="Apellidos"
                    type="text"
                  />
                  <CustomInput
                    id="email"
                    backgroundColor="--primary-color"
                    placeholder="E-mail"
                    type="email"
                  />
                  <CustomInput
                    id="phone"
                    backgroundColor="--primary-color"
                    placeholder="Teléfono"
                    type="text"
                  />
                </div>
                <div className="grid my-5">
                  <CustomTextarea
                    backgroundColor={"--primary-color"}
                    placeholder={"Su mensaje..."}
                  />
                  <CustomButton
                    href="#contact-section"
                    text={"Enviar mensaje"}
                    className="mt-5 btn-primary"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/6">
                <div className="card-secondary p-4 rounded-lg mx-2">
                  <JsonCodeSimulator />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
