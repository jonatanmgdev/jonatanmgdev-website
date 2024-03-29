import React from 'react';
import { CustomListProps } from "@/components/CustomList";
import IconFilm from '@assets/icons/IconFilm';

export const moviesItemsList: CustomListProps[] = [
  {
    title: "La vida es Bella",
    subtitle: "Género: Cine clásico",
    startElement: <span className=' text-[--quinary-color] hover:text-[--tertiary-color]'>{IconFilm(35)}</span>
  },
  {
    title: "El Amanecer de los Muertos",
    subtitle: "Género: Zombies",
    startElement: <span className=' text-[--quinary-color] hover:text-[--tertiary-color]'>{IconFilm(35)}</span>
  },
  {
    title: "Im Sam",
    subtitle: "Género: Melodrama",
    startElement: <span className=' text-[--quinary-color] hover:text-[--tertiary-color]'>{IconFilm(35)}</span>
  },
  {
    title: "El Rey León",
    subtitle: "Género: Animación",
    startElement: <span className=' text-[--quinary-color] hover:text-[--tertiary-color]'>{IconFilm(35)}</span>
  },
];