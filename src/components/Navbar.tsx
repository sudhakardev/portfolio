import { useState, useEffect } from "react";
import { Menu, X, Home, User, Database, Briefcase, Mail, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Tech Stack", href: "#skills", icon: Database },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active tab based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveTab(`#${section}`);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b",
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-white/5 py-4 shadow-2xl"
          : "bg-transparent border-transparent py-8"
      )}
    >
      <div className="container mx-auto px-8 flex flex-col items-center justify-center gap-4">
        {/* Stylish Navigation Icons */}
        <div className="hidden md:flex items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeTab === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.href)}
                className={cn(
                  "relative p-4 rounded-full transition-all duration-500 group overflow-visible",
                  isActive ? "text-black scale-110" : "text-white/40 hover:text-white hover:scale-110"
                )}
              >
                {/* The "Circle Shape" on Click/Active */}
                {isActive && (
                  <motion.div
                    layoutId="nav-circle"
                    className="absolute inset-0 bg-primary rounded-full shadow-[0_0_30px_rgba(0,242,255,0.4)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-full border border-white/0 group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-500" />

                <div className="relative z-10 flex items-center justify-center">
                  <link.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                </div>

                {/* Tooltip */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black/80 border border-white/10 text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity uppercase tracking-widest whitespace-nowrap">
                  {link.name}
                </div>
              </a>
            );
          })}
        </div>

        {/* Brand Name below icons */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "hidden md:block font-black tracking-[0.5em] text-white uppercase transition-all duration-500",
            scrolled ? "text-xl mt-0" : "text-3xl mt-2"
          )}
        >
          SUDHAKAR
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex flex-col items-center gap-4">
          <div className="text-xl font-black tracking-widest text-white uppercase">SUDHAKAR</div>
          <button
            className="text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden absolute top-full right-6 w-64 bg-black/95 backdrop-blur-3xl border border-white/10 rounded-3xl mt-4 overflow-hidden shadow-2xl"
          >
            <div className="p-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveTab(link.href);
                  }}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-2xl transition-all",
                    activeTab === link.href ? "bg-primary text-black" : "text-white/60 hover:bg-white/5"
                  )}
                >
                  <link.icon size={20} />
                  <span className="font-bold uppercase tracking-tighter">{link.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
