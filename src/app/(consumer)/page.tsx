import CreateAHeroPreview from "@/components/create-preview";

export default function Home() {
    return (
        <div className="py-6 px-2 bg-[url('../../public/space-backdrop.jpg')] bg-cover bg-no-repeat bg-center">
            <h3 className="font-semibold text-center text-sm pb-6 md:text-xl lg:text-3xl">
                Create-A-Hero Preview
            </h3>
            <section className="section border border-secondary rounded-2xl bg-background/40 backdrop-blur-sm">
                <CreateAHeroPreview />
            </section>
        </div>
    );
}
