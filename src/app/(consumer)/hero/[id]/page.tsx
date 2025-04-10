import Image from "next/image";
import { BASE_URL, makeUseful } from "@/lib/constants";
import HeroImage from "@/components/hero-page/hero-image";
import { Hero } from "@/lib/types";
import HeroName from "@/components/hero-page/hero-name";

async function page({ params }: { params: Promise<{ id: string }> }) {
  // const router = useRouter();
  const { id } = await params;

  const heroFromId = await fetch(`${BASE_URL}/${id}`);
  const unusefulHero = await heroFromId.json();
  const hero = makeUseful(unusefulHero) as Hero;

  // const [hero, setHero] = useState<Hero | null>(null);

  // setHero(formatHero);

  // useEffect(() => {
  //   if (id) {
  //     const fetchHero = async () => {
  //       const heroData = await getHeroById(id as string);
  //       setHero(heroData);
  //     };
  //     fetchHero();
  //   }
  // }, [id]);

  return (
    <section className="py-6 bg-[url('../../public/city-backdrop-2.jpg')] bg-cover bg-no-repeat bg-center min-h-screen">
      <div className="section border border-secondary rounded-2xl bg-background/40 backdrop-blur-sm">
        <div className="grid grid-cols-2 px-5 ">
          <HeroImage
            image={hero?.image?.url}
            name={hero?.name}
            publisher={hero?.biography?.publisher}
          />
          <HeroName
            heroName={hero?.name}
            realName={hero?.biography?.full_name}
          />
        </div>
        <div>
          {/* BIO  */}
          {/* APP  */}
        </div>
        <div>{/* POWERSTATS  */}</div>
        <div>
          {/* WORK  */}
          {/* CONN  */}
        </div>
      </div>
    </section>
  );
}

export default page;
