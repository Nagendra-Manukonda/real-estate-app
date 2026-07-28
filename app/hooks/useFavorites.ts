"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "porchlight:favorites";

export function useFavorites() {
    const [favorites, setFavorites] = useState<Set<number>>(new Set());
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        try {
            const raw = window.localStorage.getItem(STORAGE_KEY);
            if (raw) setFavorites(new Set(JSON.parse(raw)));
        } catch {
        } finally {
            setHydrated(true);
        }
    }, []);

    useEffect(() => {
        if (!hydrated) return;
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...favorites]));
    }, [favorites, hydrated]);

    const toggle = (id: number) => {
        setFavorites((prev) => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    };

    const isSaved = (id: number) => favorites.has(id);

    return { favorites, count: favorites.size, toggle, isSaved };
}