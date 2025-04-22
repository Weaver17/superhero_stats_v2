"use client";

import React from "react";
import { Button } from "../ui/button";
import ModalDeleteBtn from "../buttons/modal-delete-btn";

type ConfirmDeleteProps = {
  onClose: () => void;
  onConfirm: () => void;
  creatorKindeId: string;
  userKindeId: string;
};

function ConfirmDelete({
  onClose,
  onConfirm,
  creatorKindeId,
  userKindeId,
}: Readonly<ConfirmDeleteProps>) {
  const confirmDelete = () => {
    onConfirm();
  };

  return (
    <div className="p-15 border border-muted-foreground rounded-2xl bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center gap-5">
        <h3 className="text-center text-foreground font-semibold sm:text-xl md:text-2xl">
          Are your sure you want to delete this Hero?
        </h3>
        <p className="text-center font-semibold text-foreground underline underline-offset-3 sm:text-xl md:text-2xl">
          !!! This action cannot be undone !!!
        </p>
      </div>
      <div className="flex gap-5 mt-8 justify-center">
        <Button
          className="h-8 rounded-md gap-1.5 px-3 md:h-9 md:px-4 md:py-2 lg:h-10 lg:rounded-md lg:px-6"
          onClick={onClose}
        >
          Cancel
        </Button>
        {userKindeId === creatorKindeId ? (
          <ModalDeleteBtn onClick={confirmDelete} />
        ) : null}
      </div>
    </div>
  );
}

export default ConfirmDelete;
