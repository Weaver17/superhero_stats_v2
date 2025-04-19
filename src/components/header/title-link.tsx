import Link from "next/link";

function TitleLink() {
  return (
    <Link
      className="mr-auto text-xl hover:underline px-2 flex text-secondary md:text-2xl lg:text-4xl "
      href="/"
    >
      SuperHero Stats
    </Link>
  );
}

export default TitleLink;
