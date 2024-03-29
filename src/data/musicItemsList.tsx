"use client";
import { CustomListProps } from "@/components/CustomList";
import IconPlay from "@assets/icons/IconPlay";
import Image from "next/image";

export const musicItemsList: CustomListProps[] = [
  {
    title: "Jamming",
    subtitle: "Bob Marley & The Wailers",
    url: "https://www.youtube.com/embed/oqVy6eRXc7Q?si=u1p3O140to_fzbQi",
    startElement: (
      <Image
        className="w-8 h-8 rounded-full"
        width={64}
        height={64}
        src={"https://i.scdn.co/image/ab67616d00004851811bfdc4f55b3a7484524aaf"}
        alt={`imagen de la canción Jamming`}
      />
    ),
    endElement: IconPlay(25),
  },
  {
    title: "Big Poppa",
    subtitle: "The Notorious B.I.G.",
    url: "https://www.youtube.com/embed/phaJXp_zMYM?si=x5suAcvOqSn0kaJS",
    startElement: (
      <Image
        className="w-8 h-8 rounded-full"
        width={64}
        height={64}
        src={"https://i.scdn.co/image/ab67616d00004851db09958534ac66f9a90d3cf7"}
        alt={`imagen de la canción Big Poppa`}
      />
    ),
    endElement: IconPlay(25),
  },
  {
    title: "La Flaca",
    subtitle: "Jarabe de Palo",
    url: "https://www.youtube.com/embed/r2g0pM3PMNQ?si=_kNKICrjU3zJM6xF",
    startElement: (
      <Image
        className="w-8 h-8 rounded-full"
        width={64}
        height={64}
        src={"https://i.scdn.co/image/ab67616d0000485147a83522c634e84f937a897e"}
        alt={`imagen de la canción La Flaca`}
      />
    ),
    endElement: IconPlay(25),
  },
  {
    title: "Desahogo",
    subtitle: "Vico C",
    url: "https://www.youtube.com/embed/It6BDtMFg0Y",
    startElement: (
      <Image
        className="w-8 h-8 rounded-full"
        width={64}
        height={64}
        src={"https://i.scdn.co/image/ab67616d000048517afaba942f432073652fe642"}
        alt={`imagen de la canción Desahogo`}
      />
    ),
    endElement: IconPlay(25),
  },
];
