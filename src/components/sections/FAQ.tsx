"use client";

import { motion } from "framer-motion";
import { faqs } from "@/data/faq";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Badge>FAQ</Badge>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            Perguntas importantes antes de confiar em uma ferramenta de sistema.
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Transparencia tambem aparece nas respostas. O produto deve deixar
            claro o que faz, o que nao faz e quando precisa de permissao elevada.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              key={faq.question}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
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
