import type { InputProps, InputDecorationProps } from "@/types/globals.types";

export default function Input({
  children,
  className,
  error,
  value,
  name,
  id,
  onChange,
}: InputProps) {
  return (
    <>
      <div className={`flex ${className}`}>
        <input
          id={id}
          className="flex-1 outline-none border-none px-3 py-2"
          type="text"
          value={value}
          name={name}
          onChange={onChange}
        />
        {children}
      </div>
      {!!error && <span>{error}</span>}
    </>
  );
}

function InputDecoration({ decoration, className }: InputDecorationProps) {
  return <div className={className}>{decoration}</div>;
}

Input.Decoration = InputDecoration;
