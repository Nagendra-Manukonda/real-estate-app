import { SearchX } from "lucide-react";

interface EmptyStateProps {
    message: string;
}

export default function EmptyState({ message }: EmptyStateProps) {
    return (
        <div className="col-span-full flex flex-col items-center justify-center rounded-3xl border border-dashed border-line bg-panel px-8 py-20 text-center shadow-sm transition-all duration-300">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <SearchX className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-ink">Nothing Found</h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-ink-soft">{message}</p>
        </div>
    );
}