import Anchor from "@/components/Anchor";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main>
      <section className="max-h-screen overflow-clip">
        <div className="flex items-center justify-center">
          <h1 className="text-7xl uppercase font-black mt-24 leading-relaxed">
            Hey,
            <br />
            I&apos;m{" "}
            <span className="tracking-tighter bg-neutral-50 text-neutral-900 px-2">
              Zach.
            </span>
          </h1>
        </div>
        <div className="w-full ml-8 md:ml-0 flex justify-center">
          <nav className="mt-40 space-y-1 max-w-prose w-full flex flex-col">
            <Anchor href="#">About</Anchor>
            <Anchor href="#">Projects</Anchor>
            <Anchor href="#">Blog</Anchor>
            <Anchor href="#">Connect</Anchor>
          </nav>
        </div>
        <div className="w-full ml-8 md:ml-0 flex justify-center">
          <div className="max-w-prose w-full">
            <div className="mt-4 w-8 h-screen bg-neutral-50" />
          </div>
        </div>
      </section>
      <section className="overflow-x-clip">
        <div className="w-full ml-8 md:ml-0 flex justify-center">
          <div className="max-w-prose w-full">
            <div className="w-8 h-16 bg-neutral-50" />
          </div>
        </div>
        <div className="bg-neutral-50 w-full flex justify-center px-3">
          <div className="max-w-prose w-full">
            <h2 className="text-5xl lowercase font-black leading-relaxed tracking-tight text-neutral-900">
              about
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-prose">
            <p className="md:px-0 px-3 mt-4 text-neutral-300">
              I&apos;m a software engineer currently working at American
              Express. My deep love of design helps drive my passion for
              engineering <strong>joyful</strong> user experiences that{" "}
              <strong>just make sense</strong>. I love engineering and do
              everything I can to craft things with a passion towards
              perfection.
            </p>
            <div className="w-16 h-48 bg-neutral-50 mt-10" />
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center">
          <div className="max-w-prose w-full">
            <div className="h-16 w-16 bg-neutral-50" />
            <h2 className="text-5xl lowercase font-black leading-relaxed tracking-tight px-3 border-l-8">
              experience
            </h2>
            <div className="w-32 h-2 bg-neutral-50" />
            <ul className="mt-10 md:ml-0 ml-3">
              <li className="lowercase font-extrabold tracking-tight text-2xl">
                American Express
                <ul className="text-neutral-300 font-normal text-base normal-case border-l border-neutral-500 pl-3 my-1">
                  <li>Software engineer III - current</li>
                  <li>Software engineer intern - 2022</li>
                  <li>Site reliability engineer intern - 2021</li>
                  <li>Software engineer intern - 2020</li>
                </ul>
              </li>
              <li className="lowercase font-extrabold tracking-tight text-2xl">
                Lockheed Martin
                <ul className="text-neutral-300 font-normal text-base normal-case border-l border-neutral-500 pl-3 my-1">
                  <li>Software engineer intern - 2019</li>
                </ul>
              </li>
            </ul>
            <Anchor
              href="https://www.linkedin.com/in/zacowan"
              className="md:ml-0 mt-10 ml-3 block"
            >
              Résumé
            </Anchor>
            <div className="w-16 h-48 bg-neutral-50 mt-10" />
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center">
          <div className="max-w-prose w-full">
            <div className="h-16 w-16 bg-neutral-50" />
            <h2 className="text-5xl lowercase font-black leading-relaxed tracking-tight px-3 border-l-8">
              projects
            </h2>
            <div className="w-32 h-2 bg-neutral-50" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-prose w-full mt-10">
            <ul className="space-y-4 md:ml-0 ml-3">
              <Project
                title="sight-based mouse controller"
                technology="Python, machine learning"
                github="#"
                blogPost="#"
              />
              <Project
                title="sight-based mouse controller"
                technology="Python, machine learning"
                github="#"
                blogPost="#"
              />
              <Project
                title="sight-based mouse controller"
                technology="Python, machine learning"
                github="#"
                blogPost="#"
              />
            </ul>
            <div className="w-16 h-48 bg-neutral-50 mt-10" />
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center">
          <div className="max-w-prose w-full">
            <div className="w-16 h-16 bg-neutral-50" />
            <h2 className="text-5xl lowercase font-black leading-relaxed tracking-tight px-3 border-l-8">
              recent posts
            </h2>
            <div className="w-32 h-2 bg-neutral-50" />
          </div>
        </div>
      </section>
    </main>
  );
}
