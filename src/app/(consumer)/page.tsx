import SearchForm from "@/components/search-form";
import StatPreviewSection from "@/components/stat-preview";
import Welcome from "@/components/welcome";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center section gap-2 border border-secondary rounded-2xl bg-primary/10 backdrop-blur-sm">
        <Welcome />
        <SearchForm />
      </section>
      <div>
        <h3 className="font-semibold text-center text-3xl">
          Stat Category Previews
        </h3>
      </div>
      <section className="section border border-secondary rounded-2xl bg-primary/10 backdrop-blur-sm">
        <StatPreviewSection />
      </section>
      <h3 className="font-semibold text-center text-3xl">
        Create-A-Hero Preview
      </h3>
      <section className="section border border-secondary rounded-2xl bg-primary/10 backdrop-blur-sm"></section>
    </>
  );
}
