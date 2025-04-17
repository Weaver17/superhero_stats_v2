"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { JSX, useEffect, useRef } from "react";
import ConfirmDelete from "./confirm-delete";

type ModalProps = {
  //   children: React.ReactNode;
  heroId: string | null;
  userId: string | null;
  handleClose: () => void;
  handleConfirm: () => void;
  heroSlug: string;
};

export default function Modal({
  heroId,
  userId,
  handleClose,
  handleConfirm,
  heroSlug,
}: Readonly<ModalProps>) {
  const searchParams = useSearchParams();
  const modalRef = useRef<null | HTMLDialogElement>(null);
  const showModal = searchParams.get("showModal");

  const router = useRouter();

  function onClose() {
    handleClose();
    router.push(`/custom-hero/${heroSlug}`);
  }

  function onConfirm() {
    handleConfirm();
  }

  useEffect(() => {
    if (showModal === "y") {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [showModal]);

  const modal: JSX.Element | null =
    showModal === "y" ? (
      <dialog
        ref={modalRef}
        className="fixed self-center justify-self-center border border-secondary rounded-2xl bg-background/40 backdrop-blur-sm w-[100%] h-[100%] flex items-center justify-center z-30"
      >
        <ConfirmDelete
          onClose={onClose}
          onConfirm={onConfirm}
          modalRef={modalRef}
          heroId={heroId ?? ""}
          userId={userId ?? ""}
        />
      </dialog>
    ) : null;

  return modal;
}
