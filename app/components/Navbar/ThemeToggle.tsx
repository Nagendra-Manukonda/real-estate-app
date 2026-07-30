"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <div className="h-9 w-9 shrink-0 rounded-full border border-line bg-panel" />;
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle dark mode"
            className="flex h-9 w-9 shrink-0 items-center cursor-pointer justify-center rounded-full border border-line bg-panel text-ink-soft transition-colors hover:border-primary hover:text-primary"
        >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
    );
}