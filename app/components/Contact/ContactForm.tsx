"use client";

import { useState } from "react";
import Button from "@/app/components/Common/Button";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const inputClass = "rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-3xl border border-line bg-panel p-6 shadow-sm md:p-8">
            <h3 className="font-display text-lg font-semibold text-ink">Get in touch</h3>
            <p className="-mt-2 text-xs text-ink-soft">Need assistance? We&apos;d love to hear from you.</p>
            {submitted ? (
                <p className="text-sm font-medium text-primary">Thanks — we&apos;ve got your message and will reach out shortly.</p>
            ) : (
                <>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <input required placeholder="Full Name" className={inputClass} />
                        <input required type="email" placeholder="Email Address" className={inputClass} />
                    </div>
                    <textarea required rows={4} placeholder="How can we help?" className={inputClass} />
                    <Button type="submit" className="self-start">Send Message</Button>
                </>
            )}
        </form>
    );
}