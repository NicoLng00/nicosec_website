import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Software Developer Jr",
    company: "Boostar s.r.l.",
    period: "2023",
    description: "Backend Development.",
    tags: ["PHP", "Html, Css, Javascript", "MySQL", "APIs"],
    type: "dev",
  },
  {
    role: "Junior Software Developer",
    company: "C&C Apple Premium Partner S.p.A.",
    period: "2023 — 2025",
    description:
      "Software Development and Web Apps Development. APIs Integrations.",
    tags: [
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "Microservices",
      "Laravel",
      "Web App SecOps",
      "PHP",
      "Backend Dev",
    ],
    type: "dev",
  },
  {
    role: "Software Engineer - Analyst",
    company: "Deloitte Nexthub",
    period: "2025 — Present",
    description:
      "Software Engineer, Technology & Transformation, CyberSec Analyst",
    tags: ["Unicredit", "Deloitte", "APIs", "WAPT", "Pentest"],
    type: "dev",
  },
];

export function ExperienceSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff88]/[0.02] to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-[#00ff88]" />
            <span className="text-[#00ff88] text-sm font-['JetBrains_Mono'] tracking-widest uppercase">
              Career Path
            </span>
            <div className="h-[1px] w-8 bg-[#00ff88]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-['Inter'] text-[#e4e4e7] tracking-tight">
            Work{" "}
            <span className="text-[#00ff88]">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#00ff88]/30 via-[#00ff88]/10 to-transparent md:-translate-x-[0.5px]" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative mb-12 last:mb-0 pl-8 md:pl-0 ${
                i % 2 === 0
                  ? "md:pr-[calc(50%+2rem)]"
                  : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-6 w-3 h-3 rounded-full border-2 left-[-6px] md:left-1/2 md:-translate-x-1/2 z-10 ${
                  exp.type === "security"
                    ? "border-[#ff3333] bg-[#ff3333]/20"
                    : exp.type === "both"
                      ? "border-[#ffaa00] bg-[#ffaa00]/20"
                      : "border-[#00ff88] bg-[#00ff88]/20"
                }`}
              />

              <div className="p-6 rounded-2xl border border-[#1a1a24] bg-[#111118] hover:border-[#00ff88]/20 transition-all group">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-[#71717a]" />
                  <span className="text-[#71717a] text-xs font-['JetBrains_Mono']">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-[#e4e4e7] font-['Inter'] text-lg mb-1">
                  {exp.role}
                </h3>
                <p className="text-[#00ff88] text-sm font-['JetBrains_Mono'] mb-3">
                  @ {exp.company}
                </p>
                <p className="text-[#71717a] text-sm font-['Inter'] leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#1a1a24] text-[#71717a] text-xs font-['JetBrains_Mono']"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}