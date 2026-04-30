import { Download2 } from "@/components/landing/Download2";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import HeroSection from "@/components/landing/HeroSection";
import React from "react";
import { useAppContext } from "@/context/AppContext";
import { translations } from "@/lib/translations";

export default function LandingPage() {
  const { lang } = useAppContext();
  const t = translations[lang].footer;

  return (
    <>
      <HeroSection />
      <FeaturesGrid />
      <Download2 />
      
      <footer className="py-12 border-t bg-card text-center">
        <div className="container mx-auto px-6">
          <div className="text-2xl font-bold text-primary mb-4">FixPay</div>
          <p className="text-muted-foreground text-sm">
            {t.rights}
          </p>
        </div>
      </footer>
    </>
  );
}
