import { useState, useEffect } from "react";
import { getGiftsFromGiphy } from "../helpers/getGifts";

export const useFetchGifts = (categorie) => {
  const [gift, setGift] = useState({
    data: [],
    isLoading: true,
  });

  useEffect(() => {
    getGiftsFromGiphy(categorie).then((imgs) =>
      setGift({
        data: imgs,
        isLoading: false,
      })
    );
  }, [categorie]);

  return gift;
};
