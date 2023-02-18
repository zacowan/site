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
          <nav className="mt-40 space-y-1 max-w-prose w-full">
            <a href="#" className="block">
              About
            </a>
            <a href="#" className="block">
              Projects
            </a>
            <a href="#" className="block">
              Blog
            </a>
            <a href="#" className="block">
              Connect
            </a>
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
            <a
              href="https://www.linkedin.com/in/zacowan"
              className="md:ml-0 my-8 ml-3 block"
            >
              Résumé
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex max-w-prose w-full">
            <div className="top-0 bottom-0 w-16 bg-neutral-50" />
            <ul className="ml-4 pb-40">
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
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center">
          <div className="max-w-prose w-full">
            <div className="h-16 w-16 bg-neutral-50" />
            <h2 className="text-5xl lowercase font-black leading-relaxed tracking-tight px-3">
              projects
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <ul className="max-w-prose w-full mt-10">
            <li className="border-l-8 px-3 space-y-1">
              <div>
                <h3 className="font-extrabold lowercase text-lg tracking-wide">
                  sight-based mouse controller
                </h3>
                <div
                  aria-label="technology"
                  className="text-neutral-300 text-sm"
                >
                  Python, machine learning
                </div>
              </div>
              <div className="space-x-4">
                <a href="#">GitHub</a>
                <a href="#">Blog post</a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
