import { cn } from "@/lib/utils";

export const Card = ({ className, children }) => (
  <article className={cn("glass-panel rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,122,85,0.18)]", className)}>{children}</article>
);
