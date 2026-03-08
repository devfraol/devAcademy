export const LoadingSpinner = ({ label = "Loading..." }) => (
  <div className="flex items-center gap-3 text-sm text-foreground/75" role="status" aria-live="polite">
    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#007a55]/30 border-t-[#007a55]" />
    <span>{label}</span>
  </div>
);
