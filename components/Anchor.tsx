import { DetailedHTMLProps, AnchorHTMLAttributes, ReactNode } from "react";
import { FiChevronLeft } from "react-icons/fi";
import Link, { LinkProps } from "next/link";

interface BaseAnchorProps {
  chevron?: boolean;
  children?: ReactNode;
  className?: string;
}

interface AnchorNextProps extends Omit<LinkProps, "children" | "className"> {
  nextLink: true;
}

interface AnchorElementProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  nextLink?: false;
}

type AnchorProps = (AnchorNextProps | AnchorElementProps) & BaseAnchorProps;

export default function Anchor({
  children,
  className,
  chevron = true,
  nextLink = true,
  ...otherProps
}: AnchorProps) {
  const InnerComponents = () => (
    <>
      {children}
      {chevron && (
        <FiChevronLeft className="ml-1 transition-all chevron-hidden group-hover:chevron-show group-active:-translate-x-1" />
      )}
    </>
  );
  const linkClassName =
    "uppercase underline font-extrabold py-3 group inline-flex items-center transition-all active:underline-offset-1";

  if (nextLink) {
    return (
      <span className={className}>
        <Link
          className={linkClassName}
          {...(otherProps as Omit<AnchorNextProps, "nextLink">)}
        >
          <InnerComponents />
        </Link>
      </span>
    );
  } else {
    return (
      <span className={className}>
        <a
          className={linkClassName}
          {...(otherProps as Omit<AnchorElementProps, "nextLink">)}
        >
          <InnerComponents />
        </a>
      </span>
    );
  }
}
