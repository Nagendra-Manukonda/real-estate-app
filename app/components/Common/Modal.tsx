"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";

export default function Modal({
    open,
    onClose,
    children,
}: {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-4" onClick={onClose}>
            <div
                className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-card bg-panel p-5"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-line bg-panel"
                >
                    <X size={14} />
                </button>
                {children}
            </div>
        </div>
    );
}
