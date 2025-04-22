"use client";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useState } from "react";

import { useMemes } from "@/contexts/MemeContext";
import { IMeme } from "@/interfaces/IMeme";
import { validateMeme } from "@/utils/validation";
import { EditMemeModal } from "@/components/EditMemeModal";
import { generateMemesFile } from "@/utils/storage";

export const MemeTable = () => {
  const { memes, setMemes } = useMemes();
  const [selectedMeme, setSelectedMeme] = useState<IMeme | null>(null);
  const [newMeme, setNewMeme] = useState<IMeme>({
    id: 0,
    title: "",
    image: "",
    likes: 0,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);

  const handleEdit = (meme: IMeme) => {
    setSelectedMeme(meme);
    setIsAddMode(false);
    setIsOpen(true);
  };

  const handleAdd = () => {
    setNewMeme({ id: memes.length + 1, title: "", image: "", likes: 0 });
    setIsAddMode(true);
    setIsOpen(true);
  };

  const handleChange = (updated: IMeme) => {
    if (isAddMode) {
      setNewMeme(updated);
    } else {
      setSelectedMeme(updated);
    }
  };

  const handleSave = () => {
    const memeToSave = isAddMode ? newMeme : selectedMeme;

    if (!memeToSave) return;

    const validationError = validateMeme(memeToSave);

    if (validationError) {
      alert(validationError);

      return;
    }

    if (isAddMode) {
      const updated = [...memes, { ...newMeme, id: memes.length + 1 }];

      setMemes(updated);
    } else if (selectedMeme) {
      const updated = memes.map((m) =>
        m.id === selectedMeme.id ? { ...m, ...selectedMeme } : m,
      );

      setMemes(updated);
    }
    setIsOpen(false);
  };

  const handleDownload = () => {
    const dataUrl = generateMemesFile(memes);
    const link = document.createElement("a");

    link.href = dataUrl;
    link.download = "memes.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="flex space-x-4 mb-4">
        <Button
          data-hero-ui
          color="primary"
          variant="shadow"
          onPress={handleAdd}
        >
          Add Meme
        </Button>
        <Button
          data-hero-ui
          color="secondary"
          variant="shadow"
          onPress={handleDownload}
        >
          Download Memes
        </Button>
      </div>
      <Table
        data-hero-ui
        fullWidth
        removeWrapper
        aria-label="Memes table"
        className="overflow-x-auto"
      >
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Title</TableColumn>
          <TableColumn>Likes</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {memes.map((item) => (
            <TableRow
              key={item.id}
              className="text-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.likes}</TableCell>
              <TableCell>
                <Button
                  data-hero-ui
                  className="my-2"
                  color="primary"
                  variant="shadow"
                  onPress={() => handleEdit(item)}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <EditMemeModal
        isOpen={isOpen}
        meme={isAddMode ? newMeme : selectedMeme}
        onChangeAction={handleChange}
        onCloseAction={() => setIsOpen(false)}
        onSaveAction={handleSave}
      />
    </>
  );
};
