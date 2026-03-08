import { Clock3, Layers3, Signal, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const levelStyles = {
  Beginner: "bg-emerald-500/20 text-emerald-200 border-emerald-400/35",
  Intermediate: "bg-sky-500/20 text-sky-200 border-sky-400/35",
  Advanced: "bg-purple-500/20 text-purple-200 border-purple-400/35",
};

export const CourseCard = ({ course }) => {
  const isProgramming = course.category === "Programming";

  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-b from-zinc-950/80 to-zinc-900/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
        isProgramming
          ? "border-[#009689]/45 shadow-[0_0_26px_rgba(0,150,137,0.16)]"
          : "border-white/15 shadow-[0_12px_26px_rgba(0,0,0,0.25)]"
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/5" />

        <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3">
          <span className="rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur">
            {course.category}
          </span>
          <span
            className={`rounded-full border px-2.5 py-1 text-xs font-medium backdrop-blur ${
              levelStyles[course.level] ?? "border-white/20 bg-white/10 text-white/90"
            }`}
          >
            {course.level}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="line-clamp-2 text-xl font-semibold leading-snug text-white drop-shadow-md">{course.title}</h3>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <p className="line-clamp-2 text-sm leading-relaxed text-foreground/75">{course.short_description}</p>

        <div className="grid grid-cols-2 gap-2.5 text-xs text-foreground/70">
          <div className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-2.5 py-2">
            <UserRound className="h-3.5 w-3.5 text-[#00b5a5]" />
            <span className="truncate">{course.instructor_name}</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-2.5 py-2">
            <Layers3 className="h-3.5 w-3.5 text-[#00b5a5]" />
            <span>{course.lessons_count} lessons</span>
          </div>
          <div className="col-span-2 flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-2.5 py-2">
            <Clock3 className="h-3.5 w-3.5 text-[#00b5a5]" />
            <span>{course.duration}</span>
          </div>
        </div>

        <Link
          to={`/courses/${course.slug}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#009689] via-[#00a899] to-[#009689] px-3 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_12px_24px_rgba(0,150,137,0.38)]"
        >
          <Signal className="h-4 w-4" />
          Start Course
        </Link>
      </div>
    </article>
  );
};
