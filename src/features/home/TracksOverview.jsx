import { motion } from "framer-motion";
import { ShieldCheck, Waypoints } from "lucide-react";
import { sectionReveal, staggerContainer } from "@/lib/animations";
import { TrackCard } from "./TrackCard";

const tracks = [
  {
    title: "Networking Fundamentals Track",
    description: "Build strong foundations in network architecture, IP addressing, and core internet services.",
    icon: Waypoints,
    highlights: ["IP Addressing", "Routing Basics", "Switching", "DNS", "LAN/WAN"],
    href: "/courses",
  },
  {
    title: "Network Security Track",
    description: "Learn practical methods to secure devices, wireless networks, and user access.",
    icon: ShieldCheck,
    highlights: ["Firewall Basics", "Secure Wi-Fi", "Access Control", "Threat Awareness"],
    href: "/courses",
  },
];

export const TracksOverview = () => {
  return (
    <section id="tracks" className="px-4 py-16 sm:px-6">
      <div className="container mx-auto max-w-6xl text-left">
        <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <h2 className="text-3xl sm:text-4xl">Tracks Overview / What You Will Learn</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Follow focused networking paths and gain real, job-relevant skills with hands-on labs.
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
