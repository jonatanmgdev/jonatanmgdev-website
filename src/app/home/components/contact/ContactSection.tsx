"use server";
import ContactUsForm from "@/components/forms/ContactForm";
import { SectionHeader } from "@/components/layout/sectionHeader";
import ContactCard from "./ContactCard";
import { IconGithub, IconLinkedin, IconTwitter } from "@/assets/icons";

async function ContactSectionComponent() {
  return (
    <section>
      <SectionHeader
        subtitle={"¿Dudas o consultas?"}
        title={"¡Contáctame!"}
        description="Puedes contactarme a través del siguiente formulario o por correo electrónico en caso de dudas o consultas. También tienes disponibles mis redes sociales donde descubrir mis publicaciones o contactar de forma más directa."
      />
      <ContactUsForm />
      <div className="w-full grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-4 mt-8">
        <ContactCard
          methodName="Email"
          methodIcon={IconGithub(20)}
          methodValue="jonatanmg94@gmail.com"
          url="mailto:jonatanmg94@gmail.com"
        />
        <ContactCard
          methodName="Github"
          methodIcon={IconGithub(20)}
          methodValue="jonatanmg94"
          url="https://github.com/jonatanmg94"
        />
        <ContactCard
          methodName="Linkedin"
          methodIcon={IconLinkedin(20)}
          methodValue="jonatanmg94"
          url="https://www.linkedin.com/in/jonatanmg94"
        />
        <ContactCard
          methodName="Twitter"
          methodIcon={IconTwitter(20)}
          methodValue="jonatanmg94"
          url="https://twitter.com/jonatanmg94"
        />
      </div>
    </section>
  );
}

export default ContactSectionComponent;
