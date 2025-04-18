"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

import { loadMemes, saveMemes } from "@/utils/storage";
import { memesInit } from "@/data/memes";
import { IMeme } from "@/interfaces/IMeme";

interface MemesContextType {
  memes: IMeme[];
  setMemes: (memes: IMeme[]) => void;
}

const MemesContext = createContext<MemesContextType | undefined>(undefined);

export const MemesProvider = ({ children }: { children: React.ReactNode }) => {
  const [memes, setMemes] = useState<IMeme[]>(memesInit);

  useEffect(() => {
    const loaded = loadMemes();

    if (loaded.length > 0) {
      setMemes(loaded);
    } else {
      saveMemes(memesInit);
    }
  }, []);

  return (
    <MemesContext.Provider value={{ memes, setMemes }}>
      {children}
    </MemesContext.Provider>
  );
};

export const useMemes = () => {
  const context = useContext(MemesContext);

  if (!context) {
    throw new Error("useMemes must be used within a MemesProvider");
  }

  return context;
};
