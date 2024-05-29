"use server";
import ContactUsForm from "@/components/forms/ContactForm";
import ContactSocialCard from "./ContactSocialCard";
import { IconGithub, IconLinkedin, IconTwitter, IconEmail } from "@/assets/icons";
import SectionHeader from "@/components/SectionHeader";



async function ContactSection() {
  return (
    <section>
      <SectionHeader
        className="mb-8"
        subtitle={"¿Dudas o consultas?"}
        title={"¡Contáctame!"}
        description="Puedes contactarme rellenado este formulario y resolveré tus dudas o consultas."
      />
      <ContactUsForm />
      <div className="w-full grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-4 mt-8">
        <ContactSocialCard
          methodName="Email"
          methodIcon={IconEmail(20)}
          methodValue="jonatanmg94@gmail.com"
          url="mailto:jonatanmg94@gmail.com"
        />
        <ContactSocialCard
          methodName="Github"
          methodIcon={IconGithub(20)}
          methodValue="@jonatanmg94"
          url="https://github.com/jonatanmg94"
        />
        <ContactSocialCard
          methodName="Linkedin"
          methodIcon={IconLinkedin(20)}
          methodValue="@jonatanmg94"
          url="https://www.linkedin.com/in/jonatanmg94"
        />
        <ContactSocialCard
          methodName="Twitter"
          methodIcon={IconTwitter(20)}
          methodValue="@jonatanmg94"
          url="https://twitter.com/jonatanmg94"
        />
      </div>
    </section>
  );
}

export default ContactSection;
