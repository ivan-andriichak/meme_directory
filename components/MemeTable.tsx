"use client";

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
import { ModalBody, ModalFooter, ModalHeader } from "@heroui/modal";
import { useEffect, useState } from "react";

import { validateMeme } from "@/utils/validation";
import { loadMemes, saveMemes } from "@/utils/storage";
import { memesInit } from "@/data/memes";
import { IMeme } from "@/interfaces/IMeme";

export const MemeTable = () => {
  const [memes, setMemes] = useState<IMeme[]>(memesInit);
  const [selectedMeme, setSelectedMeme] = useState<IMeme | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loadedMemes = loadMemes();

    if (loadedMemes.length > 0) {
      setMemes(loadedMemes);
    }
  }, []);

  const handleEdit = (meme: IMeme) => {
    setSelectedMeme(meme);
    setIsOpen(true);
  };

  const handleSave = () => {
    if (selectedMeme) {
      const validationError = validateMeme(selectedMeme);

      if (validationError) {
        alert(validationError);

        return;
      }

      const updated = memes.map((m) =>
        m.id === selectedMeme.id ? { ...m, ...selectedMeme } : m,
      );

      setMemes(updated);
      saveMemes(updated);
      setIsOpen(false);
    }
  };

  return (
    <>
      <Table aria-label="Memes table">
        <TableHeader>
          <TableColumn key="id">ID</TableColumn>
          <TableColumn key="title">Title</TableColumn>
          <TableColumn key="likes">Like</TableColumn>
          <TableColumn key="actions">Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {memes.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.likes}</TableCell>
              <TableCell>
                <Button
                  data-hero-ui
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
          <Button data-hero-ui onPress={handleSave}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
