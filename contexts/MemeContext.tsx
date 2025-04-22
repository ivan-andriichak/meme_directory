"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

import { IMeme } from "@/interfaces/IMeme";
import { memesInit } from "@/data/memes";
import { loadMemes, saveMemes } from "@/utils/storage";

interface MemeContextProps {
  memes: IMeme[];
  setMemes: (memes: IMeme[]) => void;
}

const MemeContext = createContext<MemeContextProps | undefined>(undefined);

export function MemesProvider({ children }: { children: React.ReactNode }) {
  const [memes, setMemes] = useState<IMeme[]>(memesInit);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const loadedMemes = loadMemes();

        if (loadedMemes.length > 0) {
          setMemes(loadedMemes);
        } else {
          saveMemes(memesInit);
        }
      } catch (error) {
        console.error("Error loading memes:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        saveMemes(memes);
      } catch (error) {
        console.error("Failed to save memes:", error);
      }
    }
  }, [memes]);

  return (
    <MemeContext.Provider value={{ memes, setMemes }}>
      {children}
    </MemeContext.Provider>
  );
}

export function useMemes() {
  const context = useContext(MemeContext);

  if (!context) {
    throw new Error("useMemes must be used within a MemesProvider");
  }

  return context;
}
