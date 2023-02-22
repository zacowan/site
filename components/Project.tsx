import Anchor from "./Anchor";
import Tag from "./Tag";

export interface ProjectProps {
  title: string;
  technology: string[];
  links: Array<{
    label: string;
    href: string;
  }>;
}

export default function Project({ links, title, technology }: ProjectProps) {
  return (
    <li className="border-l-4 px-3 space-y-1">
      <div>
        <h3 className="font-extrabold text-xl tracking-wide">{title}</h3>
        <ul aria-label="technology" className="flex gap-2 flex-wrap mt-2">
          {technology.map((label) => (
            <li key={label}>
              <Tag>{label}</Tag>
            </li>
          ))}
        </ul>
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
