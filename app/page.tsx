"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar/Navbar";
import Hero from "@/app/components/Hero/Hero";
import ProSection from "@/app/components/Pro/ProSection";
import FeaturedDeals from "@/app/components/Deals/FeaturedDeals";
import PropertyGrid from "@/app/components/Property/PropertyGrid";
import About from "@/app/components/About/About";
import ContactInfo from "@/app/components/Contact/ContactInfo";
import ContactForm from "@/app/components/Contact/ContactForm";
import Footer from "@/app/components/Footer/Footer";
import { useProperties } from "@/app/hooks/useProperties";

export default function Home() {
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const {
    properties, total, loading, filters, setFilters, rawSearch, setRawSearch,
    resetFilters, count, isSaved, toggle,
  } = useProperties(showSavedOnly);

  return (
    <>
      <Navbar
        search={rawSearch}
        onSearchChange={setRawSearch}
        savedCount={count}
        showSavedOnly={showSavedOnly}
        onToggleSavedOnly={() => setShowSavedOnly((v) => !v)}
      />
      <Hero />
      <ProSection />
      <FeaturedDeals />
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
      <section id="contact" className="border-t border-line bg-panel">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-14 md:grid-cols-2 md:px-6">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <Footer />
    </>
  );
}