import Image from "next/image";
import type { ButtonProps, ButtonIconProps } from "@/types/globals.types";

export default function Button({
  children,
  className,
  title,
  onClick,
}: ButtonProps) {
  console.log(className);
  return (
    <button
      className={`flex justify-center items-center gap-2 px-6 py-2 ${className}`}
      onClick={onClick}
    >
      {children}

      <span>{title}</span>
    </button>
  );
}

function ButtonIcon({ icon }: ButtonIconProps) {
  return <Image src={icon} width={20} height={20} alt="icon" />;
}

Button.Icon = ButtonIcon;
