"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { revealTransition, revealUp, revealViewport } from "@/lib/motion";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="grid-mask pointer-events-none absolute inset-x-0 top-0 h-[520px]" />
      <div className="section-shell relative grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          transition={revealTransition}
          variants={revealUp}
          viewport={{ ...revealViewport, amount: 0.42 }}
          whileInView="visible"
        >
          <Badge>Versao atual 0.3.4 | Electron + React + PowerShell</Badge>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
            Trixon Optimizer: controle, limpeza e diagnostico inteligente para Windows
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Aplicativo desktop para Windows que centraliza dashboard de saude,
            limpeza segura, inicializacao, otimizacoes reversiveis, rede, DNS,
            backups, logs e diagnostico exportavel.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="https://github.com/viniciusaqueiroz/trixon-optimizer">
              Ver no GitHub
            </Button>
            <Button href="#recursos" variant="ghost">
              Ver recursos
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative hidden lg:block"
          initial="hidden"
          transition={{ ...revealTransition, delay: 0.12 }}
          variants={revealUp}
          viewport={{ ...revealViewport, amount: 0.42 }}
          whileInView="visible"
        >
          <div className="rounded-lg border border-white/10 bg-slate-900/60 p-5 shadow-2xl">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-300/80" />
              </div>
              <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">
                MVP seguro
              </span>
            </div>
            <div className="grid gap-3 text-sm">
              {[
                ["8 paginas", "Dashboard, Limpeza, Rede e mais"],
                ["Backups", "Inicializacao, DNS, energia e otimizacoes"],
                ["QA 0.3.4", "Instalador unsigned para validacao"],
              ].map(([value, label]) => (
                <div
                  className="rounded-md border border-white/10 bg-white/[0.04] p-4"
                  key={value}
                >
                  <p className="text-xl font-semibold text-white">{value}</p>
                  <p className="mt-1 text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
