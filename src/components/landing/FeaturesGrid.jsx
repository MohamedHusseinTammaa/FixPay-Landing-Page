import React from "react";
import { useAppContext } from "@/context/AppContext";
import { translations } from "@/lib/translations";
import { motion } from "framer-motion";

export default function FeaturesGrid() {
  const { lang } = useAppContext();
  const t = translations[lang].features;

  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(21,72,67,0.03)_0%,transparent_70%)] -z-10" />
      
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase bg-primary/10 px-3 py-1 rounded-full">
            {t.badge}
          </span>
          <h2 className="text-balance font-serif text-4xl font-medium mt-4 mb-6">
            {t.title}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.list.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl bg-card border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="size-14 rounded-2xl bg-primary/5 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
