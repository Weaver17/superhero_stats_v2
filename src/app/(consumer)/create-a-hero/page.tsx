"use client";
import CreateCard from "@/components/cards/create-card";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import backup from "../../../../public/vercel.svg";

function Page() {
  const [formHeroName, setFormHeroName] = useState("");
  const [formFullName, setFormFullName] = useState("");
  const [formImage, setFormImage] = useState("");

  const [cardHeroName, setCardHeroName] = useState("SuperHero Name");
  const [cardFullName, setCardFullName] = useState("Full Name");
  const [cardImage, setCardImage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCardHeroName(formHeroName || "SuperHero Name");
    setCardFullName(formFullName || "Full Name");
    setCardImage(formImage || backup);
  };

  return (
    <div className="py-6 bg-[url('../../public/random-dark.jpg')] bg-cover bg-no-repeat bg-center min-h-screen">
      <div className="section border border-secondary rounded-2xl bg-background/40 backdrop-blur-sm">
        <div className="grid grid-cols-2">
          {/* SELECT DROPDOWN FOR CAH PAGE BACKGROUND */}
          <div className="w-[80%] p-20 mx-auto border-r border-secondary">
            <CreateCard
              heroName={cardHeroName}
              fullName={cardFullName}
              image={cardImage}
              publisher="custom"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col mx-auto w-[80%] p-15"
            action=""
          >
            <label className="flex flex-col">
              Image{" "}
              <input
                className="mb-11 h-11 bg-foreground text-background"
                type="text"
                name="image"
                id="image"
                value={formImage}
                onChange={(e) => setFormImage(e.target.value)}
              />
            </label>
            <label className="flex flex-col">
              SuperHero Name{" "}
              <input
                className="mb-11 h-11 bg-foreground text-background"
                type="text"
                name="hero-name"
                id="hero-name"
                value={formHeroName}
                onChange={(e) => setFormHeroName(e.target.value)}
              />
            </label>
            <label className="flex flex-col">
              Full Name{" "}
              <input
                className="mb-11 h-11 bg-foreground text-background"
                type="text"
                name="full-name"
                id="full-name"
                value={formFullName}
                onChange={(e) => setFormFullName(e.target.value)}
              />
            </label>

            <Button>Save</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
