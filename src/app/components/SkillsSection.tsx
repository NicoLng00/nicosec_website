import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "./hooks/useInView";

const categories = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "PHP", level: 100 },
      { name: "Java", level: 100 },
      { name: "JavaScript", level: 90 },
      { name: "C", level: 80 },
      { name: "Bash", level: 85 },
      { name: "HTML/CSS", level: 100 },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    skills: [
      { name: "Laravel", level: 95 },
      { name: "Spring Boot", level: 88 },
      { name: "React.js", level: 85 },
      { name: "Hibernate", level: 82 },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      { name: "MySQL", level: 92 },
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
    ],
  },
  {
    id: "security",
    label: "Security",
    skills: [
      { name: "Penetration Testing", level: 92 },
      { name: "Red Teaming", level: 88 },
      { name: "Network Security", level: 85 },
      { name: "OWASP Top 10", level: 95 },
      { name: "OWASP Agents AI Security", level: 50 },
    ],
  },
];

export function SkillsSection() {
  const { ref, inView } = useInView();
  const [activeTab, setActiveTab] = useState("languages");
  const activeCategory = categories.find(
    (c) => c.id === activeTab,
  )!;

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 md:py-32"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff88]/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-[#00ff88]" />
            <span className="text-[#00ff88] text-sm font-['JetBrains_Mono'] tracking-widest uppercase">
              Tech Stack
            </span>
            <div className="h-[1px] w-8 bg-[#00ff88]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-['Inter'] text-[#e4e4e7] tracking-tight">
            Skills &{" "}
            <span className="text-[#00ff88]">Technologies</span>
          </h2>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-['JetBrains_Mono'] transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30"
                  : "text-[#71717a] border border-transparent hover:text-[#e4e4e7] hover:border-[#2a2a3a]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {activeCategory.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-xl border border-[#1a1a24] bg-[#111118] hover:border-[#00ff88]/20 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#e4e4e7] text-sm font-['Inter']">
                    {skill.name}
                  </span>
                  <span className="text-[#00ff88] text-xs font-['JetBrains_Mono']">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-[#1a1a24] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1,
                      delay: i * 0.1 + 0.3,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full"
                    style={{
                      background:
                        activeTab === "security"
                          ? "linear-gradient(90deg, #ff3333, #ff6633)"
                          : "linear-gradient(90deg, #00ff88, #00ccff)",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      
      </div>
    </section>
  );
}