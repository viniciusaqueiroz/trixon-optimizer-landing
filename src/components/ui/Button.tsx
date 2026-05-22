import { ArrowRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

const variants = {
  primary:
    "border-sky-300/30 bg-sky-400 text-slate-950 shadow-[0_0_36px_rgba(56,189,248,0.22)] hover:bg-sky-300",
  secondary:
    "border-emerald-300/20 bg-emerald-300/10 text-emerald-100 hover:bg-emerald-300/16",
  ghost:
    "border-white/10 bg-white/[0.03] text-slate-200 hover:bg-white/[0.07]",
};

export function Button({
  className,
  variant = "primary",
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-sky-300/60 focus:ring-offset-2 focus:ring-offset-slate-950",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
