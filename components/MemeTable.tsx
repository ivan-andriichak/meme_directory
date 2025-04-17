"use client";

// import "@heroui/react/styles.css";
import {
  Button,
  Input,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { Key, useEffect, useState } from "react";
import { ModalBody, ModalFooter, ModalHeader } from "@heroui/modal";

import { loadMemes, saveMemes } from "@/utils/storage";
import { memesInit } from "@/data/memes";

export const MemeTable = () => {
  const [memes, setMemes] = useState<any[]>(memesInit);
  const [selectedMeme, setSelectedMeme] = useState<{
    id: Key;
    title: string;
    likes: number;
    image?: string;
  } | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loadedMemes = loadMemes();

    if (loadedMemes && loadedMemes.length > 0) {
      setMemes(loadedMemes);
    }
  }, []);

  const handleEdit = (meme: {
    id: Key;
    title: string;
    likes: number;
    image?: string;
  }) => {
    setSelectedMeme(meme);
    setIsOpen(true);
  };

  const handleSave = () => {
    const updated = memes.map(
      (m: { id: Key; title: string; likes: number; image?: string }) =>
        m.id === selectedMeme?.id ? { ...m, ...selectedMeme } : m,
    );

    setMemes(updated);
    saveMemes(updated);
    setIsOpen(false);
  };

  return (
    <>
      <Button color="primary" variant="solid">
        Solid
      </Button>
      <Table aria-label="Memes table">
        <TableHeader>
          <TableColumn key="id">ID</TableColumn>
          <TableColumn key="title">Назва</TableColumn>
          <TableColumn key="likes">Лайки</TableColumn>
          <TableColumn key="actions">Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {memes.map(
            (item: {
              id: Key;
              title: string;
              likes: number;
              image?: string;
            }) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.likes}</TableCell>
                <TableCell>
                  <Button onPress={() => handleEdit(item)}>Edit</Button>
                </TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <ModalHeader>Редагування мема</ModalHeader>
        <ModalBody>
          <Input
            label="Назва"
            value={selectedMeme?.title || ""}
            onChange={(e) =>
              setSelectedMeme((prev) =>
                prev ? { ...prev, title: e.target.value } : null,
              )
            }
          />
          <Input
            label="URL картинки"
            value={selectedMeme?.image || ""}
            onChange={(e) =>
              setSelectedMeme((prev) =>
                prev ? { ...prev, image: e.target.value } : null,
              )
            }
          />
          <Input
            label="Кількість лайків"
            type="number"
            value={selectedMeme?.likes?.toString() || "0"}
            onChange={(e) =>
              setSelectedMeme((prev) =>
                prev ? { ...prev, likes: parseInt(e.target.value) || 0 } : null,
              )
            }
          />
        </ModalBody>
        <ModalFooter>
          <Button onPress={handleSave}>Зберегти</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
