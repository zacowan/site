import Anchor from "./Anchor";

interface ProjectProps {
  title: string;
  technology: string;
  github?: string;
  blogPost?: string;
}

export default function Project({
  github,
  blogPost,
  title,
  technology,
}: ProjectProps) {
  return (
    <li className="border-l-4 px-3 space-y-1 hover:border-l-8 transition-all duration-75">
      <div>
        <h3 className="font-extrabold lowercase text-lg tracking-wide">
          {title}
        </h3>
        <div aria-label="technology" className="text-neutral-300 text-sm">
          {technology}
        </div>
      </div>
      <div className="space-x-4">
        {github && <Anchor href="#">GitHub</Anchor>}
        {blogPost && <Anchor href="#">Blog post</Anchor>}
      </div>
    </li>
  );
}
