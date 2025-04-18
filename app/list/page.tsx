"use client";

import { Card, Image, CardBody, CardHeader } from "@heroui/react";

import { useMemes } from "@/contexts/MemeContext";

export default function ListPage() {
  const { memes } = useMemes();

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white text-center">
        Meme List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {memes.map((meme) => (
          <Card
            key={meme.id}
            className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="font-semibold text-lg text-gray-900 dark:text-gray-100">
              {meme.title}
            </CardHeader>
            <CardBody>
              <Image
                alt={meme.title}
                className="w-full h-48 object-cover rounded-md mb-4"
                src={meme.image}
              />
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Likes: {meme.likes}
              </p>
              <a
                className="text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 underline"
                href={meme.image}
                rel="noopener noreferrer"
                target="_blank"
              >
                View Image
              </a>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
