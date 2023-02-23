import { ComponentPropsWithoutRef, ReactNode } from "react";
import { FiChevronLeft } from "react-icons/fi";
import Link, { LinkProps } from "next/link";

interface BaseAnchorProps {
  children?: ReactNode;
  chevron?: boolean;
  className?: string;
  chevronClassName?: string;
}

interface NextAnchorProps extends LinkProps {
  useTag?: false;
}

interface TagAnchorProps extends ComponentPropsWithoutRef<"a"> {
  useTag: true;
}

type AnchorProps = BaseAnchorProps & (NextAnchorProps | TagAnchorProps);

const linkClassName =
  "uppercase underline font-extrabold py-3 group inline-flex items-center transition-all active:underline-offset-1";

export default function Anchor({
  children,
  className,
  chevron = true,
  chevronClassName,
  useTag = false,
  ...otherProps
}: AnchorProps) {
  const InnerComponents = () => (
    <>
      {children}
      {chevron && (
        <FiChevronLeft
          className={`ml-1 transition-all chevron-hidden group-focus:chevron-show group-hover:chevron-show group-active:-translate-x-1 ${chevronClassName}`}
        />
      )}
    </>
  );

  if (!useTag) {
    return (
      <span className={className}>
        <Link className={linkClassName} {...(otherProps as LinkProps)}>
          <InnerComponents />
        </Link>
      </span>
    );
  } else {
    return (
      <span className={className}>
        <a
          className={linkClassName}
          {...(otherProps as ComponentPropsWithoutRef<"a">)}
        >
          <InnerComponents />
        </a>
      </span>
    );
  }
}
