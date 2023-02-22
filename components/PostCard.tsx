import { Chevron, linkClassName } from "./Anchor";
import Link from "next/link";
import { formatDistance, subDays } from "date-fns";

interface PostCardProps {
  title: string;
  description: string;
  date: string;
  href: string;
}

// TODO: aria
export default function PostCard({
  href,
  title,
  description,
  date,
}: PostCardProps) {
  return (
    <Link
      href={href}
      className="border-4 border-neutral-50 flex flex-col px-4 py-2 hover:border-b-8 hover:border-r-8 transition-all duration-75 active:scale-[.99]"
    >
      <time className="text-xs text-neutral-300 lowercase pb-2">
        {formatDistance(new Date(date), new Date(), { addSuffix: true })}
      </time>
      <h3 className="font-extrabold text-xl tracking-wide">{title}</h3>
      <p className="block text-neutral-300">{description}</p>
      <span className="flex justify-end">
        <span className={linkClassName}>
          View
          <Chevron />
        </span>
      </span>
    </Link>
  );
}
