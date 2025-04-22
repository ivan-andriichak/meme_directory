import "../styles/globals.css";
import React from "react";

import NavbarLayout from "@/components/NavbarLayout";
import { MemesProvider } from "@/contexts/MemeContext";
import { Providers } from "@/app/providers";

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
    <html suppressHydrationWarning lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          content="A catalog of popular memes with the ability to edit in table and card views"
          name="description"
        />
        <meta content="#111827" name="theme-color" />
        <meta content="index, follow" name="robots" />
        <title>Meme Directory</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const prefersDark = !theme && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || prefersDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Providers>
          <MemesProvider>
            <NavbarLayout />
            <main className="container mx-auto px-4 py-8">{children}</main>
          </MemesProvider>
        </Providers>
      </body>
    </html>
  );
}
