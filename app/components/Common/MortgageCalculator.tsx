"use client";

import { useState } from "react";
import { formatPrice } from "@/app/lib/formatPrice";
import { inputClass } from "@/app/lib/styles";

const fieldClass = `${inputClass} shadow-sm font-mono`;
const selectClass = `${inputClass} shadow-sm cursor-pointer`;

export default function MortgageCalculator() {
    const [price, setPrice] = useState(450000);
    const [downPct, setDownPct] = useState(20);
    const [rate, setRate] = useState(6.5);
    const [years, setYears] = useState(30);

    const loanAmount = price * (1 - downPct / 100);
    const monthlyRate = rate / 100 / 12;
    const numPayments = years * 12;

    const monthlyPayment =
        monthlyRate === 0
            ? loanAmount / numPayments
            : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
            (Math.pow(1 + monthlyRate, numPayments) - 1);

    return (
        <div className="grid gap-5 rounded-3xl border border-line bg-panel p-5 shadow-sm transition-all duration-300 md:grid-cols-[1fr_280px]">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-ink-soft">
                    Home Price
                    <input
                        type="number"
                        min={0}
                        value={price}
                        onChange={(e) => setPrice(Math.max(0, Number(e.target.value) || 0))}
                        className={fieldClass}
                    />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-ink-soft">
                    Down Payment ({downPct}%)
                    <input
                        type="range"
                        min={0}
                        max={50}
                        value={downPct}
                        onChange={(e) => setDownPct(Number(e.target.value))}
                        className="mt-2 h-2 w-full cursor-pointer accent-primary"
                    />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-ink-soft">
                    Interest Rate (%)
                    <input
                        type="number"
                        step={0.1}
                        min={0}
                        max={100}
                        value={rate}
                        onChange={(e) => setRate(Math.min(100, Math.max(0, Number(e.target.value) || 0)))}
                        className={fieldClass}
                    />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-ink-soft">
                    Loan Term
                    <select
                        value={years}
                        onChange={(e) => setYears(Number(e.target.value))}
                        className={selectClass}
                    >
                        <option value={15}>15 Years</option>
                        <option value={30}>30 Years</option>
                    </select>
                </label>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-surface p-5 md:bg-transparent md:p-0 md:pl-6 md:border-l md:border-line">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-ink-soft">
                    Estimated Monthly Payment
                </span>

                <span className="mt-2 font-display text-4xl font-bold text-primary">
                    {formatPrice(Math.round(monthlyPayment))}
                    <span className="ml-2 text-base font-medium text-ink-soft">/month</span>
                </span>

                <span className="mt-3 text-sm leading-6 text-ink-soft">
                    Loan Amount: <span className="font-semibold text-ink">{formatPrice(Math.round(loanAmount))}</span>
                </span>

                <span className="text-sm text-ink-soft">Principal &amp; Interest only</span>
            </div>
        </div>
    );
}