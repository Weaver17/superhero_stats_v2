import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <header className="flex h-20 bg-background z-10 border-b border-zinc-700/50">
      <nav className="flex gap-4 container  items-center ">
        <Link
          className="mr-auto text-4xl hover:underline px-2 flex text-secondary"
          href="/"
        >
          SuperHero Stats
        </Link>
        <Link href="/create-a-hero">
          <Button>Create-A-Hero</Button>
        </Link>
        <Link href="/custom-hero/all">
          <Button>Created Heroes</Button>
        </Link>
        <Button>Sign In</Button>
        <Button variant="outline">Sign Up</Button>
      </nav>
    </header>
  );
}

export default Navbar;
