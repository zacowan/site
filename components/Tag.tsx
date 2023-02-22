import { ComponentPropsWithoutRef } from "react";

interface TagProps extends ComponentPropsWithoutRef<"span"> {}

export default function Tag({ children, className, ...otherProps }: TagProps) {
  return (
    <span
      className={`bg-neutral-800 px-3 py-1 text-xs text-neutral-300 uppercase ${className}`}
      {...otherProps}
    >
      {children}
    </span>
  );
}
