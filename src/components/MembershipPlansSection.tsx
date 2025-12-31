import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const foundingBenefits = [
  "AED 1,500 (Year 1)",
  "Locked at AED 1,080 lifetime renewal",
  "3 Free Workshops per year",
  "3 Workshops at 25% Discount",
  "Priority Seating & Registration",
  "Premium Business Listing",
  "Annual Business Spotlight",
  "Access to Inner Circle",
  "Priority Member Visibility",
  "15% Discount on CEO Dinners",
  "Founding Member Badge (Lifetime)",
  "VIP Check-in at Events",
];

const annualBenefits = [
  "AED 1,200 per year",
  "AED 1,200 standard renewal",
  "1 Free Workshop per year",
  "Access to all 6 Workshops",
  "Monthly Coffee Meetups",
  "Standard Business Listing",
  "Community Networking",
  "5% Discount on Events",
  "IBC Stories Feature Opportunity",
];

export const MembershipPlansSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToApply = () => {
    const element = document.querySelector("#apply");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="membership" className="section-padding bg-background">
      <div className="container-width" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm uppercase tracking-widest text-accent mb-4 block">
            Join the Circle
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Membership Plans
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Membership is curated to maintain quality and relevance. All
            applications are reviewed before confirmation.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Founding Membership - Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            {/* Featured Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <div className="bg-accent text-accent-foreground px-4 py-1 rounded-sm font-body text-sm font-medium flex items-center gap-2">
                <Star className="w-4 h-4" /> Limited Availability
              </div>
            </div>

            <div className="h-full bg-card rounded-sm border-2 border-accent animate-pulse-border p-8 md:p-10 shadow-gold">
              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-2">
                  Founding Membership
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-heading text-4xl md:text-5xl font-bold text-accent">
                    AED 1,500
                  </span>
                  <span className="text-muted-foreground font-body text-sm">
                    /year 1
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground mt-2">
                  Then AED 1,080/year locked forever
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {foundingBenefits.slice(2).map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-foreground">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToApply}
                className="w-full btn-hero py-4"
              >
                Apply for Founding Membership
              </Button>
            </div>
          </motion.div>

          {/* Annual Membership */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full"
          >
            <div className="h-full bg-card rounded-sm border border-border p-8 md:p-10 shadow-card">
              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-2">
                  Annual Membership
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                    AED 1,200
                  </span>
                  <span className="text-muted-foreground font-body text-sm">
                    /year
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground mt-2">
                  Standard renewal rate
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {annualBenefits.slice(2).map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-foreground">
                      {benefit}
                    </span>
                  </li>
                ))}
                {/* What's not included */}
                <li className="flex items-start gap-3 opacity-50">
                  <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-muted-foreground">
                    Inner Circle Access
                  </span>
                </li>
                <li className="flex items-start gap-3 opacity-50">
                  <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-muted-foreground">
                    Priority Registration
                  </span>
                </li>
              </ul>

              <Button
                onClick={scrollToApply}
                variant="outline"
                className="w-full py-4 rounded-sm border-2 border-border hover:border-accent hover:bg-accent/5 transition-all"
              >
                Apply for Annual Membership
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 font-body text-sm text-muted-foreground max-w-xl mx-auto"
        >
          Founding Membership is limited and available only to early members.
          Once slots are filled, this tier will no longer be available.
        </motion.p>
      </div>
    </section>
  );
};
