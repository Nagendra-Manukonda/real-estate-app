"use client";

import { useState } from "react";
import Button from "@/app/components/Common/Button";
import { inputClass } from "@/app/lib/styles";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-3xl border border-line bg-panel p-6 shadow-sm md:p-8">
            <h3 className="font-display text-lg font-semibold text-ink">Get in touch</h3>
            <p className="-mt-2 text-xs text-ink-soft">Need assistance? We&apos;d love to hear from you.</p>
            {submitted ? (
                <p className="text-sm font-medium text-primary" role="status">Thanks — we&apos;ve got your message and will reach out shortly.</p>
            ) : (
                <>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <label className="flex flex-col gap-1">
                            <span className="sr-only">Full name</span>
                            <input required autoComplete="name" placeholder="Full Name" className={inputClass} />
                        </label>
                        <label className="flex flex-col gap-1">
                            <span className="sr-only">Email address</span>
                            <input required type="email" autoComplete="email" placeholder="Email Address" className={inputClass} />
                        </label>
                    </div>
                    <label className="flex flex-col gap-1">
                        <span className="sr-only">Message</span>
                        <textarea required rows={4} placeholder="How can we help?" className={inputClass} />
                    </label>
                    <Button type="submit" className="self-start">Send Message</Button>
                </>
            )}
        </form>
    );
}