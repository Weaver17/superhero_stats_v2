"use client";
import { Button } from "../ui/button";

type ModalDeleteBtnProps = {
  onClick: () => void;
};

function ModalDeleteBtn({ onClick }: ModalDeleteBtnProps) {
  return (
    <Button
      onClick={onClick}
      className="bg-primary border border-marvel text-marvel hover:bg-primary/50 h-8 rounded-md gap-1.5 px-3 md:h-9 md:px-4 md:py-2 lg:h-10 lg:rounded-md lg:px-6"
    >
      DELETE
    </Button>
  );
}

export default ModalDeleteBtn;
