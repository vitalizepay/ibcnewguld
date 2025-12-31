import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Mail, Phone } from "lucide-react";

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="bg-ibc-charcoal py-16">
      <div className="container-width" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span className="font-heading text-2xl font-semibold text-ibc-cream">
                IBC{" "}
                <span className="font-normal">Indian Business Circle</span>
              </span>
              <p className="text-xs tracking-widest uppercase text-ibc-cream/50 mt-1">
                Dubai
              </p>
            </div>
            <p className="font-body text-sm text-ibc-cream/70 leading-relaxed max-w-sm">
              A curated business community for Indian founders, CEOs, and
              entrepreneurs in the UAE. Building trust, fostering growth, and
              creating meaningful connections.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-ibc-cream mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About IBC", href: "#about" },
                { label: "How It Works", href: "#flywheel" },
                { label: "Membership", href: "#membership" },
                { label: "Apply to Join", href: "#apply" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-ibc-cream/70 hover:text-ibc-gold transition-colors link-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-ibc-cream mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-ibc-gold" />
                <a
                  href="https://ibcgulf.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-ibc-cream/70 hover:text-ibc-gold transition-colors"
                >
                  ibcgulf.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-ibc-gold" />
                <a
                  href="mailto:contact@ibcgulf.com"
                  className="font-body text-sm text-ibc-cream/70 hover:text-ibc-gold transition-colors"
                >
                  contact@ibcgulf.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-ibc-gold" />
                <a
                  href="tel:+971585570593"
                  className="font-body text-sm text-ibc-cream/70 hover:text-ibc-gold transition-colors"
                >
                  +971 58 557 0593
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-ibc-cream/20 my-10 origin-left"
        />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="font-body text-xs text-ibc-cream/50">
            © {new Date().getFullYear()} Indian Business Circle. All rights
            reserved.
          </p>
          <p className="font-body text-xs text-ibc-cream/50">
            Meet. Connect. Grow.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
