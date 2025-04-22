"use client";

import { Button, Input, Modal } from "@heroui/react";
import { ModalBody, ModalFooter, ModalHeader } from "@heroui/modal";

import { IMeme } from "@/interfaces/IMeme";

interface EditMemeModalProps {
  isOpen: boolean;
  meme: IMeme | null;
  onCloseAction: () => void;
  onChangeAction: (updatedMeme: IMeme) => void;
  onSaveAction: () => void;
  backdrop?: string;
}

export const EditMemeModal = ({
  isOpen,
  meme,
  onCloseAction,
  onChangeAction,
  onSaveAction,
}: EditMemeModalProps) => {
  const handleChange = (field: keyof IMeme, value: string | number) => {
    if (meme) {
      onChangeAction({ ...meme, [field]: value });
    }
  };

  return (
    <Modal
      data-hero-ui-modal
      backdrop="opaque"
      className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg "
      isOpen={isOpen}
      onOpenChange={onCloseAction}
    >
      <div
        className="w-full max-w-md mx-auto flex flex-col"
        data-hero-ui-modal=""
      >
        <ModalHeader className="text-xl font-semibold text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2" />
        <ModalBody className="space-y-4 py-4">
          <Input
            data-hero-ui
            label="Title"
            placeholder="Enter meme title"
            value={meme?.title || ""}
            onChange={(e) => handleChange("title", e.target.value)}
          />
          <Input
            data-hero-ui
            label="Image URL"
            placeholder="https://example.com/image.jpg"
            value={meme?.image || ""}
            onChange={(e) => handleChange("image", e.target.value)}
          />
          <Input
            data-hero-ui
            label="Likes"
            max={99}
            min={0}
            placeholder="0"
            type="number"
            value={meme?.likes?.toString() || "0"}
            onChange={(e) =>
              handleChange("likes", parseInt(e.target.value) || 0)
            }
          />
        </ModalBody>
        <ModalFooter className="flex justify-end gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
          <Button
            data-hero-ui
            color="default"
            variant="ghost"
            onPress={onCloseAction}
          >
            Cancel
          </Button>
          <Button
            data-hero-ui
            color="primary"
            variant="shadow"
            onPress={onSaveAction}
          >
            Save
          </Button>
        </ModalFooter>
      </div>
    </Modal>
  );
};
