"use server";
import ContactUsForm from "@/components/forms/ContactForm";
import SectionHeader from "@/components/SectionHeader";

function ContactSection() {
  return (
    <section>
      <div className="flex w-full justify-center">
        <SectionHeader
          className="mb-8 justify-center text-center"
          subtitle={"¿Dudas o consultas?"}
          title={"¡Contáctame!"}
          description="Puedes contactarme rellenado este formulario y resolveré tus dudas o consultas."
        />
      </div>
      <div className="flex w-full">
        <ContactUsForm />
      </div>
    </section>
  );
}

export default ContactSection;
