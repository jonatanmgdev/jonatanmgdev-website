import { CustomListProps } from "@/components/CustomList";
import { IconCode, IconPhishing, IconSoccer, IconWave } from "@assets/icons";


export const hobbiesItemsList: CustomListProps[] = [
  {
    title: "Fútbol",
    subtitle: "FC Barcelona",
    startElement: (<span className="text-[--quinary-color] hover:text-[--tertiary-color]">{IconSoccer(35)}</span>),
  },
  {
    title: "Pescar",
    subtitle: "Playas de Canarias",
    startElement: (<span className="text-[--quinary-color] hover:text-[--tertiary-color]">{IconPhishing(35)}</span>),
  },
  {
    title: "Surfear",
    subtitle: "Bodyboard",
    startElement: (<span className="text-[--quinary-color] hover:text-[--tertiary-color]">{IconWave(35)}</span>),
  },
  {
    title: "Programar",
    subtitle: "Nuevas tecnologías",
    startElement: (<span className="text-[--quinary-color] hover:text-[--tertiary-color]">{IconCode(35)}</span>),
  },
];