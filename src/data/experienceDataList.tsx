import { ExperienceData } from "@/app/home/components/experience/ExperienceCard";

export const experienceDataList: ExperienceData[] = [
  {
    companyName: "Bitbox S.L.",
    dates: "Feb. 2023 - Actual",
    position: "Desarrollador Frontend",
    ubication: "Las Palmas de G.C.",
    description: (
      <ul>
        <li>Desarrollo web con PHP, CSS y JavaScript.</li>
        <li>Desarrollo web con Next.js 14, Tailwind CSS y Typescript.</li>
        <li>Gestión de bases de datos PostgreSQL.</li>
        <li>Uso de Gitlab, Figma y Postman Api.</li>
        <li>Desarrollo móvil con Flutter.</li>
      </ul>
    ),
    isActive: true,
  },
  {
    companyName: "Domingo Santana S.L.",
    dates: "Oct. 2022 - Ene. 2023",
    position: "Técnico informático",
    ubication: "Las Palmas de G.C.",
    description: (
      <ul>
        <li>
          Instalación de tpvs, impresoras de tickets y cajones de monedas.
        </li>
        <li>Mantenimiento y reparación de equipos informáticos.</li>
        <li>Diseño de web con Wordpress.</li>
        <li>Configuración de softwares de venta como Geslan y Firesoft.</li>
        <li>Soporte help desk para los clientes de la empresa.</li>
      </ul>
    ),
    isActive: false,
  },
  {
    companyName: "Serviclients Informatica S.L.",
    dates: "Jun. 2022 - Oct. 2022",
    position: "Técnico informático",
    ubication: "Las Palmas de G.C.",
    description: (
      <ul>
        <li>Revisión de instalaciones de redes informáticas.</li>
        <li>
          Elaboración de informes sobre las instalaciones de red supervisadas.
        </li>
        <li>Configuración de redes inalámbricas.</li>
        <li>Configuración de equipos de red.</li>
      </ul>
    ),
    isActive: false,
  },
  {
    companyName: "The Singular Factory S.L.",
    dates: "Mar. 2020 - Jun. 2020",
    position: "Programador Unity 3D - Prácticas FP",
    ubication: "Las Palmas de G.C.",
    description: (
      <ul>
        <li>
          Desarrollo de aplicación para gafas de realidad mixta con Unity.
        </li>
        <li>Programación de la aplicación en C#</li>
        <li>Diseño de la interfaz de usuario.</li>
        <li>Uso de Postman Api.</li>
      </ul>
    ),
    isActive: false,
  },
  {
    companyName: "Vimesa S.L.",
    dates: "Mar. 2017 - Jun. 2017",
    position: "Técnico informático - Prácticas FP",
    ubication: "Fuenlabrada, Madrid",
    description: (
      <ul>
        <li>Desarrollo y mantenimiento de web con Drupal.</li>
        <li>Desarrollo y mantenimiento de web con HTML / CSS.</li>
        <li>Informático de soporte en oficina.</li>
        <li>Mantenimiento y reparación de equipos informáticos.</li>
      </ul>
    ),
    isActive: false,
  },
  {
    companyName: "Faycán Publicidad S.L",
    dates: "Jun. 2016 - Abr. 2022",
    position: "Técnico informático y de sonido",
    ubication: "Las Palmas de G.C.",
    description: (
        <ul>
          <li>Desarrollo y mantenimiento de web con Wordpress.</li>
          <li>Desarrollo móvil con Flutter.</li>
          <li>Gestión de equipos de trabajo y ayudante de dirección.</li>
          <li>Técnico de sonido y grabación.</li>
          <li>Configuración de redes locales con windows server.</li>
          <li>Mantenimiento y reparación de equipos informáticos.</li>
        </ul>
    ),
    isActive: false,
  },
];
