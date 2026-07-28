"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
    if (!open) return null;

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-5 animate-in fade-in duration-300"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-line bg-panel shadow-2xl p-8 animate-in zoom-in-95 duration-300"
            >
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink-soft transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:rotate-90"
                >
                    <X size={18} />
                </button>
                {children}
            </div>
        </div>
    );
}