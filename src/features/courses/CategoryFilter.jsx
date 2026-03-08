const CATEGORY_ORDER = ["Networking"];

export const CategoryFilter = ({ activeCategory, onChange, counts = {} }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORY_ORDER.map((category) => {
        const isActive = category === activeCategory;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              isActive
                ? "border-[#007a55] bg-[#007a55] text-white shadow-[0_0_20px_rgba(0,122,85,0.35)]"
                : "border-white/20 bg-white/5 text-foreground/80 hover:border-[#007a55]/50"
            }`}
          >
            {category}
            <span className="ml-2 text-xs opacity-80">({counts[category] ?? 0})</span>
          </button>
        );
      })}
    </div>
  );
};
