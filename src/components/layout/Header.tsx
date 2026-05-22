import Image from "next/image";
import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "Recursos", href: "#recursos" },
  { label: "Seguranca", href: "#seguranca" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-slate-950/72 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <a className="flex items-center gap-3" href="#inicio" aria-label="Trixon Optimizer">
          <Image src="/logo.svg" alt="" width={32} height={32} priority />
          <span className="text-sm font-semibold tracking-wide text-white">
            Trixon Optimizer
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <a
              className="text-sm text-slate-300 transition hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button className="hidden min-h-10 px-4 md:inline-flex" href="#lista">
          GitHub
        </Button>
      </div>
    </header>
  );
}
