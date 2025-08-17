// src/components/sections/home/Hero.tsx
import { motion } from "framer-motion";
import SectionCTA from "@/components/sectionCTA";
import logo from "@/assets/images/flux-logo.png";

const textParent = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.12,
      ease: [0.65, 0, 0.35, 1] as const, // Using const assertion for type safety
      duration: 0.6,
    },
  },
};

const textChild = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.65, 0, 0.35, 1] as const, // Using const assertion for type safety
    },
  },
};

const logoEnter = {
  hidden: { opacity: 0, y: -40, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 160, damping: 18, mass: 0.8 },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] flex items-center overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          {/* LEFT: Text */}
          <motion.div
            variants={textParent}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.h1
              variants={textChild}
              className="text-[clamp(2.2rem,6vw,4rem)] font-extrabold leading-tight tracking-tight"
            >
              Welcome to <span className="text-primary">Flux</span>
            </motion.h1>

            <motion.h1
              variants={textChild}
              className="text-[clamp(2.4rem,6vw,4rem)] font-extrabold leading-tight tracking-tight"
            >
              Igniting Ideas,{" "}
              <span className="text-primary">Shaping Futures</span>
            </motion.h1>

            <motion.p
              variants={textChild}
              className="mt-4 max-w-xl text-lg text-muted-foreground"
            >
              Flux is the official Computer Science & Engineering society — a
              hub where innovation, collaboration, and real‑world impact
              converge.
            </motion.p>

            <motion.p
              variants={textChild}
              className="mt-4 max-w-xl text-lg text-muted-foreground"
            >
              Guided by <strong>Prof. Rakesh Kumar</strong>, we connect
              ambitious students with industry leaders, global conferences, and
              hands‑on projects that challenge and inspire. Whether you're
              building the next big thing or expanding your network, Flux is
              your platform to lead, learn, and launch.
            </motion.p>

            <motion.div
              variants={textChild}
              className="mt-8 flex flex-wrap gap-4"
            >
              <SectionCTA
                to="about"
                label="Learn About Flux"
                variant="primary"
              />

              <SectionCTA
                to="/events"
                label="Upcoming Events"
                variant="outline"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT: Logo */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            {/* Soft radial aura behind the logo */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center lg:justify-end">
              <div
                className="h-64 w-64 sm:h-80 sm:w-80 rounded-full blur-3xl opacity-50"
                style={{
                  background:
                    "radial-gradient(ellipse at center, hsl(var(--primary)/0.35), transparent 60%)",
                }}
              />
            </div>

            <motion.div
              variants={logoEnter}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <motion.img
                src={logo}
                alt="Flux Society Logo"
                width={288}
                height={288}
                decoding="async"
                fetchPriority="high"
                className="w-64 sm:w-72 h-auto object-contain drop-shadow-lg shadow-glow will-change-transform"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  delay: 0.9,
                  duration: 6,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1] as const, // Using const assertion for type safety
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
