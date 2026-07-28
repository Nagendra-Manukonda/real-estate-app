import { ReactNode } from "react";

type Tone = "primary" | "secondary" | "danger" | "neutral" | "success";

const TONE_STYLES: Record<Tone, string> = {
    primary: "border border-primary/30 bg-primary text-white shadow-lg shadow-primary/20",
    secondary: "border border-secondary/30 bg-secondary text-white shadow-lg shadow-secondary/20",
    danger: "border border-danger/30 bg-danger text-white shadow-lg shadow-danger/20",
    success: "border border-primary/30 bg-primary text-white shadow-lg shadow-primary/20",
    neutral: "border border-white/20 bg-black/30 text-white backdrop-blur-xl shadow-xl",
};

interface BadgeProps {
    children: ReactNode;
    tone?: Tone;
    className?: string;
}

export default function Badge({ children, tone = "neutral", className = "" }: BadgeProps) {
    return (
        <span
            className={`inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${TONE_STYLES[tone]} ${className}`}
        >
            {children}
        </span>
    );
}