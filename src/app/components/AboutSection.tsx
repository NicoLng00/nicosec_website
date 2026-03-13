import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Terminal, Shield, Server } from "lucide-react";

export function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#00ff88]/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1645070858656-816d780df8e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY29kaW5nJTIwc2V0dXAlMjBtb25pdG9yc3xlbnwxfHx8fDE3NzMzMjU3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coding setup"
                className="w-full h-80 md:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />

              {/* Floating terminal card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0a0a0f]/90 backdrop-blur-sm border border-[#00ff88]/10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff3333]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffaa00]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00ff88]" />
                  <span className="text-[#71717a] text-xs font-['JetBrains_Mono'] ml-2">
                    terminal
                  </span>
                </div>
                <p className="text-[#00ff88] text-xs font-['JetBrains_Mono']">
                  $ cat /etc/passion
                  <br />
                  <span className="text-[#e4e4e7]">
                    &gt; Building secure, scalable systems
                  </span>
                </p>
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-[#00ff88]/5 rounded-3xl blur-3xl -z-10" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-[#00ff88]" />
              <span className="text-[#00ff88] text-sm font-['JetBrains_Mono'] tracking-widest uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-['Inter'] text-[#e4e4e7] mb-6 tracking-tight">
              Engineering systems that{" "}
              <span className="text-[#00ff88]">scale</span> and{" "}
              <span className="text-[#ff3333]">withstand</span>{" "}
              attacks
            </h2>

            <p className="text-[#71717a] font-['Inter'] mb-6 leading-relaxed">
              I'm a Backend Software Engineer with a deep
              passion for building robust, secure, and
              high-performance server-side applications. With
              expertise spanning multiple languages, frameworks,
              and databases, I architect solutions that handle
              millions of requests while maintaining rock-solid
              security.
            </p>

            <p className="text-[#71717a] font-['Inter'] mb-8 leading-relaxed">
              Beyond development, I specialize in{" "}
              <span className="text-[#ff3333]">
                Penetration Testing
              </span>{" "}
              and{" "}
              <span className="text-[#ff3333]">
                Red Team Operations
              </span>{" "}
              — thinking like an Attacker to build better
              Defenses. I break systems and websites, so they
              can be built stronger.
            </p>

            {/* Key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Server,
                  label: "Backend\nArchitecture",
                  color: "#00ff88",
                },
                {
                  icon: Shield,
                  label: "Penetration\nTesting",
                  color: "#ff3333",
                },
                {
                  icon: Terminal,
                  label: "DevOps\n& Automation",
                  color: "#00ccff",
                },
              ].map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="p-4 rounded-xl border border-[#1a1a24] bg-[#111118] hover:border-[#00ff88]/20 transition-colors group"
                >
                  <Icon
                    className="w-5 h-5 mb-3 transition-colors"
                    style={{ color }}
                  />
                  <span className="text-[#e4e4e7] text-sm font-['Inter'] whitespace-pre-line">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}