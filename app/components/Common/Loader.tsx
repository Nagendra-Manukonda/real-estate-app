export default function Loader({ label = "Loading properties…" }: { label?: string }) {
    return (
        <div className="flex flex-col items-center justify-center gap-3 py-20 text-ink-soft">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-brass" />
            <p className="text-xs">{label}</p>
        </div>
    );
}
