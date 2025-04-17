import "../styles/globals.css";
import React from "react";

import NavbarLayout from "@/components/NavbarLayout";

export const metadata = {
  title: "Meme Directory",
  description: "A directory of popular memes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="font-light dark" lang="en">
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <NavbarLayout />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
