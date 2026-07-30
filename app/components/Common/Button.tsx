import { ButtonHTMLAttributes } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "brass";

const VARIANT_STYLES: Record<Variant, string> = {
  primary: `
    bg-primary text-white border border-primary shadow-sm
    hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5
  `,
  secondary: `
    bg-secondary text-white border border-secondary shadow-sm
    hover:bg-secondary/90 hover:shadow-lg hover:-translate-y-0.5
  `,
  brass: `
    bg-secondary text-white border border-secondary shadow-sm
    hover:bg-secondary/90 hover:shadow-lg hover:-translate-y-0.5
  `,
  outline: `
    bg-panel text-ink border border-line
    hover:border-primary hover:text-primary hover:bg-primary/5
  `,
  ghost: `
    bg-transparent text-ink-soft
    hover:bg-surface hover:text-primary
  `,
  danger: `
    bg-danger text-white border border-danger
    hover:bg-danger/90 hover:-translate-y-0.5
  `,
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full px-6 py-3
        text-sm font-semibold
        transition-all duration-300 ease-out cursor-pointer
        disabled:cursor-not-allowed disabled:opacity-50
        focus:outline-none focus:ring-2 focus:ring-primary/30
        ${VARIANT_STYLES[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}