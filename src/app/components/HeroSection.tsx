import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  ChevronDown,
  Shield,
  Server,
  Code2,
} from "lucide-react";

function TypingText({
  texts,
  className,
}: {
  texts: string[];
  className?: string;
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(
            currentFullText.slice(0, displayText.length + 1),
          );
          if (displayText.length === currentFullText.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(
            currentFullText.slice(0, displayText.length - 1),
          );
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentTextIndex(
              (prev) => (prev + 1) % texts.length,
            );
          }
        }
      },
      isDeleting ? 40 : 80,
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, texts]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse text-[#00ff88]">|</span>
    </span>
  );
}

function MatrixRain() {
  const columns = 30;
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.04] pointer-events-none">
      {Array.from({ length: columns }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-[#00ff88] font-['JetBrains_Mono'] text-xs whitespace-nowrap"
          style={{ left: `${(i / columns) * 100}%` }}
          initial={{ y: -200 }}
          animate={{ y: "100vh" }}
          transition={{
            duration: 6 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          {Array.from({ length: 20 })
            .map(() =>
              String.fromCharCode(0x30a0 + Math.random() * 96),
            )
            .join("\n")}
        </motion.div>
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <MatrixRain />
      <div className="absolute inset-0 bg-gradient-to-b from-[#00ff88]/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff88]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00ccff]/5 rounded-full blur-[120px]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ff88]/20 bg-[#00ff88]/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
          <span className="text-[#00ff88] text-xs font-['JetBrains_Mono'] tracking-wider">
            AVAILABLE FOR CONSULTING
          </span>
        </motion.div>

        {/* Terminal-style intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
          <span className="text-[#71717a] font-['JetBrains_Mono'] text-sm">
            ~/nicoLng $
          </span>
          <span className="text-[#00ff88] font-['JetBrains_Mono'] text-sm ml-2">
            whoami
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-['Inter'] tracking-tight mb-6"
        >
          <span className="text-[#e4e4e7]">Software </span>
          <span className="text-[#00ff88]">Engineer</span>
          <br />
          <span className="text-[#e4e4e7] opacity-60">
            &
          </span>{" "}
          <span className="text-[#e4e4e7]">Red Team </span>
          <span className="text-[#ff3333]">Specialist</span>
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-[#71717a] font-['JetBrains_Mono'] mb-12 h-8"
        >
          <TypingText
            texts={[
              "Building scalable backend systems",
              "Penetration testing & red teaming",
              "Securing digital infrastructure",
              "Crafting robust APIs & microservices",
            ]}
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg bg-[#00ff88] text-[#0a0a0f] font-['Inter'] hover:bg-[#00ff88]/90 transition-all hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] group flex items-center gap-2"
          >
            <span>Get in Touch</span>
            <Code2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </a>
          <a
            href="#services"
            className="px-8 py-3 rounded-lg border border-[#2a2a3a] text-[#e4e4e7] font-['Inter'] hover:border-[#00ff88]/30 hover:bg-[#00ff88]/5 transition-all flex items-center gap-2"
          >
            <span>View Services</span>
            <Shield className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "3+", label: "Years Exp." },
            { value: "20+", label: "Projects" },
            { value: "99.9%", label: "Uptime" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl text-[#00ff88] font-['JetBrains_Mono']">
                {stat.value}
              </div>
              <div className="text-xs text-[#71717a] font-['Inter'] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[#71717a] text-xs font-['JetBrains_Mono']">
            scroll
          </span>
          <ChevronDown className="w-4 h-4 text-[#00ff88]" />
        </motion.div>
      </motion.div>
    </section>
  );
}