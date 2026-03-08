export const LoadingSpinner = ({ label = "Loading..." }) => (
  <div className="flex items-center gap-3 text-sm text-foreground/75" role="status" aria-live="polite">
    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#155dfc]/30 border-t-[#155dfc]" />
    <span>{label}</span>
  </div>
);
