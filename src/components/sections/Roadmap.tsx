"use client";

import { motion } from "framer-motion";
import { roadmap } from "@/data/roadmap";
import { Badge } from "@/components/ui/Badge";
import { revealSoft, revealTransition, revealUp, revealViewport } from "@/lib/motion";

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20">
      <div className="section-shell">
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          transition={revealTransition}
          variants={revealSoft}
          viewport={revealViewport}
          whileInView="visible"
        >
          <Badge>Roadmap</Badge>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            Evolução planejada sem perder a base de confiança.
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            O produto avança em ciclos: primeiro segurança e estabilidade, depois
            automações, perfis e recursos para ambientes mais exigentes.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {roadmap.map((item, index) => (
            <motion.article
              className="relative overflow-hidden rounded-lg border border-white/10 bg-slate-900/42 p-6"
              initial="hidden"
              key={item.title}
              transition={{ ...revealTransition, delay: index * 0.045 }}
              variants={revealUp}
              viewport={revealViewport}
              whileInView="visible"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-sky-200">
                  {item.phase}
                </span>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300">
                  {item.status}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
