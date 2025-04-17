export const loadMemes = () => {
  try {
    return JSON.parse(localStorage.getItem("memes") || "[]");
  } catch {
    return null;
  }
};

export const saveMemes = (memes: any[]) => {
  localStorage.setItem("memes", JSON.stringify(memes));
};
