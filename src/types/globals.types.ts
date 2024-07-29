import type { ReactNode } from "react";

export interface Children {
  children: ReactNode;
}

export interface ButtonProps {
  onClick: () => void;
  className?: string;
  title: string;
  children?: ReactNode | undefined;
}

export interface ButtonIconProps {
  icon: string;
}

export interface InputProps {
  id: string;
  value: string;
  name: string;
  error?: string;
  className: string;
  children?: ReactNode | undefined;
  onChange: () => void;
}

export interface InputDecorationProps {
  className: string;
  decoration: string;
}
