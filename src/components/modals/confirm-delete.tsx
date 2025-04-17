"use client";

import React from "react";
import { Button } from "../ui/button";
import ModalDeleteBtn from "../buttons/modal-delete-btn";

type ConfirmDeleteProps = {
  modalRef: React.RefObject<HTMLDialogElement | null>;
  onClose: () => void;
  onConfirm: () => void;
  heroId: string;
  userId: string;
};

function ConfirmDelete({
  modalRef,
  onClose,
  onConfirm,
  heroId,
  userId,
}: Readonly<ConfirmDeleteProps>) {
  const closeModal = () => {
    modalRef.current?.close();
    onClose();
  };

  const confirmDelete = () => {
    onConfirm();
  };

  return (
    <div className="p-15 border border-muted-foreground rounded-2xl bg-background/10 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center gap-5">
        <h3 className="text-center text-foreground font-semibold text-2xl">
          Are your sure you want to delete this Hero?
        </h3>
        <p className="text-center font-semibold text-foreground underline underline-offset-3">
          !!! This action cannot be undone !!!
        </p>
      </div>
      <div className="flex gap-5 mt-8 justify-center">
        <Button onClick={closeModal}>Cancel</Button>
        <ModalDeleteBtn onClick={confirmDelete} />
      </div>
    </div>
  );
}

export default ConfirmDelete;
