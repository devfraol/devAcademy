import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section id="hero" className="relative px-4 pb-16 pt-6 sm:px-6">
      <div className="container mx-auto flex max-w-4xl items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            DEV FRAOL NETWORKING ACADEMY
          </p>
          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl md:text-6xl">
            <span className="text-primary">Networking</span> and <span className="text-primary">Internet Skills</span> with real-world labs.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Learn through a practice-first curriculum focused on routing, switching, Wi-Fi setup, network security, and troubleshooting workflows.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/courses"
                className="inline-flex items-center justify-center rounded-lg bg-[#007a55] px-7 py-3 text-base font-semibold text-white transition hover:shadow-[0_0_20px_rgba(0,122,85,0.4)]"
              >
                Start Learning
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/apps"
                className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-[#1E1E1E] px-7 py-3 text-base font-semibold text-white transition hover:border-[#007a55]/60 hover:text-[#007a55]"
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
