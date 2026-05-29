"use client";

import { motion } from "framer-motion";
import { faqs } from "@/data/faq";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { revealSoft, revealTransition, revealUp, revealViewport } from "@/lib/motion";

export function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial="hidden"
          transition={revealTransition}
          variants={revealSoft}
          viewport={revealViewport}
          whileInView="visible"
        >
          <Badge>FAQ</Badge>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            Perguntas importantes antes de confiar em uma ferramenta de sistema.
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Transparência também aparece nas respostas. O produto deve deixar
            claro o que faz, o que não faz e quando precisa de permissão elevada.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              initial="hidden"
              key={faq.question}
              transition={{ ...revealTransition, delay: index * 0.045 }}
              variants={revealUp}
              viewport={revealViewport}
              whileInView="visible"
            >
              <Card className="p-5">
                <h3 className="text-base font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{faq.answer}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
