import { motion } from "framer-motion";
import { ArrowRight, Network } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-[85vh] items-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex max-w-4xl justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Network className="h-4 w-4" /> Dev Fraol Networking Academy
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Learn <span className="text-primary">Networking</span> and <span className="text-primary">Internet Infrastructure</span> with practical labs.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A modern learning platform focused on network fundamentals, security basics, troubleshooting, and real-world connectivity projects.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/courses" className="cosmic-button inline-flex items-center gap-2">
              Start learning <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/instructors" className="rounded-full border border-border px-6 py-2 transition-colors hover:bg-card">
              Meet the Instructor
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
