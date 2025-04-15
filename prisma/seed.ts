import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initialUser: Prisma.UserCreateInput = {
  isAdmin: true,
  email: "obi1@jedi.com",
  username: "Obi-Wan",
  hashedPassword: "qwerty",
};

const initialHeros: Prisma.HeroCreateInput[] = [
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
        page_background: "Space",
      },
    },
  },
  {
    name: "Spooky Ghost Man",
    slug: "spooky-ghost-man",
    powerstats: {
      create: {
        intelligence: "16",
        strength: "69",
        speed: "75",
        durability: "90",
        power: "33",
        combat: "77",
      },
    },
    biography: {
      create: {
        full_name: "Unknown",
        alter_egos: "Sheet, Guy in Cheap Costume",
        aliases: {
          create: [{ aliases: "Phantom" }, { aliases: "Boo Man" }],
        },
        place_of_birth: "Unknown",
        first_appearance: "Yes",
        publisher: "Me",
        alignment: "evil",
      },
    },
    appearance: {
      create: {
        gender: "Male",
        race: "Unknown",
        eye_color: "Black",
        hair_color: "N/A",
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
        occupation: "Ghost",
        base: "TeePee made of sticks in a field near some hills",
      },
    },
    connections: {
      create: {
        group_affiliation: "Gathering of Ghosts and Ghouls",
        relatives: "N/A",
      },
    },
    image: {
      create: {
        url: "https://images.unsplash.com/photo-1583680599772-8390c5ebab6a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        page_background: "None",
      },
    },
  },
];

async function main() {
  console.log(`Start seeding...`);

  for (const heroes of initialHeros) {
    const hero = await prisma.hero.create({
      data: heroes,
    });
    console.log(`Hero created: ${hero.name}`);
  }

  const admin = await prisma.user.create({
    data: initialUser,
  });
  console.log(`User created: ${admin.username}`);
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
