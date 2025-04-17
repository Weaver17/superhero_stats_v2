"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

type PageDeleteBtnProps = {
  heroSlug: string;
};

function PageDeleteBtn({ heroSlug }: PageDeleteBtnProps) {
  const router = useRouter();

  function handlePageDeleteClick() {
    router.push(`/custom-hero/${heroSlug}?showModal=y`);
  }

  return (
    <Button onClick={handlePageDeleteClick} className="px-1" variant="ghost">
      DELETE
    </Button>
  );
}

export default PageDeleteBtn;
