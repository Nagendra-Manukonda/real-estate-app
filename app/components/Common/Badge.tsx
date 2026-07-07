import { ReactNode } from "react";

type Tone = "ink" | "brass" | "brick";

const TONE_STYLES: Record<Tone, string> = {
    ink: "bg-ink/80 text-white",
    brass: "bg-brass text-ink",
    brick: "bg-brick text-white",
};

export default function Badge({
    children,
    tone = "ink",
    className = "",
}: {
    children: ReactNode;
    tone?: Tone;
    className?: string;
}) {
    return (
        <span className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-semibold ${TONE_STYLES[tone]} ${className}`}>
            {children}
        </span>
    );
}
