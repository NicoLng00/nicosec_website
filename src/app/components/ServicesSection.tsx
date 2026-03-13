import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import {
  Server,
  Shield,
  Database,
  Code2,
  Bug,
  Lock,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Architecting and building scalable REST APIs, microservices, and server-side applications using Laravel, Spring Boot, and modern backend patterns.",
    tags: ["API Design", "Microservices", "MVC"],
    color: "#00ff88",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description:
      "Designing optimized database schemas, writing performant queries, and implementing data pipelines across MySQL, PostgreSQL, and MongoDB.",
    tags: ["Schema Design", "Optimization", "Migration"],
    color: "#00ccff",
  },
  {
    icon: Shield,
    title: "Penetration Testing",
    description:
      "Comprehensive security assessments including web app testing, network penetration testing, and vulnerability analysis following OWASP methodologies.",
    tags: ["Web App", "Network", "OWASP"],
    color: "#ff3333",
  },
  {
    icon: Bug,
    title: "Red Team Operations",
    description:
      "Simulating real-world adversary tactics to evaluate your organization's detection and response capabilities through advanced offensive security techniques.",
    tags: [
      "Adversary Sim",
      "Social Eng.",
      "Evasion",
      "Malware Analysis",
    ],
    color: "#ff3333",
  },
  {
    icon: Code2,
    title: "DevOps & CI/CD",
    description:
      "Containerizing applications with Docker, automating deployments, and building robust CI/CD pipelines for seamless delivery workflows.",
    tags: ["Docker", "Automation", "Bash"],
    color: "#00ff88",
  },
  {
    icon: Lock,
    title: "SOC Analyst",
    description:
      "Strategic security advisory including threat modeling, security architecture review, and implementing defense-in-depth strategies for your infrastructure.",
    tags: [
      "Threat Model",
      "Architecture",
      "Compliance",
      "SIEM Logs",
      "Splunk",
    ],
    color: "#ffaa00",
  },
];

export function ServicesSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-[#00ff88]" />
            <span className="text-[#00ff88] text-sm font-['JetBrains_Mono'] tracking-widest uppercase">
              What I Do
            </span>
            <div className="h-[1px] w-8 bg-[#00ff88]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-['Inter'] text-[#e4e4e7] tracking-tight">
            Services &{" "}
            <span className="text-[#00ff88]">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-2xl border border-[#1a1a24] bg-[#111118] hover:border-[#00ff88]/20 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${service.color}08, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-colors"
                  style={{
                    backgroundColor: `${service.color}10`,
                    border: `1px solid ${service.color}30`,
                  }}
                >
                  <service.icon
                    className="w-5 h-5"
                    style={{ color: service.color }}
                  />
                </div>

                <h3 className="text-[#e4e4e7] font-['Inter'] mb-3 text-lg">
                  {service.title}
                </h3>

                <p className="text-[#71717a] text-sm font-['Inter'] leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-['JetBrains_Mono']"
                      style={{
                        color: service.color,
                        backgroundColor: `${service.color}10`,
                      }}
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