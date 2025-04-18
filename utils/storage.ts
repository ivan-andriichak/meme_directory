import Cookies from "js-cookie";

import { IMeme } from "@/interfaces/IMeme";

export const loadMemes = (): IMeme[] => {
  const memes = Cookies.get("memes");

  return memes ? JSON.parse(memes) : [];
};

export const saveMemes = (memes: IMeme[]) => {
  Cookies.set("memes", JSON.stringify(memes), { expires: 7 });
};
