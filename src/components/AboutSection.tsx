import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import roundtableImage from "@/assets/roundtable.jpg";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-width">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="font-body text-sm uppercase tracking-widest text-accent mb-4 block">
              Our Community
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              A Circle of Trust for{" "}
              <span className="text-ibc-gold">Indian Business Leaders</span>
            </h2>
            <div className="space-y-5 text-muted-foreground font-body text-base md:text-lg leading-relaxed">
              <p>
                Indian Business Circle (IBC) is a private, member-led business
                community built for Indian entrepreneurs and business leaders
                in the UAE.
              </p>
              <p>
                IBC is not a mass networking group. It is a circle of trust
                designed to foster meaningful connections, shared learning,
                and real business growth within the Indian business ecosystem.
              </p>
              <p>
                Our members value quality conversations, consistent engagement,
                and relationships that compound over time.
              </p>
            </div>

            {/* The IBC Difference */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 p-6 bg-card rounded-sm border-l-4 border-accent"
            >
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                The IBC Difference
              </h3>
              <p className="text-muted-foreground font-body text-sm md:text-base">
                IBC offers a curated, founder-focused community with structured
                learning and consistent networking. We prioritize small,
                high-quality interactions over large events and focus on
                building long-term relationships. Trust, collaboration, and
                real outcomes form the foundation of the IBC experience.
              </p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <img
                src={roundtableImage}
                alt="IBC founders in intimate roundtable discussion"
                className="w-full h-auto rounded-sm shadow-lift object-cover aspect-[4/3]"
              />
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-sm -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-accent rounded-sm -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
