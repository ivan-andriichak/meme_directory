import { IMeme } from "@/interfaces/IMeme";

// saveMemes
export const saveMemes = (memes: IMeme[]) => {
  localStorage.setItem("memes", JSON.stringify(memes));
};

// loadMemes
export const loadMemes = (): IMeme[] => {
  const storedMemes = localStorage.getItem("memes");

  return storedMemes ? JSON.parse(storedMemes) : [];
};

export const generateMemesFile = (memes: IMeme[]): string => {
  const jsonString = JSON.stringify(memes, null, 2);

  return `data:text/json;charset=utf-8,${encodeURIComponent(jsonString)}`;
};
