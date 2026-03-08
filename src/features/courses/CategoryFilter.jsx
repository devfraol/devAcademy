const CATEGORY_ORDER = ["Operate Computer"];

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
                ? "border-[#155dfc] bg-[#155dfc] text-white shadow-[0_0_20px_rgba(21,93,252,0.35)]"
                : "border-white/20 bg-white/5 text-foreground/80 hover:border-[#155dfc]/50"
            } ring-1 ring-[#155dfc]/25`}
          >
            {category}
            <span className="ml-2 text-xs opacity-80">({counts[category] ?? 0})</span>
          </button>
        );
      })}
    </div>
  );
};
