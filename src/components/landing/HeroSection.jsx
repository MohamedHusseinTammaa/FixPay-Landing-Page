import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion"; 
import { HeroHeader } from "../layout/header";
import { PhoneMockup } from "./download";
import { useAppContext } from "@/context/AppContext";
import { translations } from "@/lib/translations";

export default function HeroSection() {
  const containerRef = useRef(null);
  const { lang } = useAppContext();
  const t = translations[lang].hero;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateLeft = useTransform(scrollYProgress, [0, 0.4], [-45, 0]);
  const rotateRight = useTransform(scrollYProgress, [0, 0.4], [45, 0]);
  const xLeft = useTransform(scrollYProgress, [0, 1], [100, -340]);
  const xRight = useTransform(scrollYProgress, [0, 1], [-100, 340]);
  const ySide = useTransform(scrollYProgress, [0, 0.4], [60, 0]);

  const imageUrl = "/images/p1.png";
  const imageUrl2 = "/images/p2.png";
  const imageUrl3 = "/images/p3.png";

  return (
    <>
      <HeroHeader />

      <main className="mb-20">
        <section
          ref={containerRef}
          className="relative bg-background pt-32 md:pt-44 overflow-hidden"
        >
          {/* Background Image */}
          <div className="mask-radial-from-45% mask-radial-to-75% mask-radial-at-top mask-radial-[75%_100%] mask-t-from-50% lg:aspect-9/4 absolute inset-0 aspect-square lg:top-24 dark:opacity-5 -z-10">
            <img
              src={imageUrl}
              alt="hero background"
              className="size-full object-cover object-top"
            />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {t.badge}
              </div>
              <h1 className="text-balance font-serif text-4xl font-medium sm:text-5xl lg:text-6xl tracking-tight leading-tight">
                {t.title}
              </h1>
              <p className="text-muted-foreground mt-6 text-balance text-lg max-w-xl mx-auto">
                {t.desc}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild className="w-full sm:w-auto px-8 py-7 rounded-full text-lg shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                  <a href="#download">
                    <span className="text-nowrap">{t.workBtn}</span>
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto px-8 py-7 rounded-full text-lg border-2 transition-all hover:bg-primary/5 hover:scale-105 active:scale-95">
                  <a href="#download">
                    <span className="text-nowrap">{t.hireBtn}</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* THE ANIMATED PHONES */}
            <div className="relative mt-24 md:mt-15 flex justify-center items-center h-[600px] w-full">
              {/* Left Phone */}
              <motion.div
                style={{
                  rotate: rotateLeft,
                  x: xLeft,
                  y: ySide,
                  zIndex: 10,
                }}
                className="absolute"
              >
                <div className="relative">
                  <PhoneMockup
                    containerClassName="w-64 sm:w-72"
                    screenImage={imageUrl}
                  />
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-card/80 backdrop-blur border px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap shadow-xl">
                    {t.phone1}
                  </div>
                </div>
              </motion.div>

              {/* Center Phone */}
              <motion.div style={{ zIndex: 20 }} className="absolute">
                <div className="relative scale-110">
                  <PhoneMockup
                    containerClassName="w-64 sm:w-72"
                    screenImage={imageUrl2}
                  />
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap shadow-2xl">
                    {t.phone2}
                  </div>
                </div>
              </motion.div>

              {/* Right Phone */}
              <motion.div
                style={{
                  rotate: rotateRight,
                  x: xRight,
                  y: ySide,
                  zIndex: 10,
                }}
                className="absolute"
              >
                <div className="relative">
                  <PhoneMockup
                    containerClassName="w-64 sm:w-72"
                    screenImage={imageUrl3}
                  />
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-card/80 backdrop-blur border px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap shadow-xl">
                    {t.phone3}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}