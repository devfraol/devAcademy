export const LessonItem = ({ lesson, index, isActive, onClick }) => (
  <li>
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-xl border px-4 py-3 text-left transition ${
        isActive
          ? "border-[#155dfc] bg-[#155dfc]/15 shadow-[0_12px_24px_rgba(255,108,99,0.18)]"
          : "border-white/10 bg-black/10 hover:border-[#155dfc]/45"
      }`}
    >
      <p className="text-sm font-medium text-foreground sm:text-base">
        {index + 1}. {lesson.title}
      </p>
      <div className="mt-1.5 flex items-center justify-between text-xs text-foreground/65">
        <span>{lesson.duration}</span>
        <span className="rounded-full bg-white/10 px-2 py-0.5">Read Lesson</span>
      </div>
    </button>
  </li>
);
