import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import flywheelImage from "/images/ibc-flywheel.png";

const flywheelSteps = [
  {
    title: "Curated Members",
    description:
      "Carefully selected founders, CEOs, and decision-makers who share values of trust and growth.",
  },
  {
    title: "Continuous Learning",
    description:
      "Six power workshops annually covering leadership, growth strategies, AI, and business mastery.",
  },
  {
    title: "Meaningful Connections",
    description:
      "Monthly coffee meetups and events designed for genuine relationship building.",
  },
  {
    title: "IBC Stories",
    description:
      "Authentic Indian business narratives that inspire, educate, and strengthen the community.",
  },
  {
    title: "Stronger Community",
    description:
      "Every interaction builds familiarity, familiarity builds trust, and trust creates opportunity.",
  },
  {
    title: "More Opportunities",
    description:
      "Quality compounds into collaborations, referrals, and growth for all members.",
  },
];

export const FlywheelSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="flywheel"
      className="section-padding bg-ibc-green relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-ibc-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-ibc-gold rounded-full blur-3xl" />
      </div>

      <div className="container-width relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm uppercase tracking-widest text-ibc-gold mb-4 block">
            How IBC Works
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ibc-cream mb-6">
            The IBC Value Flywheel
          </h2>
          <p className="font-body text-lg text-ibc-cream/80 max-w-2xl mx-auto">
            Quality compounds. When curated members connect meaningfully, trust
            grows, and opportunities multiply for everyone.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Flywheel Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center order-2 lg:order-1"
          >
            <div className="relative">
              {/* Subtle glow behind the image */}
              <div className="absolute inset-0 bg-ibc-gold/10 rounded-full blur-3xl scale-75" />
              <img
                src={flywheelImage}
                alt="The IBC Value Flywheel - Curated Members, Learning, Connections, Stories, Community, Opportunities"
                className="w-full max-w-lg h-auto relative z-10 drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Flywheel Steps */}
          <div className="space-y-6">
            {flywheelSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ibc-gold/20 flex items-center justify-center border border-ibc-gold/40 group-hover:bg-ibc-gold/30 transition-colors">
                  <span className="font-heading text-lg font-semibold text-ibc-gold">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-ibc-cream mb-1 group-hover:text-ibc-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-ibc-cream/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mt-16 font-body text-lg text-ibc-cream/80 max-w-3xl mx-auto italic"
        >
          "Curated members → Learning → Connections → Visibility → IBC Stories →
          Stronger community → More opportunities"
        </motion.p>
      </div>
    </section>
  );
};
