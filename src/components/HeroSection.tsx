import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-business.jpg";

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Indian business leaders in Dubai"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay - darker to highlight content */}
        <div className="absolute inset-0 bg-gradient-to-b from-ibc-charcoal/85 via-ibc-charcoal/75 to-ibc-charcoal/90" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container-width text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-ibc-cream mb-6 leading-tight">
            Meet. Connect.{" "}
            <span className="text-ibc-gold">Grow.</span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-body text-lg md:text-xl lg:text-2xl text-ibc-cream/90 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            A curated business community for Indian founders, CEOs, and
            entrepreneurs in the UAE.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection("#apply")}
              className="btn-hero min-w-[200px]"
            >
              Apply to Join IBC
            </Button>
            <Button
              onClick={() => scrollToSection("#flywheel")}
              variant="outline"
              className="min-w-[200px] bg-transparent border-2 border-ibc-cream text-ibc-cream hover:bg-ibc-cream/10 px-8 py-4 text-lg rounded-sm transition-all duration-300"
            >
              How IBC Works
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("#about")}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-ibc-cream/70 hover:text-ibc-gold transition-colors"
          aria-label="Scroll to learn more"
        >
          <ArrowDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};
