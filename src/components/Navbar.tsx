import { useState, useEffect } from "react";
import { Menu, X, Home, User, Database, Briefcase, Mail } from "lucide-react";
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
          ? "bg-black/80 backdrop-blur-xl border-white/5 py-3 md:py-4 shadow-2xl"
          : "bg-transparent border-transparent py-4 md:py-8"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center gap-2 md:gap-4">
        {/* Desktop Navigation Icons */}
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
                {isActive && (
                  <motion.div
                    layoutId="nav-circle"
                    className="absolute inset-0 bg-primary rounded-full shadow-[0_0_30px_rgba(0,242,255,0.4)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="absolute inset-0 rounded-full border border-white/0 group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-500" />
                <div className="relative z-10 flex items-center justify-center">
                  <link.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black/80 border border-white/10 text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity uppercase tracking-widest whitespace-nowrap">
                  {link.name}
                </div>
              </a>
            );
          })}
        </div>

        {/* Mobile Navigation Icons - Same Style as Desktop */}
        <div className="md:hidden flex items-center gap-1.5 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeTab === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.href)}
                className={cn(
                  "relative p-2.5 rounded-full transition-all duration-500 overflow-visible",
                  isActive ? "text-black scale-105" : "text-white/40 active:text-white active:scale-105"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-circle-mobile"
                    className="absolute inset-0 bg-primary rounded-full shadow-[0_0_20px_rgba(0,242,255,0.4)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="relative z-10 flex items-center justify-center">
                  <link.icon size={16} strokeWidth={isActive ? 2.5 : 2} />
                </div>
              </a>
            );
          })}
        </div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "font-black tracking-[0.3em] md:tracking-[0.5em] text-white uppercase transition-all duration-500",
            scrolled ? "text-sm md:text-xl mt-0" : "text-base md:text-3xl mt-1 md:mt-2"
          )}
        >
          SUDHAKAR
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
