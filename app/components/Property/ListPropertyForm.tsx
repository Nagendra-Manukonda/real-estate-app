"use client";

import { useState } from "react";
import { UploadCloud } from "lucide-react";
import { TYPES } from "@/app/lib/constants";
import { inputClass as baseInputClass } from "@/app/lib/styles";

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

    const inputClass = `${baseInputClass} shadow-sm`;
    const labelClass = "flex flex-col gap-2 text-xs font-semibold uppercase tracking-wide text-ink-soft";

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 rounded-3xl border border-line bg-panel p-6 shadow-sm sm:grid-cols-2 md:p-8">
            <label className={labelClass}>Property title
                <input required placeholder="e.g. Maple Ridge Loft" className={inputClass} />
            </label>

            <div className={labelClass}>
                Price ($) / City
                <div className="grid grid-cols-2 gap-3">
                    <label className="flex flex-col gap-2">
                        <span className="sr-only">Price in dollars</span>
                        <input required type="number" min={0} placeholder="450000" className={inputClass} />
                    </label>
                    <label className="flex flex-col gap-2">
                        <span className="sr-only">City</span>
                        <input required placeholder="Austin" className={inputClass} />
                    </label>
                </div>
            </div>

            <label className={labelClass}>Property type
                <select required defaultValue="" className={`${inputClass} cursor-pointer`}>
                    <option value="" disabled>Select property type</option>
                    {TYPES.map((t) => <option key={t}>{t}</option>)}
                </select>
            </label>

            <div className={labelClass}>
                Bedrooms / Bathrooms
                <div className="grid grid-cols-2 gap-3">
                    <label className="flex flex-col gap-2">
                        <span className="sr-only">Bedrooms</span>
                        <input required type="number" min={0} placeholder="3" className={inputClass} />
                    </label>
                    <label className="flex flex-col gap-2">
                        <span className="sr-only">Bathrooms</span>
                        <input required type="number" min={0} placeholder="2" className={inputClass} />
                    </label>
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
                <label className="flex flex-col cursor-pointer items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-line bg-surface px-6 py-10 text-center focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                    <input type="file" accept="image/png,image/jpeg" multiple className="sr-only" />
                    <UploadCloud className="h-6 w-6  text-primary" aria-hidden="true" />
                    <span className="text-sm font-semibold text-primary">Upload Property Images</span>
                    <span className="text-xs text-ink-soft">PNG, JPG up to 10MB</span>
                </label>
            </div>

            <button type="submit" className="sm:col-span-2 w-fit rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-green-800 cursor-pointer hover:-translate-y-0.5">
                Submit Listing
            </button>
        </form>
    );
}