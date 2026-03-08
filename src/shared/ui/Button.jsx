import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-[#155dfc] text-white hover:bg-[#155dfc] hover:shadow-[0_10px_24px_rgba(21,93,252,0.35)]",
  outline: "border border-white/20 text-foreground/90 hover:border-[#155dfc]/60 hover:text-[#155dfc]",
  pill: "rounded-full",
};

export const Button = ({ className, variant = "primary", type = "button", ...props }) => (
  <button
    type={type}
    className={cn(
      "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#155dfc] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      variants[variant],
      className,
    )}
    {...props}
  />
);
