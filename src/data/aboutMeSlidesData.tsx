"use client";
import { CustomList } from "@/components";
import { hobbiesItemsList } from "./hobbiesItemsList";
import { moviesItemsList } from "./moviesItemsList";
import { musicItemsList } from "./musicItemsList";

export const slidesTitles = [
  "Mis mejores clásicos",
  "¡Me divierte! ;)",
  "Con palomitas o nachos...",
];

export const slidesContents = [
  <CustomList listOfElements={musicItemsList} />,
  <CustomList listOfElements={hobbiesItemsList} />,
  <CustomList listOfElements={moviesItemsList} />,
];
