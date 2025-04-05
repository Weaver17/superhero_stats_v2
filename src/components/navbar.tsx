import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <header className="flex h-12 bg-background z-10">
      <nav className="flex gap-4 container  items-center ">
        <Link className="mr-auto text-lg hover:underline px-2 flex" href="/">
          SuperHero Stats
        </Link>
        <Button>Sign In</Button>
        <Button variant="outline">Sign Up</Button>
      </nav>
    </header>
  );
}

export default Navbar;
