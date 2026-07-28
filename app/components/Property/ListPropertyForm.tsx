"use client";

import { useState } from "react";
import { UploadCloud } from "lucide-react";
import { TYPES } from "@/app/lib/constants";

export default function ListPropertyForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In production this would POST to /api/listings for review.
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="rounded-3xl border border-line bg-panel p-8 text-center shadow-sm">
                <p className="text-sm font-semibold text-primary">
                    Thanks — your listing has been submitted for review. We&apos;ll reach out within 1 business day.
                </p>
            </div>
        );
    }

    const inputClass = "rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink shadow-sm outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20";
    const labelClass = "flex flex-col gap-2 text-xs font-semibold uppercase tracking-wide text-ink-soft";

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 rounded-3xl border border-line bg-panel p-6 shadow-sm sm:grid-cols-2 md:p-8">
            <label className={labelClass}>Property title
                <input required placeholder="e.g. Maple Ridge Loft" className={inputClass} />
            </label>
            <label className={labelClass}>Price ($) / City
                <div className="grid grid-cols-2 gap-3">
                    <input required type="number" min={0} placeholder="450000" className={inputClass} />
                    <input required placeholder="Austin" className={inputClass} />
                </div>
            </label>

            <label className={labelClass}>Property type
                <select required defaultValue="" className={inputClass}>
                    <option value="" disabled>Select property type</option>
                    {TYPES.map((t) => <option key={t}>{t}</option>)}
                </select>
            </label>
            <div className={labelClass}>
                Bedrooms / Bathrooms
                <div className="grid grid-cols-2 gap-3">
                    <input required type="number" min={0} placeholder="3" className={inputClass} />
                    <input required type="number" min={0} placeholder="2" className={inputClass} />
                </div>
            </div>

            <label className={labelClass}>Area (sqft)
                <input required type="number" min={0} placeholder="1800" className={inputClass} />
            </label>
            <label className={labelClass}>Contact email
                <input required type="email" placeholder="you@example.com" className={inputClass} />
            </label>

            <label className={`${labelClass} sm:col-span-2`}>Description
                <textarea rows={4} placeholder="Tell buyers what makes this place special…" className={inputClass} />
            </label>

            <div className="sm:col-span-2">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-soft">Property images</p>
                <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-line bg-surface px-6 py-10 text-center">
                    <UploadCloud className="h-6 w-6 text-primary" />
                    <p className="text-sm font-semibold text-primary">Upload Property Images</p>
                    <p className="text-xs text-ink-soft">PNG, JPG up to 10MB</p>
                </div>
            </div>

            <button type="submit" className="sm:col-span-2 w-fit rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-hover hover:-translate-y-0.5">
                Submit Listing
            </button>
        </form>
    );
}