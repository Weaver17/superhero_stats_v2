"use client";
import { Button } from "../ui/button";

type ModalDeleteBtnProps = {
  onClick: () => void;
};

function ModalDeleteBtn({ onClick }: ModalDeleteBtnProps) {
  return (
    <Button
      onClick={onClick}
      className="bg-primary border border-marvel text-marvel hover:bg-primary/50"
    >
      DELETE
    </Button>
  );
}

export default ModalDeleteBtn;
