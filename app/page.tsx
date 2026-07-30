"use client";

import { useState } from "react";

import Navbar from "@/app/components/Navbar/Navbar";
import Hero from "@/app/components/Hero/Hero";
import FeaturedDeals from "@/app/components/Deals/FeaturedDeals";
import PropertyGrid from "@/app/components/Property/PropertyGrid";
import About from "@/app/components/About/About";
import ProSection from "@/app/components/Pro/ProSection";
import MortgageCalculator from "./components/Common/MortgageCalculator";
import ContactInfo from "@/app/components/Contact/ContactInfo";
import ContactForm from "@/app/components/Contact/ContactForm";
import ListPropertyForm from "./components/Property/ListPropertyForm";
import Testimonials from "./components/Common/Testimonials";
import Footer from "@/app/components/Footer/Footer";

import { useProperties } from "@/app/hooks/useProperties";

export default function Home() {
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  const {
    properties,
    total,
    loading,
    filters,
    setFilters,
    rawSearch,
    setRawSearch,
    resetFilters,
    count,
    isSaved,
    toggle,
  } = useProperties(showSavedOnly);

  return (
    <main className="min-h-screen bg-paper text-ink transition-colors duration-300">
      <Navbar
        search={rawSearch}
        onSearchChange={setRawSearch}
        savedCount={count}
        showSavedOnly={showSavedOnly}
        onToggleSavedOnly={() => setShowSavedOnly((value) => !value)}
      />

      <Hero />
      <FeaturedDeals />
      <ProSection />
      <PropertyGrid
        properties={properties}
        total={total}
        loading={loading}
        showSavedOnly={showSavedOnly}
        filters={filters}
        setFilters={setFilters}
        resetFilters={resetFilters}
        isSaved={isSaved}
        toggle={toggle}
      />

      <About />

      <section id="mortgage" className="border-t border-line bg-surface py-20 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-8 font-display text-4xl font-bold text-ink">Mortgage Calculator</h2>
          <MortgageCalculator />
        </div>
      </section>

      <section id="contact" className="border-t border-line bg-paper py-20 transition-colors duration-300">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 md:grid-cols-2 md:px-6">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <section id="list-property" className="border-t border-line bg-surface py-20 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-8 font-display text-4xl font-bold text-ink">List Your Property</h2>
          <ListPropertyForm />
        </div>
      </section>

      <Testimonials />
      <Footer />
    </main>
  );
}