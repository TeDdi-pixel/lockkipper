import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
};

export const Text = ({ children, tag = "p", className }: Props) => {
  const Tag = tag;

  return <Tag className={className}>{children}</Tag>;
};
