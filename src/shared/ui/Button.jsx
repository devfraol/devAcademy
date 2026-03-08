import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-[#009689] text-white hover:bg-[#009689] hover:shadow-[0_10px_24px_rgba(0,150,137,0.35)]",
  outline: "border border-white/20 text-foreground/90 hover:border-[#009689]/60 hover:text-[#009689]",
  pill: "rounded-full",
};

export const Button = ({ className, variant = "primary", type = "button", ...props }) => (
  <button
    type={type}
    className={cn(
      "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009689] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      variants[variant],
      className,
    )}
    {...props}
  />
);
