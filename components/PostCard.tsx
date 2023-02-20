import { Chevron, linkClassName } from "./Anchor";
import Link from "next/link";

interface PostCardProps {
  title?: string;
  description?: string;
  href: string;
}

// TODO: aria
export default function PostCard({ href, title, description }: PostCardProps) {
  return (
    <Link
      href={href}
      className="border-4 border-neutral-50 flex flex-col px-4 py-2 hover:border-b-8 hover:border-r-8 transition-all duration-75 active:scale-[.99]"
    >
      <h3 className="font-extrabold">{title}</h3>
      <p className="block text-sm text-neutral-300">{description}</p>
      <span className="flex justify-end">
        <span className={linkClassName}>
          View
          <Chevron />
        </span>
      </span>
    </Link>
  );
}
