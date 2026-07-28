import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
    return (
        <div
            className={`
        rounded-3xl border border-line bg-panel shadow-sm
        transition-all duration-300 ease-out
        ${hover ? "hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl" : ""}
        ${className}
      `}
        >
            {children}
        </div>
    );
}