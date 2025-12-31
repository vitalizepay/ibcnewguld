import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  // Section 1: Personal & Business Details
  fullName: string;
  companyName: string;
  role: string;
  industry: string;
  yearsInBusiness: string;
  websiteLinkedIn: string;
  email: string;
  mobile: string;
  // Section 2: Business Overview
  businessDescription: string;
  businessStage: string;
  // Section 3: Community Fit
  whyJoin: string;
  whatToGain: string;
  howContribute: string;
  // Section 4: Membership Selection
  membershipType: string;
  // Section 5: Engagement & Commitment
  willingToParticipate: boolean;
  understandsCurated: boolean;
  // Section 6: IBC Stories
  openToIBCStories: string;
  // Section 7: Declaration
  confirmAccurate: boolean;
}

const initialFormData: FormData = {
  fullName: "",
  companyName: "",
  role: "",
  industry: "",
  yearsInBusiness: "",
  websiteLinkedIn: "",
  email: "",
  mobile: "",
  businessDescription: "",
  businessStage: "",
  whyJoin: "",
  whatToGain: "",
  howContribute: "",
  membershipType: "",
  willingToParticipate: false,
  understandsCurated: false,
  openToIBCStories: "",
  confirmAccurate: false,
};

const steps = [
  { id: 1, title: "Personal & Business Details" },
  { id: 2, title: "Business Overview" },
  { id: 3, title: "Community Fit" },
  { id: 4, title: "Membership Selection" },
  { id: 5, title: "Engagement & Commitment" },
  { id: 6, title: "Declaration" },
];

