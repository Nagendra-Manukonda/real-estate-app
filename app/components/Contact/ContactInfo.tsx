import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
    return (
        <div>
            <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">Talk to us</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Interested in a deal? Let&apos;s talk.</h2>
            <p className="mt-3 max-w-md text-sm text-ink-soft">
                Tell us which property or deal caught your eye and an agent will follow up, usually within one
                business day.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-ink-soft">
                <span className="flex items-center gap-2"><Mail size={15} /> hello@porchlight.com</span>
                <span className="flex items-center gap-2"><Phone size={15} /> (555) 019-2044</span>
                <span className="flex items-center gap-2"><MapPin size={15} /> 210 Harbor St, Austin, TX</span>
            </div>
        </div>
    );
}
