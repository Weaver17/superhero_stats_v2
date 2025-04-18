"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { JSX, useEffect, useRef } from "react";
import ConfirmDelete from "./confirm-delete";

type ModalProps = {
  //   children: React.ReactNode;
  creatorKindeId: string | null;
  userKindeId: string | null;
  handleConfirm: () => void;
  heroSlug: string;
};

export default function Modal({
  creatorKindeId,
  userKindeId,
  handleConfirm,
  heroSlug,
}: Readonly<ModalProps>) {
  const searchParams = useSearchParams();
  const modalRef = useRef<null | HTMLDialogElement>(null);
  const showModal = searchParams.get("showModal");

  const router = useRouter();

  const closeModal = () => {
    modalRef.current?.close();
    router.push(`/custom-hero/${heroSlug}`);
  };

  function onConfirm() {
    handleConfirm();
    modalRef.current?.close();
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
        {userKindeId === creatorKindeId ? (
          <ConfirmDelete
            onClose={closeModal}
            onConfirm={onConfirm}
            creatorKindeId={creatorKindeId ?? ""}
            userKindeId={userKindeId ?? ""}
          />
        ) : null}
      </dialog>
    ) : null;

  return modal;
}
