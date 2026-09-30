"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "porchlight:favorites";

const EMPTY_IDS: number[] = [];
const EMPTY_SET = new Set<number>();

let cache: Set<number> | null = null;
const listeners = new Set<() => void>();

function readStorage(): Set<number> {
    if (cache) return cache;

    let ids: number[] = EMPTY_IDS;
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        const parsed: unknown = raw ? JSON.parse(raw) : null;
        if (Array.isArray(parsed)) {
            ids = parsed.filter((value): value is number => typeof value === "number");
        }
    } catch {
        ids = EMPTY_IDS;
    }

    cache = new Set(ids);
    return cache;
}

function emit() {
    listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
    listeners.add(listener);

    const onStorage = (event: StorageEvent) => {
        if (event.key !== STORAGE_KEY) return;
        cache = null;
        emit();
    };
    window.addEventListener("storage", onStorage);

    return () => {
        listeners.delete(listener);
        window.removeEventListener("storage", onStorage);
    };
}

function commit(next: Set<number>) {
    cache = next;
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
    } catch {
        // Storage unavailable (private mode / quota) — keep in-memory state.
    }
    emit();
}

function getSnapshot() {
    return readStorage();
}

function getServerSnapshot() {
    return EMPTY_SET;
}

export function useFavorites() {
    const favorites = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    const toggle = (id: number) => {
        const next = new Set(readStorage());
        if (next.has(id)) next.delete(id);
        else next.add(id);
        commit(next);
    };

    const isSaved = (id: number) => favorites.has(id);

    return { favorites, count: favorites.size, toggle, isSaved };
}
