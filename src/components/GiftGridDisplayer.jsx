import React from "react";

import { useFetchGifts } from "../hooks/useFetchGifts";
import { GiftGridItem } from "./GiftGridItem";

export const GiftGridDisplayer = ({ categorie }) => {
  const { data: images, isLoading } = useFetchGifts(categorie);

  const generateGridItem = images.map((img) => (
    <GiftGridItem key={img.id} {...img} />
  ));

  return (
    <>
      <h3 className="categorie-title">{categorie}</h3>

      {isLoading && <p> Cargando...</p>}

      <div className="grid-imgs-container">{generateGridItem}</div>
    </>
  );
};
