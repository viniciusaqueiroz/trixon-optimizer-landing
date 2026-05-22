import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-sky-300/20 bg-sky-300/8 px-3 py-1 text-xs font-medium text-sky-100",
        className,
      )}
      {...props}
    />
  );
}