export const ApplicationFormSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Application Received",
      description:
        "Thank you for applying to IBC. Your application will be reviewed and we will be in touch soon.",
    });
  };

  const progress = (currentStep / steps.length) * 100;

  return (
    <section id="apply" className="section-padding bg-ibc-green">
      <div className="container-width max-w-3xl" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-body text-sm uppercase tracking-widest text-ibc-gold mb-4 block">
            Join the Circle
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ibc-cream mb-6">
            Apply to Join IBC
          </h2>
          <p className="font-body text-lg text-ibc-cream/80 max-w-xl mx-auto">
            Membership is curated to preserve the integrity of the community.
            All applications are reviewed before confirmation.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-background rounded-sm p-6 md:p-10 shadow-xl"
        >
          {!isSubmitted ? (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="font-body text-sm text-muted-foreground">
                    Step {currentStep} of {steps.length}
                  </span>
                  <span className="font-body text-sm text-muted-foreground">
                    {steps[currentStep - 1].title}
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Form Steps */}
              <AnimatePresence mode="wait">
                {/* Step 1: Personal & Business Details */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) =>
                            updateFormData("fullName", e.target.value)
                          }
                          placeholder="Enter your full name"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            updateFormData("email", e.target.value)
                          }
                          placeholder="you@company.com"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="companyName">Company Name *</Label>
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) =>
                            updateFormData("companyName", e.target.value)
                          }
                          placeholder="Your company name"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="role">Your Role / Designation *</Label>
                        <Input
                          id="role"
                          value={formData.role}
                          onChange={(e) =>
                            updateFormData("role", e.target.value)
                          }
                          placeholder="CEO, Founder, MD, etc."
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="industry">Industry *</Label>
                        <Input
                          id="industry"
                          value={formData.industry}
                          onChange={(e) =>
                            updateFormData("industry", e.target.value)
                          }
                          placeholder="e.g., Technology, Real Estate"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="yearsInBusiness">
                          Years in Business *
                        </Label>
                        <Input
                          id="yearsInBusiness"
                          value={formData.yearsInBusiness}
                          onChange={(e) =>
                            updateFormData("yearsInBusiness", e.target.value)
                          }
                          placeholder="e.g., 5 years"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="mobile">Mobile Number *</Label>
                        <Input
                          id="mobile"
                          value={formData.mobile}
                          onChange={(e) =>
                            updateFormData("mobile", e.target.value)
                          }
                          placeholder="+971 XX XXX XXXX"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="websiteLinkedIn">
                          Website / LinkedIn (Optional)
                        </Label>
                        <Input
                          id="websiteLinkedIn"
                          value={formData.websiteLinkedIn}
                          onChange={(e) =>
                            updateFormData("websiteLinkedIn", e.target.value)
                          }
                          placeholder="https://..."
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Business Overview */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <Label htmlFor="businessDescription">
                        Briefly describe your business (2–3 lines) *
                      </Label>
                      <Textarea
                        id="businessDescription"
                        value={formData.businessDescription}
                        onChange={(e) =>
                          updateFormData("businessDescription", e.target.value)
                        }
                        placeholder="What does your company do? What problem do you solve?"
                        className="mt-1 min-h-[100px]"
                      />
                    </div>
                    <div>
                      <Label>What stage is your business currently in? *</Label>
                      <RadioGroup
                        value={formData.businessStage}
                        onValueChange={(value) =>
                          updateFormData("businessStage", value)
                        }
                        className="mt-3 space-y-3"
                      >
                        {["Early stage", "Growing", "Established"].map(
                          (stage) => (
                            <div
                              key={stage}
                              className="flex items-center space-x-3"
                            >
                              <RadioGroupItem value={stage} id={stage} />
                              <Label
                                htmlFor={stage}
                                className="font-normal cursor-pointer"
                              >
                                {stage}
                              </Label>
                            </div>
                          )
                        )}
                      </RadioGroup>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Community Fit */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <Label htmlFor="whyJoin">
                        Why do you want to join Indian Business Circle (IBC)? *
                      </Label>
                      <Textarea
                        id="whyJoin"
                        value={formData.whyJoin}
                        onChange={(e) =>
                          updateFormData("whyJoin", e.target.value)
                        }
                        placeholder="Tell us your motivation for joining..."
                        className="mt-1 min-h-[80px]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="whatToGain">
                        What do you hope to gain from the IBC community? *
                      </Label>
                      <Textarea
                        id="whatToGain"
                        value={formData.whatToGain}
                        onChange={(e) =>
                          updateFormData("whatToGain", e.target.value)
                        }
                        placeholder="What are your expectations?"
                        className="mt-1 min-h-[80px]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="howContribute">
                        How do you think you can contribute to the IBC
                        community? *
                      </Label>
                      <Textarea
                        id="howContribute"
                        value={formData.howContribute}
                        onChange={(e) =>
                          updateFormData("howContribute", e.target.value)
                        }
                        placeholder="Share your expertise, skills, or how you can add value..."
                        className="mt-1 min-h-[80px]"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Membership Selection */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <Label>Which membership are you applying for? *</Label>
                      <RadioGroup
                        value={formData.membershipType}
                        onValueChange={(value) =>
                          updateFormData("membershipType", value)
                        }
                        className="mt-4 space-y-4"
                      >
                        <div className="flex items-start space-x-3 p-4 border border-border rounded-sm hover:border-accent transition-colors">
                          <RadioGroupItem
                            value="founding"
                            id="founding"
                            className="mt-1"
                          />
                          <div>
                            <Label
                              htmlFor="founding"
                              className="font-semibold cursor-pointer"
                            >
                              Founding Membership
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              AED 1,500 (Year 1) • AED 1,080 locked forever •
                              Inner Circle access • Premium benefits
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 border border-border rounded-sm hover:border-accent transition-colors">
                          <RadioGroupItem
                            value="annual"
                            id="annual"
                            className="mt-1"
                          />
                          <div>
                            <Label
                              htmlFor="annual"
                              className="font-semibold cursor-pointer"
                            >
                              Annual Membership
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              AED 1,200/year • All workshops • Monthly meetups •
                              Standard benefits
                            </p>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                  </motion.div>
                )}

                {/* Step 5: Engagement & Commitment + IBC Stories */}
                {currentStep === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="willingToParticipate"
                          checked={formData.willingToParticipate}
                          onCheckedChange={(checked) =>
                            updateFormData(
                              "willingToParticipate",
                              checked === true
                            )
                          }
                        />
                        <Label
                          htmlFor="willingToParticipate"
                          className="font-normal cursor-pointer leading-relaxed"
                        >
                          I am willing to actively participate in workshops and
                          monthly meetups. *
                        </Label>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="understandsCurated"
                          checked={formData.understandsCurated}
                          onCheckedChange={(checked) =>
                            updateFormData(
                              "understandsCurated",
                              checked === true
                            )
                          }
                        />
                        <Label
                          htmlFor="understandsCurated"
                          className="font-normal cursor-pointer leading-relaxed"
                        >
                          I understand that IBC is a curated community and
                          applications are reviewed before approval. *
                        </Label>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Label>
                        Would you be open to sharing your business journey as
                        part of IBC Stories? (Optional)
                      </Label>
                      <RadioGroup
                        value={formData.openToIBCStories}
                        onValueChange={(value) =>
                          updateFormData("openToIBCStories", value)
                        }
                        className="mt-3 space-y-3"
                      >
                        {["Yes", "Maybe later"].map((option) => (
                          <div
                            key={option}
                            className="flex items-center space-x-3"
                          >
                            <RadioGroupItem
                              value={option}
                              id={`stories-${option}`}
                            />
                            <Label
                              htmlFor={`stories-${option}`}
                              className="font-normal cursor-pointer"
                            >
                              {option}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </motion.div>
                )}

                {/* Step 6: Declaration */}
                {currentStep === 6 && (
                  <motion.div
                    key="step6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="bg-muted/50 p-6 rounded-sm">
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                        Declaration
                      </h3>
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="confirmAccurate"
                          checked={formData.confirmAccurate}
                          onCheckedChange={(checked) =>
                            updateFormData("confirmAccurate", checked === true)
                          }
                        />
                        <Label
                          htmlFor="confirmAccurate"
                          className="font-normal cursor-pointer leading-relaxed"
                        >
                          I confirm that the information provided above is
                          accurate and complete. I understand that providing
                          false information may result in rejection or
                          revocation of membership. *
                        </Label>
                      </div>
                    </div>

                    <div className="text-center pt-4">
                      <p className="font-body text-sm text-muted-foreground">
                        By submitting this application, you agree to IBC's
                        membership terms and community guidelines.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-10 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="rounded-sm"
                >
                  Back
                </Button>
                {currentStep < steps.length ? (
                  <Button onClick={nextStep} className="rounded-sm gap-2">
                    Continue <ChevronRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!formData.confirmAccurate || isSubmitting}
                    className="btn-hero gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application <Check className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </>
          ) : (
            /* Success Message */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Application Received
              </h3>
              <p className="font-body text-muted-foreground max-w-md mx-auto">
                Thank you for applying to join IBC. Your application has been
                received and will be reviewed by our team. We will be in touch
                soon.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
