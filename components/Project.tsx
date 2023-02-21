import Anchor from "./Anchor";

export interface ProjectProps {
  title: string;
  technology: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export default function Project({ links, title, technology }: ProjectProps) {
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
      <div className="flex flex-wrap gap-x-4 gap-y-0">
        {links.length === 0 && <p>No project links yet.</p>}
        {links.map((link) => (
          <Anchor key={link.label} href={link.href}>
            {link.label}
          </Anchor>
        ))}
      </div>
    </li>
  );
}
