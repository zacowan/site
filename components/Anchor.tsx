import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";
import { FiChevronLeft } from "react-icons/fi";

interface AnchorProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  chevron?: boolean;
}

export default function Anchor({
  children,
  className,
  chevron = true,
  ...otherProps
}: AnchorProps) {
  return (
    <span className={className}>
      <a
        className={`uppercase underline font-extrabold py-3 group inline-flex items-center transition-all active:underline-offset-1`}
        {...otherProps}
      >
        {children}
        {chevron && (
          <FiChevronLeft className="ml-1 transition-all chevron-hidden group-hover:chevron-show group-active:-translate-x-1" />
        )}
      </a>
    </span>
  );
}
