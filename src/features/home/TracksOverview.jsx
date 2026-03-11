import { motion } from "framer-motion";
import { Brush, Code2 } from "lucide-react";
import { sectionReveal, staggerContainer } from "@/lib/animations";
import { TrackCard } from "./TrackCard";

const tracks = [
  {
    title: "IT & Web Foundations Track",
    description: "Master essential IT and web concepts step by step, from core computing basics to practical development workflows.",
    icon: Code2,
    highlights: ["Computer Basics", "Operating Systems", "Networking Basics", "HTML & CSS", "JavaScript Fundamentals"],
    href: "/apps",
  },
  {
    title: "Programming Foundations Track",
    description: "Build confidence in coding through beginner-first lessons that prepare you for full-stack and software learning paths.",
    icon: Brush,
    highlights: ["Programming Logic", "Python Basics", "Web Fundamentals", "Databases Intro"],
    href: "/apps",
  },
];

export const TracksOverview = () => {
  return (
    <section id="tracks" className="px-4 py-16 sm:px-6">
      <div className="container mx-auto max-w-6xl text-left">
        <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <h2 className="text-3xl sm:text-4xl">IT Foundations Roadmap / What You Will Learn</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Start with a focused path built around core IT knowledge. Learn practical, job-ready skills through structured and beginner-friendly modules.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid gap-6 lg:grid-cols-2"
        >
          {tracks.map((track) => (
            <TrackCard
              key={track.title}
              title={track.title}
              description={track.description}
              icon={track.icon}
              highlights={track.highlights}
              href={track.href}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
