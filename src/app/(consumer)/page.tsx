import CreateAHeroPreview from "@/components/create-preview";
import SearchForm from "@/components/search-form";
import StatPreviewSection from "@/components/stat-preview";
import Welcome from "@/components/welcome";

export default function Home() {
  return (
    <>
      <div className="py-6 bg-[url('../../public/city-backdrop.jpg')] bg-cover bg-no-repeat bg-center  ">
        <section className="flex flex-col items-center justify-center section gap-2 border border-secondary rounded-2xl bg-background/40 backdrop-blur-sm">
          <Welcome />
          <SearchForm />
        </section>
      </div>
      <div className=" py-6 bg-[url('../../public/city-backdrop-2.jpg')] bg-cover bg-no-repeat bg-center">
        <h3 className="font-semibold text-center text-sm pb-6 md:text-xl lg:text-3xl">
          Stat Category Previews
        </h3>

        <section className="section border border-secondary rounded-2xl bg-background/40 backdrop-blur-sm">
          <StatPreviewSection />
        </section>
      </div>
      <div className="py-6 bg-[url('../../public/space-backdrop.jpg')] bg-cover bg-no-repeat bg-center">
        <h3 className="font-semibold text-center text-sm pb-6 md:text-xl lg:text-3xl">
          Create-A-Hero Preview
        </h3>
        <section className="section border border-secondary rounded-2xl bg-background/40 backdrop-blur-sm">
          <CreateAHeroPreview />
        </section>
      </div>
    </>
  );
}
