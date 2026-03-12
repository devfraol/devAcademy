import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HERO_KEYWORDS = ["Network Engeneer", "Cyber Security", "Programing Language"];

export const Hero = () => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = HERO_KEYWORDS[activeWordIndex];
    const typingDelay = isDeleting ? 70 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentWord.slice(0, typedText.length + 1);
        setTypedText(nextText);

        if (nextText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        const nextText = currentWord.slice(0, typedText.length - 1);
        setTypedText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setActiveWordIndex((prevIndex) => (prevIndex + 1) % HERO_KEYWORDS.length);
        }
      }
    }, typingDelay);

    return () => clearTimeout(timer);
  }, [activeWordIndex, isDeleting, typedText]);

  return (
    <section id="hero" className="relative px-4 pb-16 pt-10 sm:px-6">
      <div className="container mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center">
          <p className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            DEV FRAOL ACADEMY
          </p>
          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Build strong{" "}
            <span className="inline-flex min-h-[1.2em] min-w-[11ch] items-end text-primary">
              {typedText}
              <span className="ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-primary" aria-hidden="true" />
            </span>{" "}
            for modern tech careers.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Start with beginner-friendly core courses in programming, operating systems, networking, and web fundamentals—then apply what you learn through guided practice.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/courses"
                className="inline-flex items-center justify-center rounded-lg bg-[#009689] px-7 py-3 text-base font-semibold text-white transition hover:shadow-[0_0_20px_rgba(0,150,137,0.4)]"
              >
                Start Learning
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/apps"
                className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-[#1E1E1E] px-7 py-3 text-base font-semibold text-white transition hover:border-[#009689]/60 hover:text-[#009689]"
              >
                Apps
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
