"use client";

import { motion } from "framer-motion";
import { CheckCircle2, LockKeyhole, Shield } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { revealLeft, revealSoft, revealTransition, revealViewport } from "@/lib/motion";

const points = [
  "Confirmacoes antes de acoes que alteram Windows, caches, inicializacao ou energia",
  "Backups para inicializacao, DNS, otimizacoes e planos de energia",
  "Renderer React sem execucao direta de PowerShell",
  "Electron main process chamando apenas scripts allowlisted",
  "Limpezas sensiveis como opt-in, desmarcadas por padrao",
];

export function Security() {
  return (
    <section id="seguranca" className="py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <motion.div
          initial="hidden"
          transition={revealTransition}
          variants={revealSoft}
          viewport={revealViewport}
          whileInView="visible"
        >
          <Badge>Seguranca e transparencia</Badge>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            Otimizacao responsavel com contexto antes da acao.
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            A arquitetura documentada usa Electron, preload seguro, IPC controlado
            e scripts PowerShell permitidos por lista. Acoes administrativas sao
            sinalizadas ou bloqueadas quando o app nao esta elevado.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          transition={{ ...revealTransition, delay: 0.08 }}
          variants={revealLeft}
          viewport={revealViewport}
          whileInView="visible"
        >
          <Card className="p-6 md:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-300/12 text-emerald-200">
              <Shield aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-slate-400">Modelo operacional</p>
              <h3 className="text-lg font-semibold text-white">
                Controle explicito para operacoes sensiveis
              </h3>
            </div>
          </div>

          <div className="mt-7 grid gap-3">
            {points.map((point, index) => (
              <motion.div
                className="flex items-center gap-3 rounded-md border border-white/8 bg-white/[0.03] p-3 text-sm text-slate-200"
                initial="hidden"
                key={point}
                transition={{ ...revealTransition, duration: 0.52, delay: index * 0.055 }}
                variants={revealLeft}
                viewport={revealViewport}
                whileInView="visible"
              >
                <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 text-emerald-300" />
                {point}
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-md border border-sky-300/14 bg-sky-300/[0.055] p-4">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-sky-200" />
            <p className="text-sm leading-6 text-slate-300">
              A build 0.3.4 possui instalador unsigned para QA e validacao. A
              distribuicao publica documentada depende de assinatura de codigo,
              checksum, notas de versao e checklist em maquina limpa.
            </p>
          </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
