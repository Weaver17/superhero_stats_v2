import { BASE_URL, makeUseful } from "@/lib/constants";
import HeroImage from "@/components/hero-page/hero-image";
import { Hero } from "@/lib/types";
import HeroName from "@/components/hero-page/hero-name";
import HeroPower from "@/components/hero-page/hero-power";
import HeroBio from "@/components/hero-page/hero-bio";
import HeroApp from "@/components/hero-page/hero-app";
import HeroWork from "@/components/hero-page/hero-work";
import HeroConn from "@/components/hero-page/hero-conn";
import backup from "../../../../../public/vercel.svg";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const heroFromId = await fetch(`${BASE_URL}/${id}`);
  const unusefulHero = await heroFromId.json();
  const hero = makeUseful(unusefulHero) as Hero;

  const image =
    hero?.image === undefined || hero?.image === null
      ? backup
      : hero?.image.url;

  return (
    <section className="py-6 bg-[url('../../public/city-backdrop-2.jpg')] bg-cover bg-no-repeat bg-center min-h-screen">
      <div className="section border border-secondary rounded-2xl bg-background/40 backdrop-blur-sm">
        <div className="grid grid-cols-2 mx-5 pb-10 border-b border-secondary ">
          <HeroImage
            image={image}
            name={hero?.name}
            publisher={hero?.biography?.publisher}
          />
          <HeroName
            heroName={hero?.name}
            realName={hero?.biography?.full_name}
          />
        </div>
        <div className="grid grid-cols-2 items-start mx-5 p-10 border-b border-secondary">
          {/* BIO  */}
          <HeroBio
            alter_egos={hero?.biography?.alter_egos}
            aliases={hero?.biography?.aliases}
            place_of_birth={hero?.biography?.place_of_birth}
            first_appearance={hero?.biography?.first_appearance}
            publisher={hero?.biography?.publisher}
            alignment={hero?.biography?.alignment}
          />
          {/* APP  */}
          <HeroApp
            eye_color={hero?.appearance?.eye_color}
            hair_color={hero?.appearance?.hair_color}
            race={hero?.appearance?.race}
            gender={hero?.appearance?.gender}
            height={hero?.appearance?.height}
            weight={hero?.appearance?.weight}
          />
        </div>
        <div className=" mx-5  border-b border-secondary">
          {/* POWERSTATS  */}
          <HeroPower
            intelligence={hero?.powerstats?.intelligence}
            combat={hero?.powerstats?.combat}
            durability={hero?.powerstats?.durability}
            power={hero?.powerstats?.power}
            speed={hero?.powerstats?.speed}
            strength={hero?.powerstats?.strength}
          />
        </div>
        <div className="grid grid-cols-2 items-start mx-5 p-10 border-b border-secondary">
          {/* WORK  */}
          <HeroWork
            occupation={hero?.work?.occupation}
            base={hero?.work?.base}
          />
          {/* CONN  */}
          <HeroConn
            relatives={hero?.connections?.relatives}
            group_affiliation={hero?.connections?.group_affiliation}
          />
        </div>
      </div>
    </section>
  );
}

export default page;
