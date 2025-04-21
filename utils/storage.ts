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
