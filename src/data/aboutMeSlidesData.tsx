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
  <CustomList listOfElements={musicItemsList} key="musicItemsList" />,
  <CustomList listOfElements={hobbiesItemsList} key="hobbiesItemsList" />,
  <CustomList listOfElements={moviesItemsList} key="moviesItemsList" />,
];
