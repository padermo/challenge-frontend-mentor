import type { ReactNode } from "react";

export interface Children {
  children: ReactNode;
}

export interface ButtonProps extends Children {
  onClick: () => void;
  className?: string;
  title: string;
}

export interface ButtonIconProps {
  icon: string;
}
