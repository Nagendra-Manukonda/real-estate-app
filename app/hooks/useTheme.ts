"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "porchlight:theme";

export function useTheme() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved === "dark") setDark(true);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        window.localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
    }, [dark]);

    return { dark, toggle: () => setDark((d) => !d) };
}