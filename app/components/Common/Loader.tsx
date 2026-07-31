import { Home } from "lucide-react";

interface LoaderProps {
    label?: string;
}

export default function Loader({ label = "Loading properties..." }: LoaderProps) {
    return (
        <div className="flex min-h-80 flex-col items-center justify-center gap-6 rounded-3xl border border-line bg-panel p-10 transition-colors duration-300">
            <div className="relative flex items-center justify-center">
                <div className="h-16 w-16 animate-spin rounded-full border-[3px] border-line border-t-primary" />
                <div className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Home className="h-5 w-5 text-primary" />
                </div>
            </div>
            <div className="text-center">
                <h3 className="font-display text-xl font-semibold text-ink">Please wait</h3>
                <p className="mt-2 text-sm text-ink-soft">{label}</p>
            </div>
        </div>
    );
}