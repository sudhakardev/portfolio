import { useState, Suspense } from "react";
import { Mail, Linkedin, Github, Send, Terminal, Code, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import TerminalLink from "./TerminalLink";
import { motion, AnimatePresence } from "framer-motion";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isTyping, setIsTyping] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const ACCESS_KEY = "a242eb93-e90f-4974-ae12-9702e752d3cd";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      const mailtoLink = `mailto:sudhakark4227@gmail.com?subject=Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;
      window.location.href = mailtoLink;
      setStatus("idle");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 500);
  };

  const socialLinks = [
    { icon: Mail, label: "Gmail", href: "mailto:sudhakark4227@gmail.com", detail: "Direct Link" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sudhakar-dev/", detail: "Expert Network" },
    { icon: Github, label: "GitHub", href: "https://github.com/sudhakardev", detail: "Source Repos" },
    { icon: Code, label: "LeetCode", href: "https://leetcode.com/sudhakardev", detail: "DSA Validated" }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#020408]">
      <Suspense fallback={null}>
        <TerminalLink isTyping={isTyping} />
      </Suspense>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_15px_rgba(0,242,255,0.8)]" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase italic leading-none">
              ESTABLISH <span className="text-glow-cyan text-primary">LINK</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-center">
          {/* Left Side: Minimalist High-End Icons */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {socialLinks.map((link, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative h-40 bg-white/[0.02] border border-white/10 rounded-3xl flex flex-col items-center justify-center gap-3 hover:bg-primary/5 hover:border-primary/40 transition-all duration-500 overflow-hidden shadow-2xl"
                >
                  <div className="absolute top-0 right-0 p-3 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                    <link.icon size={80} />
                  </div>
                  <div className="relative z-10 p-4 rounded-2xl bg-white/5 border border-white/10 text-white/50 group-hover:text-primary group-hover:scale-110 group-hover:border-primary/20 transition-all duration-500">
                    <link.icon size={32} />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-black text-white uppercase tracking-tighter group-hover:text-primary transition-colors">{link.label}</p>
                    <p className="text-[8px] font-mono text-white/30 uppercase tracking-widest mt-1">{link.detail}</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Right Side: Professional Contact Box */}
          <div className="lg:col-span-1 border-r border-white/5 hidden lg:block h-60" />

          <div className="lg:col-span-6">
            <ScrollReveal delay={300}>
              <div className="relative glass p-10 rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden bg-black/40 backdrop-blur-3xl">
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20 flex flex-col items-center"
                    >
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 animate-bounce">
                        <CheckCircle2 size={48} />
                      </div>
                      <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Transmission Successful</h3>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono text-primary/60 uppercase tracking-widest ml-4">Identity_Label</label>
                          <input
                            type="text"
                            name="name"
                            placeholder="NAME"
                            value={form.name}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 font-mono text-sm text-white focus:outline-none focus:border-primary transition-all shadow-inner"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono text-primary/60 uppercase tracking-widest ml-4">Contact_Protocol</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="EMAIL"
                            value={form.email}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 font-mono text-sm text-white focus:outline-none focus:border-primary transition-all shadow-inner"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-primary/60 uppercase tracking-widest ml-4">Transmit_Payload</label>
                        <textarea
                          name="message"
                          placeholder="WRITE YOUR MESSAGE..."
                          value={form.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 font-mono text-sm text-white focus:outline-none focus:border-primary transition-all resize-none shadow-inner"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full group relative overflow-hidden py-5 bg-primary text-black font-black uppercase tracking-[0.3em] rounded-2xl transition-all hover:scale-[1.02] shadow-[0_0_50px_rgba(0,242,255,0.3)] flex items-center justify-center gap-3 disabled:opacity-50"
                      >
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        {status === "sending" ? (
                          <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send size={18} />
                            <span>Establish Connection</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Simplified Footer */}
        <ScrollReveal delay={500}>
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.5em]">
              © 2026 SUDHAKAR
            </p>
            <div className="flex gap-10">
              {[
                { label: "LATENCY", val: "12ms" },
                { label: "UPTIME", val: "100%" },
                { label: "NODES", val: "Global" }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em]">{stat.label}: {stat.val}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
