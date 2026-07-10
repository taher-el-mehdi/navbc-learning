"use client";

import { motion } from "framer-motion";
import {
  Box,
  Cloud,
  Code2,
  Container,
  Database,
  FileBarChart,
  Github,
} from "lucide-react";
import { BusinessCentralLogo } from "@/components/icons/business-central-logo";
import { cn } from "@/lib/utils";

interface Orbiter {
  icon: React.ElementType;
  color: string;
  left: string;
  top: string;
  size?: "sm" | "md";
}

const innerOrbiters: Orbiter[] = [
  { icon: Code2, color: "text-violet-400", left: "100%", top: "50%", size: "sm" },
  { icon: Database, color: "text-[var(--bc-cyan)]", left: "25%", top: "93.3%" },
  { icon: Box, color: "text-sky-400", left: "25%", top: "6.7%", size: "sm" },
];

const outerOrbiters: Orbiter[] = [
  { icon: Cloud, color: "text-[var(--bc-azure)]", left: "93.3%", top: "75%" },
  { icon: Github, color: "text-foreground/70", left: "25%", top: "93.3%", size: "sm" },
  { icon: Container, color: "text-blue-400", left: "6.7%", top: "25%", size: "sm" },
  { icon: FileBarChart, color: "text-emerald-400", left: "75%", top: "6.7%" },
];

const stars = [
  { left: "12%", top: "18%", size: 3, delay: 0 },
  { left: "85%", top: "12%", size: 2, delay: 0.8 },
  { left: "92%", top: "42%", size: 3, delay: 1.6 },
  { left: "8%", top: "62%", size: 2, delay: 0.4 },
  { left: "18%", top: "88%", size: 3, delay: 2 },
  { left: "78%", top: "85%", size: 2, delay: 1.2 },
  { left: "50%", top: "4%", size: 2, delay: 2.4 },
  { left: "96%", top: "68%", size: 2, delay: 0.6 },
  { left: "4%", top: "38%", size: 2, delay: 1.8 },
  { left: "62%", top: "95%", size: 3, delay: 1 },
];

function IconOrb({
  icon: Icon,
  color,
  size = "md",
}: {
  icon: React.ElementType;
  color: string;
  size?: "sm" | "md";
}) {
  const sizeClass = size === "sm" ? "h-10 w-10" : "h-12 w-12";
  const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <div
      className={cn(
        "glass-card flex items-center justify-center rounded-2xl",
        sizeClass,
      )}
    >
      <Icon className={cn(iconSize, color)} />
    </div>
  );
}

function OrbitRing({
  sizeClass,
  duration,
  reverse = false,
  orbiters,
}: {
  sizeClass: string;
  duration: number;
  reverse?: boolean;
  orbiters: Orbiter[];
}) {
  const spin = reverse ? -360 : 360;

  return (
    <div
      className={cn(
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        sizeClass,
      )}
    >
      <div className="absolute inset-0 rounded-full border border-brand/15 shadow-[0_0_30px_rgba(0,188,242,0.08)] dark:border-brand/20" />

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: spin }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {orbiters.map((orbiter, index) => (
            <div
              key={index}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: orbiter.left, top: orbiter.top }}
            >
              <motion.div
                animate={{ rotate: -spin }}
                transition={{ duration, repeat: Infinity, ease: "linear" }}
              >
                <IconOrb
                  icon={orbiter.icon}
                  color={orbiter.color}
                  size={orbiter.size}
                />
              </motion.div>
            </div>
          ))}
      </motion.div>
    </div>
  );
}

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg lg:max-w-none">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand/20 via-[var(--bc-cyan)]/10 to-transparent blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-2xl" />

      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[var(--bc-cyan)]"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
          }}
          animate={{ opacity: [0.15, 0.9, 0.15], scale: [0.8, 1.3, 0.8] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}

      <OrbitRing sizeClass="h-[56%] w-[56%]" duration={26} orbiters={innerOrbiters} />
      <OrbitRing
        sizeClass="h-[86%] w-[86%]"
        duration={44}
        reverse
        orbiters={outerOrbiters}
      />

      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-full bg-brand/20 blur-2xl" />
            <BusinessCentralLogo
              priority
              className="relative h-32 w-32 drop-shadow-2xl sm:h-40 sm:w-40"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
