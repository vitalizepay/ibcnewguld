import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const idealFor = [
  "Founders & Co-founders",
  "CEOs & Managing Directors",
  "Business Owners & Partners",
  "Senior Decision-makers",
  "Those who value serious growth",
  "Those seeking trusted connections",
  "Those building long-term relationships",
];

const notFor = [
  "Students or fresh graduates",
  "Job seekers",
  "Those looking for quick transactional networking",
  "Those not committed to active participation",
];

export const WhoItsForSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-width" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm uppercase tracking-widest text-accent mb-4 block">
            Is IBC Right for You?
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Who IBC is For
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            IBC is curated for specific business leaders who share our values
            of trust, growth, and meaningful connection.
          </p>
        </motion.div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Ideal For */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-card rounded-sm p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Ideal For
              </h3>
            </div>
            <ul className="space-y-4">
              {idealFor.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-body text-sm text-foreground">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not For */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card rounded-sm p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Not For
              </h3>
            </div>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <span className="font-body text-sm text-muted-foreground">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Divider line animation placeholder */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-px bg-border mt-6 origin-left"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
