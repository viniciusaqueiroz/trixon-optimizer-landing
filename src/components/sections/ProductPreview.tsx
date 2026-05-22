"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { assetPath } from "@/lib/assets";

export function ProductPreview() {
  return (
    <section className="py-10 md:py-16" aria-label="Preview do aplicativo">
      <div className="section-shell">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.6 }}
        >
          <Badge>Screenshot oficial do app</Badge>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            A dashboard real do Trixon Optimizer 0.3.4.
          </h2>
          <p className="mt-4 text-slate-300">
            A interface atual organiza saude do sistema, desempenho, armazenamento,
            inicializacao, limpeza pendente, rede, DNS, historico de acoes e atalhos
            protegidos.
          </p>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 overflow-hidden rounded-lg border border-white/10 bg-slate-950/80 p-2 shadow-[0_30px_120px_rgba(2,6,23,0.8)]"
          initial={{ opacity: 0, y: 22 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="relative aspect-[1600/1345] w-full overflow-hidden rounded-md">
            <Image
              alt="Preview da interface do Trixon Optimizer"
              className="object-contain"
              fill
              priority
              sizes="(min-width: 1120px) 1120px, calc(100vw - 32px)"
              src={assetPath("/app-preview.png")}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
