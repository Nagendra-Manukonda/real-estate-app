"use client";

import { useState } from "react";
import Button from "@/app/components/Common/Button";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In production this would POST to /api/contact or a lead-gen endpoint.
        setSubmitted(true);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 rounded-card border border-line bg-white p-6">
            {submitted ? (
                <p className="text-sm font-medium text-sage">
                    Thanks — we&apos;ve got your message and an agent will reach out shortly.
                </p>
            ) : (
                <>
                    <div className="grid gap-3 sm:grid-cols-2">
                        <input required placeholder="Full name" className="rounded-md border border-line px-3 py-2 text-sm outline-none focus:border-brass" />
                        <input required type="email" placeholder="Email" className="rounded-md border border-line px-3 py-2 text-sm outline-none focus:border-brass" />
                    </div>
                    <input placeholder="Property or deal you're interested in" className="rounded-md border border-line px-3 py-2 text-sm outline-none focus:border-brass" />
                    <textarea
                        required
                        rows={4}
                        placeholder="Tell us a bit about what you're looking for"
                        className="rounded-md border border-line px-3 py-2 text-sm outline-none focus:border-brass"
                    />
                    <Button type="submit" className="mt-1 self-start">Send message</Button>
                </>
            )}
        </form>
    );
}
