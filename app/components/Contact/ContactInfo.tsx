import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
    return (
        <div>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Contact Us
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink">
                Let&apos;s find your <span className="text-primary">perfect property.</span>
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-ink-soft">
                Whether you&apos;re buying your first home, searching for an investment, or simply have
                questions about one of our listings, our experienced property specialists are here to help.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-ink-soft">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary"><Mail size={15} /></span>
                <a href="mailto:hello@porchlight.com.au" className="font-medium text-ink hover:text-primary">hello@porchlight.com.au</a>
            </div>
            <div className="mt-3 flex items-center gap-3 text-sm text-ink-soft">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary"><Phone size={15} /></span>
                +61 2 9876 5432
            </div>
            <div className="mt-3 flex items-center gap-3 text-sm text-ink-soft">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary"><MapPin size={15} /></span>
                Level 12, 123 George Street, Sydney NSW 2000
            </div>
        </div>
    );
}