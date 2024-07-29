import Image from "next/image";
import type { ButtonProps, ButtonIconProps } from "@/types/globals.types";

export default function Button({
  children,
  className,
  title,
  onClick,
}: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      <span className="text-center">{title}</span>
      {children}
    </button>
  );
}

function ButtonIcon({ icon }: ButtonIconProps) {
  return <Image src={icon} width={20} height={20} alt="icon" />;
}

Button.Icon = ButtonIcon;
