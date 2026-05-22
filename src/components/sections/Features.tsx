"use client";

import { motion } from "framer-motion";
import { features } from "@/data/features";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function Features() {
  return (
    <section id="recursos" className="py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <Badge>Recursos principais</Badge>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            Ferramentas uteis, explicitas e pensadas para rotina real.
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Cada recurso foi desenhado para ajudar o usuario a entender o estado
            do Windows antes de executar ajustes.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                key={feature.title}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                viewport={{ once: true, margin: "-80px" }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Card className="h-full p-5 transition hover:border-sky-300/30 hover:bg-sky-300/[0.045]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md border border-sky-300/20 bg-sky-300/10 text-sky-200">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
