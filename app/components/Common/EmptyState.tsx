export default function EmptyState({ message }: { message: string }) {
    return (
        <div className="col-span-full rounded-card border border-dashed border-line py-16 text-center text-sm text-ink-soft">
            {message}
        </div>
    );
}
