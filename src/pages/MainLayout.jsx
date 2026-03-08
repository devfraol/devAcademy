import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useRef } from "react";
import { Navbar } from "@/features/navbar/Navbar";
import { Footer } from "@/features/footer/Footer";

const routeOrder = ["/", "/courses", "/blogs", "/apps", "/apps/python-code-editor", "/instructors", "/testimonials", "/contact", "/faq", "/login", "/signup"];

const routeIndex = (pathname) => {
  const matched = routeOrder.findIndex((route) => pathname === route || pathname.startsWith(`${route}/`));
  return matched === -1 ? 0 : matched;
};

export const MainLayout = () => {
  const location = useLocation();
  const previousIndex = useRef(routeIndex(location.pathname));
  const shouldAnimate = useMemo(() => !location.pathname.startsWith("/auth/"), [location.pathname]);
  const immersiveMode = location.pathname.includes("/python-code-editor");

  const currentIndex = routeIndex(location.pathname);
  const direction = currentIndex >= previousIndex.current ? 1 : -1;
  previousIndex.current = currentIndex;

  return (
    <div className="relative z-0 min-h-screen overflow-x-hidden text-foreground">
      {!immersiveMode ? <div className="fixed inset-x-0 top-4 z-[90] px-3"><Navbar /></div> : null}
      <main className={`relative z-0 ${immersiveMode ? "h-screen overflow-hidden p-0" : "pb-20 pt-24 md:pt-28"}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={shouldAnimate ? { opacity: 0, x: 30 * direction } : false}
            animate={{ opacity: 1, x: 0 }}
            exit={shouldAnimate ? { opacity: 0, x: -30 * direction } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      {!immersiveMode ? <Footer /> : null}
    </div>
  );
};
