import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initialHero: Prisma.HeroCreateInput[] = [
  {
    name: "Obi-Two",
    slug: "obi-two",
    powerstats: {
      create: {
        intelligence: "1",
        strength: "43",
        speed: "90",
        durability: "10",
        power: "50",
        combat: "82",
      },
    },
    biography: {
      create: {
        full_name: "Obi-Two Kenobi",
        alter_egos: "None",
        aliases: {
          create: [
            { aliases: "The One Who Wacks" },
            { aliases: "*lightsaber noise*" },
          ],
        },
        place_of_birth: "Coruscant",
        first_appearance: "Yet to Come",
        publisher: "Me",
        alignment: "good",
      },
    },
    appearance: {
      create: {
        gender: "Male",
        race: "Human",
        eye_color: "Blue",
        hair_color: "Brown",
        height: {
          create: [{ imperial: "6'2", metric: "188" }],
        },
        weight: {
          create: [{ imperial: "190", metric: "86" }],
        },
      },
    },
    work: {
      create: {
        occupation: "Jedi Knight",
        base: "Jedi Temple",
      },
    },
    connections: {
      create: {
        group_affiliation: "Jedi Order",
        relatives: "Obi-Wan Kenobi (brother)",
      },
    },
    image: {
      create: {
        url: "https://images.unsplash.com/photo-1683509345856-e1ea4f04b806?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
  },
];

async function main() {
  console.log(`Start seeding...`);

  for (const firstCreatedHero of initialHero) {
    const hero = await prisma.hero.create({
      data: firstCreatedHero,
    });
    console.log(`Hero created: ${hero.name}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
