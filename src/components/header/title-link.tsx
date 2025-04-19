import Link from "next/link";

function TitleLink() {
  return (
    <Link
      className="mx-auto text-xl px-2 flex text-secondary self-end hover:underline md:mx-0 md:text-2xl lg:text-4xl "
      href="/"
    >
      SuperHero Stats
    </Link>
  );
}

export default TitleLink;
