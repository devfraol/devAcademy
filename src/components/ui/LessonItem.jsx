export const LessonItem = ({ lesson, index, isActive, onClick }) => (
  <li>
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-xl border px-4 py-3 text-left transition ${
        isActive
          ? "border-[#1b9b75] bg-[#1b9b75]/15 shadow-[0_12px_24px_rgba(0,122,85,0.18)]"
          : "border-white/10 bg-black/10 hover:border-[#1b9b75]/45"
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
