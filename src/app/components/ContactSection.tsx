import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import {
  Send,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export function ContactSection() {
  const { ref, inView } = useInView();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);

      setTimeout(() => setSubmitted(false), 3000);

      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error("EmailJS error:", error);
    }
  };

  return (
    <section
      id="contact"
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
              Get in Touch
            </span>
            <div className="h-[1px] w-8 bg-[#00ff88]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-['Inter'] text-[#e4e4e7] tracking-tight">
            Let's{" "}
            <span className="text-[#00ff88]">Connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-2xl border border-[#1a1a24] bg-[#111118]">
              <p className="text-[#71717a] text-sm font-['Inter'] leading-relaxed mb-6">
                Whether you need a robust backend system, a
                security assessment, or a red team engagement —
                I'm ready to help. Let's build something secure
                and scalable together.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#00ff88]" />
                  </div>
                  <div>
                    <p className="text-[#71717a] text-xs font-['JetBrains_Mono']">
                      Email
                    </p>
                    <p className="text-[#e4e4e7] text-sm font-['Inter']">
                      nico.longobardi00@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/20 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#00ff88]" />
                  </div>
                  <div>
                    <p className="text-[#71717a] text-xs font-['JetBrains_Mono']">
                      Location
                    </p>
                    <p className="text-[#e4e4e7] text-sm font-['Inter']">
                      Remote — Bari (BA)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Github, label: "GitHub", link: "https://github.com/NicoLng00"},
                { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/nicola-longobardi-8b325a248"},
              ].map(({ icon: Icon, label, link }) => (
                <a
                  key={label}
                  href={link}
                  className="w-11 h-11 rounded-xl border border-[#1a1a24] bg-[#111118] flex items-center justify-center text-[#71717a] hover:text-[#00ff88] hover:border-[#00ff88]/20 transition-all"
                  aria-label={label}
                  target="_blank"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-2xl border border-[#1a1a24] bg-[#111118] space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[#71717a] text-xs font-['JetBrains_Mono'] mb-1.5 block">
                    name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        name: e.target.value,
                      })
                    }
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0a0a0f] border border-[#1a1a24] text-[#e4e4e7] text-sm font-['Inter'] placeholder-[#3a3a4a] focus:border-[#00ff88]/30 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[#71717a] text-xs font-['JetBrains_Mono'] mb-1.5 block">
                    email
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        email: e.target.value,
                      })
                    }
                    placeholder="yourEmail@example.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0a0a0f] border border-[#1a1a24] text-[#e4e4e7] text-sm font-['Inter'] placeholder-[#3a3a4a] focus:border-[#00ff88]/30 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[#71717a] text-xs font-['JetBrains_Mono'] mb-1.5 block">
                  subject
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      subject: e.target.value,
                    })
                  }
                  placeholder="Software Development / Pen-Testing / Red Team"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0a0a0f] border border-[#1a1a24] text-[#e4e4e7] text-sm font-['Inter'] placeholder-[#3a3a4a] focus:border-[#00ff88]/30 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-[#71717a] text-xs font-['JetBrains_Mono'] mb-1.5 block">
                  message
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      message: e.target.value,
                    })
                  }
                  placeholder="Tell me about your project or security needs..."
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0a0a0f] border border-[#1a1a24] text-[#e4e4e7] text-sm font-['Inter'] placeholder-[#3a3a4a] focus:border-[#00ff88]/30 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#00ff88] text-[#0a0a0f] font-['Inter'] hover:bg-[#00ff88]/90 transition-all hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] flex items-center justify-center gap-2 group"
              >
                {submitted ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}