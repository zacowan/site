import { ReactNode } from "react";
import { FiChevronLeft } from "react-icons/fi";
import Link, { LinkProps } from "next/link";

interface AnchorProps extends LinkProps {
  children?: ReactNode;
  chevron?: boolean;
  className?: string;
  chevronClassName?: string;
}

export default function Anchor({
  children,
  className,
  chevron = true,
  chevronClassName,
  ...otherProps
}: AnchorProps) {
  return (
    <span className={className}>
      <Link
        className="uppercase underline font-extrabold py-3 group inline-flex items-center transition-all active:underline-offset-1"
        {...otherProps}
      >
        {children}
        {chevron && (
          <FiChevronLeft
            className={`ml-1 transition-all chevron-hidden group-focus:chevron-show group-hover:chevron-show group-active:-translate-x-1 ${chevronClassName}`}
          />
        )}
      </Link>
    </span>
  );
}
