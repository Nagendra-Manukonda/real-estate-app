import { ReactNode } from "react";

export default function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
    return <div className={`rounded-card border border-line bg-panel ${className}`}>{children}</div>;
}
