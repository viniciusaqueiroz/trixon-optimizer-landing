"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { revealTransition, revealUp, revealViewport } from "@/lib/motion";

export function CTA() {
  return (
    <section id="lista" className="py-20">
      <div className="section-shell">
        <motion.div
          className="overflow-hidden rounded-lg border border-sky-300/18 bg-[linear-gradient(135deg,rgba(14,165,233,0.16),rgba(15,23,42,0.86)_45%,rgba(52,211,153,0.13))] p-8 shadow-[0_30px_120px_rgba(2,6,23,0.65)] md:p-12"
          initial="hidden"
          transition={revealTransition}
          variants={revealUp}
          viewport={revealViewport}
          whileInView="visible"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
              Repositório público
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
              Veja o projeto, o roadmap e a build 0.3.4.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-slate-300">
              O GitHub concentra README, páginas do sistema, estratégia de
              distribuição Windows, checklist de QA, changelog e download atual
              para validação interna.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="https://github.com/viniciusaqueiroz/trixon-optimizer">
                Abrir repositório
              </Button>
              <Button
                href="https://github.com/viniciusaqueiroz/trixon-optimizer/blob/main/downloads/README.md"
                variant="secondary"
              >
                Ver download QA
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
