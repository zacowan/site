import Anchor from "./Anchor";
import { formatDistance } from "date-fns";
import Tag from "./Tag";

interface PostCardProps {
  title: string;
  categories: string[];
  date: string;
  href: string;
}

export default function PostCard({
  href,
  title,
  date,
  categories,
}: PostCardProps) {
  return (
    <div
      onClick={(event) => {
        const link = event.currentTarget.querySelector("a");
        link?.click();
      }}
      className="group/post-card border-4 border-neutral-50 flex flex-col px-4 py-2 focus-within:border-b-8 focus-within:border-r-8 hover:border-b-8 hover:border-r-8 transition-all duration-75 active:scale-[.99] space-y-3 cursor-pointer"
    >
      <h3 className="font-extrabold text-xl tracking-wide">{title}</h3>
      <ul
        aria-label="categories"
        className="text-xs uppercase flex gap-2 flex-wrap"
      >
        {categories.map((category) => (
          <li key={category}>
            <Tag>{category}</Tag>
          </li>
        ))}
      </ul>
      <span className="flex justify-between items-center">
        <time
          aria-label="publish time"
          className="text-xs text-neutral-300 lowercase"
        >
          {formatDistance(new Date(date), new Date(), { addSuffix: true })}
        </time>
        <Anchor
          chevronClassName="group-hover/post-card:chevron-show"
          href={href}
        >
          Read Post
        </Anchor>
      </span>
    </div>
  );
}
