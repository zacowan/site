import Anchor from "@/components/Anchor";
import Project, { ProjectProps } from "@/components/Project";
import RecentPosts from "@/components/RecentPosts";

const LINKS = {
  github: "https://www.github.com/zacowan",
  linkedin: "https://www.linkedin.com/in/zacowan",
  twitter: "https://twitter.com/zacowan_",
};

const PROJECTS: ProjectProps[] = [
  {
    title: "Sight-based mouse control software",
    technology: "Python, machine learning",
    links: [
      {
        label: "github",
        href: "https://github.com/Scoobydoo181/Senior-Project-Fall-2022",
      },
    ],
  },
  {
    title: `"Jump" platformer mobile game`,
    technology: "Unity, C#",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/zacowan/Jump",
      },
    ],
  },
  {
    title: `"Swamp Hacks" hackathon site & systems`,
    technology: "JavaScript, google cloud, firebase, NFC",
    links: [
      {
        label: "site github",
        href: "https://github.com/swamphacks/2020-site",
      },
      {
        label: "system github",
        href: "https://github.com/swamphacks/swamphacks-internal",
      },
    ],
  },
];

export default async function Home() {
  return (
    <main>
      <section className="overflow-clip">
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
        <nav className="md:mt-40 mt-20 space-y-1 max-w-prose w-full flex flex-col md:mx-auto ml-8">
          <Anchor nextLink={false} href="#about">
            About
          </Anchor>
          <Anchor nextLink={false} href="#projects">
            Projects
          </Anchor>
          <Anchor nextLink={false} href="#blog-posts">
            Blog posts
          </Anchor>
          <Anchor nextLink={false} href="#connect">
            Connect
          </Anchor>
        </nav>
        <div className="max-w-prose w-full md:mx-auto ml-8">
          <div className="mt-4 w-8 h-96 bg-neutral-50" />
        </div>
      </section>
      <section id="about" className="overflow-x-clip">
        <div className="max-w-prose w-full md:mx-auto ml-8">
          <div className="w-8 h-16 bg-neutral-50" />
        </div>
        <div className="max-w-prose w-full bg-neutral-50 px-3 mx-auto">
          <h2 className="text-5xl lowercase font-black leading-relaxed tracking-tight text-neutral-900">
            about
          </h2>
        </div>
        <div className="max-w-prose w-full mx-auto">
          <p className="md:px-0 px-3 mt-4 text-neutral-300">
            As a blossoming software engineer, I possess a passion for fusing
            design with engineering to develop exceptional digital products that
            offer unparalleled user experiences. My career has been kick-started
            by a relentless drive to create software solutions that marry
            aesthetic and functionality. Whether it&apos;s web applications,
            mobile software, or anything in between, I relish the challenge of
            finding innovative ways to deliver the best possible user experience
            while leveraging cutting-edge technology.
          </p>
          <Anchor href={LINKS.linkedin} className="md:ml-0 mt-4 ml-3 block">
            Résumé
          </Anchor>
          <div className="w-16 h-48 bg-neutral-50 mt-10" />
        </div>
      </section>
      <section>
        <div className="max-w-prose w-full mx-auto">
          <div className="h-16 w-16 bg-neutral-50" />
          <h2 className="text-5xl lowercase font-black leading-relaxed tracking-tight px-3 border-l-8">
            experience
          </h2>
          <div className="w-32 h-2 bg-neutral-50" />
          <ul className="mt-10 md:ml-0 ml-3 space-y-2">
            <li className="capitalize font-extrabold tracking-tight text-2xl">
              American Express
              <ul className="text-neutral-300 font-normal text-base normal-case border-l border-neutral-500 pl-3 my-1 space-y-1">
                <li>Software engineer III - current</li>
                <li>Software engineer intern - 2022</li>
                <li>Site reliability engineer intern - 2021</li>
                <li>Software engineer intern - 2020</li>
              </ul>
            </li>
            <li className="capitalize font-extrabold tracking-tight text-2xl">
              Lockheed Martin
              <ul className="text-neutral-300 font-normal text-base normal-case border-l border-neutral-500 pl-3 my-1 space-y-1">
                <li>Software engineer intern - 2019</li>
              </ul>
            </li>
          </ul>
          <div className="w-16 h-48 bg-neutral-50 mt-10" />
        </div>
      </section>
      <section id="projects">
        <div className="max-w-prose w-full mx-auto">
          <div className="h-16 w-16 bg-neutral-50" />
          <h2 className="text-5xl lowercase font-black leading-relaxed tracking-tight px-3 border-l-8">
            projects
          </h2>
          <div className="w-32 h-2 bg-neutral-50" />
        </div>
        <div className="max-w-prose w-full mx-auto mt-10">
          <ul className="space-y-4 md:ml-0 ml-3">
            {PROJECTS.map((project) => (
              <Project key={project.title} {...project} />
            ))}
          </ul>
          <div className="w-16 h-48 bg-neutral-50 mt-10" />
        </div>
      </section>
      <section id="blog-posts">
        <div className="max-w-prose w-full mx-auto">
          <div className="w-16 h-16 bg-neutral-50" />
          <h2 className="text-5xl lowercase font-black leading-relaxed tracking-tight px-3 border-l-8">
            blog posts
          </h2>
          <div className="w-32 h-2 bg-neutral-50" />
        </div>
        <div className="flex justify-center">
          <div className="max-w-prose w-full mt-10">
            <RecentPosts className="md:mx-0 mx-3" />
            <div className="w-full mt-10 h-24 bg-neutral-50" />
          </div>
        </div>
      </section>
      <section id="connect">
        <div className="max-w-prose w-full mx-auto">
          <div className="h-8 w-full bg-neutral-50" />
          <h2 className="text-5xl lowercase font-black leading-relaxed tracking-tight px-3 bg-neutral-50 text-neutral-900">
            connect
          </h2>
        </div>
        <div className="max-w-prose w-full mt-10 mx-auto">
          <ul className=" md:ml-0 ml-3 space-x-4 flex">
            <li>
              <Anchor href={LINKS.github}>GitHub</Anchor>
            </li>
            <li>
              <Anchor href={LINKS.linkedin}>LinkedIn</Anchor>
            </li>
            <li>
              <Anchor href={LINKS.twitter}>Twitter</Anchor>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
