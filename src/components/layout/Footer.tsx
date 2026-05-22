import Image from "next/image";
import { assetPath } from "@/lib/assets";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell flex flex-col gap-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image src={assetPath("/logo.svg")} alt="" width={28} height={28} />
          <span>Trixon Optimizer</span>
        </div>
        <p>
          Versao 0.3.4 em validacao. Distribuicao publica condicionada a QA,
          assinatura de codigo e release notes.
        </p>
      </div>
    </footer>
  );
}
