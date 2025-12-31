import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Coffee, Mic, Eye, Crown } from "lucide-react";
import workshopImage from "@/assets/workshop.jpg";
import coffeeImage from "@/assets/coffee-meeting.jpg";
import storyImage from "@/assets/founder-story.jpg";
import visibilityImage from "@/assets/member-intro.jpg";
import innerCircleImage from "@/assets/inner-circle.jpg";

const membershipBenefits = [
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Six power workshops every year covering leadership, growth, branding, sales, technology, AI, and decision-making. Each session is practical, actionable, and relevant.",
    image: workshopImage,
  },
  {
    icon: Coffee,
    title: "Monthly Coffee Networking",
    description:
      "Monthly meetups in a relaxed environment for meaningful conversations, business introductions, and relationship building within our trusted circle.",
    image: coffeeImage,
  },
  {
    icon: Mic,
    title: "IBC Stories",
    description:
      "Capture and showcase real business journeys—entrepreneur milestones, growth stories, lessons learned, challenges, turnarounds, and leadership insights.",
    image: storyImage,
  },
  {
    icon: Eye,
    title: "Member Visibility",
    description:
      "Be seen, heard, and remembered through business introductions, workshop visibility, and opportunities to share your journey. Visibility builds trust.",
    image: visibilityImage,
  },
  {
    icon: Crown,
    title: "Inner Circle",
    description:
      "A private, invite-only group for Founding Members. Direct access to fellow founders, peer-level discussions, early opportunities, and closed-door conversations.",
    image: innerCircleImage,
  },
];

export const MembershipCardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" className="section-padding bg-muted/30">
      <div className="container-width" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm uppercase tracking-widest text-accent mb-4 block">
            What You Get
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Inside the Membership
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Membership at IBC delivers continuous value throughout the year—
            learning, networking, visibility, and access to real opportunities.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {membershipBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group card-premium overflow-hidden ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-48 -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-6 overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 md:left-6">
                  <div className="w-12 h-12 rounded-sm bg-accent/90 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {benefit.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
