"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

import { IMeme } from "@/interfaces/IMeme";
import { memesInit } from "@/data/memes";

interface MemeContextProps {
  memes: IMeme[];
  setMemes: (memes: IMeme[]) => void;
}

const MemeContext = createContext<MemeContextProps | undefined>(undefined);

export function MemesProvider({ children }: { children: React.ReactNode }) {
  const [memes, setMemes] = useState<IMeme[]>(memesInit);

  useEffect(() => {
    try {
      const savedMemes = Cookies.get("memes");

      if (savedMemes) {
        const parsedMemes = JSON.parse(savedMemes);

        if (Array.isArray(parsedMemes) && parsedMemes.length > 0) {
          setMemes(parsedMemes);
        }
      } else {
        Cookies.set("memes", JSON.stringify(memesInit), { expires: 7 });
      }
    } catch (error) {
      console.error("Failed to load memes from cookies:", error);
    }
  }, []);

  useEffect(() => {
    try {
      Cookies.set("memes", JSON.stringify(memes), { expires: 7 });
    } catch (error) {
      console.error("Failed to save memes to cookies:", error);
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
