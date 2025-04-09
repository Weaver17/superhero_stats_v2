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
      <section className="section border border-secondary rounded-2xl bg-primary/10 backdrop-blur-sm">
        <StatPreviewSection />
      </section>
    </>
  );
}
