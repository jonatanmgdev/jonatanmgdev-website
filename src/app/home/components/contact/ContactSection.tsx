"use server";
import ContactUsForm from "@/components/forms/ContactForm";
import { SectionHeader } from "@/components/layout/sectionHeader";
import ContactCard from "./ContactCard";

async function ContactSectionComponent() {
  return (
    <section>
      <div className="flex">
        <div className="flex-1">
          <SectionHeader
            className="m-2"
            subtitle={"¿Dudas o consultas?"}
            title={"¡Contáctame!"}
            description="Puedes contactarme a través del siguiente formulario o por correo electrónico en caso de dudas o consultas. También tienes disponibles mis redes sociales donde descubrir mis publicaciones o contactar de forma más directa."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
            <ContactCard
              methodName="Email"
              methodValue="jonatanmg94@gmail.com"
              url="mailto:jonatanmg94@gmail.com"
            />
            <ContactCard
              methodName="Github"
              methodValue="jonatanmg94"
              url="https://github.com/jonatanmg94"
            />
            <ContactCard
              methodName="Linkedin"
              methodValue="jonatanmg94"
              url="https://www.linkedin.com/in/jonatanmg94"
            />
            <ContactCard
              methodName="Twitter"
              methodValue="jonatanmg94"
              url="https://twitter.com/jonatanmg94"
            />
          </div>
        </div>
        <div className="flex-1">
          <span className="text-lg py-2">Rellena el siguiente formulario:</span>
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSectionComponent;
