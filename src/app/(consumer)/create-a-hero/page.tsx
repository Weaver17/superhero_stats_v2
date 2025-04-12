import { Button } from "@/components/ui/button";
import { CUSTOM_HERO_BACKGROUNDS } from "@/lib/constants";

function Page() {
  return (
    <div className="py-6 bg-[url('../../public/random-dark.jpg')] bg-cover bg-no-repeat bg-center min-h-screen">
      <div className="flex flex-col gap-6 mx-auto mb-6 justify-center items-center max-w-[70%]">
        <h2 className="font-semibold text-6xl">Create-A-Hero</h2>
        <p className="font-semibold text-xl text-center">
          Customize your hero and click submit to save the hero to your profile.
          Your hero will then show up on the Custom Hero list and get their own
          Hero Page
        </p>
        <p className="font-semibold text-center">All fields are required</p>
      </div>
      <div className="section border border-secondary rounded-2xl bg-background/40 backdrop-blur-sm">
        <form className="flex flex-col mx-auto w-[80%] p-15" action="">
          <div className="grid grid-cols-2">
            <div className="w-[80%] p-20 mx-auto border-r border-secondary">
              <label className="flex flex-col">
                Image{" "}
                <input
                  className="mb-11 h-11 bg-foreground text-background"
                  type="text"
                  name="image"
                  id="image"
                />
              </label>
              <label className="flex flex-col">
                SuperHero Name{" "}
                <input
                  className="mb-11 h-11 bg-foreground text-background"
                  type="text"
                  name="hero-name"
                  id="hero-name"
                />
              </label>
              <label className="flex flex-col">
                Full Name{" "}
                <input
                  className="mb-11 h-11 bg-foreground text-background"
                  type="text"
                  name="full-name"
                  id="full-name"
                />
              </label>

              <select
                className="flex flex-col"
                name="page-background"
                id="page-background"
              >
                {CUSTOM_HERO_BACKGROUNDS.map((bg, i) => (
                  <option className="text-background" key={`${bg} - ${i}`}>
                    {bg}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="flex flex-col">
                Image{" "}
                <input
                  className="mb-11 h-11 bg-foreground text-background"
                  type="text"
                  name="image"
                  id="image"
                />
              </label>
              <label className="flex flex-col">
                SuperHero Name{" "}
                <input
                  className="mb-11 h-11 bg-foreground text-background"
                  type="text"
                  name="hero-name"
                  id="hero-name"
                />
              </label>
              <label className="flex flex-col">
                Full Name{" "}
                <input
                  className="mb-11 h-11 bg-foreground text-background"
                  type="text"
                  name="full-name"
                  id="full-name"
                />
              </label>
              <label className="flex flex-col">
                Full Name{" "}
                <input
                  className="mb-11 h-11 bg-foreground text-background"
                  type="text"
                  name="full-name"
                  id="full-name"
                />
              </label>
              <label className="flex flex-col">
                Full Name{" "}
                <input
                  className="mb-11 h-11 bg-foreground text-background"
                  type="text"
                  name="full-name"
                  id="full-name"
                />
              </label>
              <label className="flex flex-col">
                Full Name{" "}
                <input
                  className="mb-11 h-11 bg-foreground text-background"
                  type="text"
                  name="full-name"
                  id="full-name"
                />
              </label>
              <label className="flex flex-col">
                Full Name{" "}
                <input
                  className="mb-11 h-11 bg-foreground text-background"
                  type="text"
                  name="full-name"
                  id="full-name"
                />
              </label>
            </div>

            <Button>Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
