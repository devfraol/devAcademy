import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-[#007a55] text-white hover:bg-[#008a61] hover:shadow-[0_10px_24px_rgba(0,122,85,0.35)]",
  outline: "border border-white/20 text-foreground/90 hover:border-[#007a55]/60 hover:text-[#007a55]",
  pill: "rounded-full",
};

export const Button = ({ className, variant = "primary", type = "button", ...props }) => (
  <button
    type={type}
    className={cn(
      "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007a55] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      variants[variant],
      className,
    )}
    {...props}
  />
);
