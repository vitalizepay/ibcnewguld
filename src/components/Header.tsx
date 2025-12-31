import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "How IBC Works", href: "#flywheel" },
  { label: "Membership", href: "#membership" },
  { label: "Apply", href: "#apply" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container-width">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <span
              className={`font-heading text-xl md:text-2xl font-semibold tracking-wide transition-colors duration-300 ${
                isScrolled ? "text-ibc-green" : "text-ibc-cream"
              }`}
            >
              IBC{" "}
              <span className="font-normal">Indian Business Circle</span>
            </span>
            <span
              className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                isScrolled
                  ? "text-muted-foreground"
                  : "text-ibc-cream/60"
              }`}
            >
              Dubai
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => scrollToSection(link.href)}
                className={`font-body text-sm font-medium tracking-wide link-underline transition-colors duration-300 ${
                  isScrolled
                    ? "text-foreground hover:text-accent"
                    : "text-ibc-cream hover:text-ibc-gold"
                }`}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                onClick={() => scrollToSection("#apply")}
                className={`rounded-sm px-6 py-2 font-medium transition-all duration-300 ${
                  isScrolled
                    ? "bg-accent text-accent-foreground hover:shadow-gold"
                    : "bg-ibc-gold text-ibc-charcoal hover:bg-ibc-gold-light"
                }`}
              >
                Apply to Join
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-ibc-cream"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border"
          >
            <nav className="container-width py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left font-body text-base font-medium text-foreground hover:text-accent transition-colors py-2"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#apply")}
                className="mt-4 w-full bg-accent text-accent-foreground hover:shadow-gold rounded-sm"
              >
                Apply to Join
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
