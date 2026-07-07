import { ButtonHTMLAttributes } from "react";

type Variant = "dark" | "outline" | "brass";

const VARIANT_STYLES: Record<Variant, string> = {
    dark: "bg-ink text-paper hover:bg-ink/90",
    outline: "border border-line text-ink hover:border-brass bg-transparent",
    brass: "bg-brass text-ink hover:bg-brass/90",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
}

export default function Button({ variant = "dark", className = "", ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${VARIANT_STYLES[variant]} ${className}`}
        />
    );
}
