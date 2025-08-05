import { Badge } from "@/components/ui/badge";
import { FeatureCard } from "@/components/ui/feature-card";
import { Bot, Shield, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Driven Innovation",
    description:
      "Leverage cutting-edge AI and machine learning technologies to stay ahead of the competition.",
  },
  {
    icon: Shield,
    title: "Secure & Scalable Systems",
    description:
      "Enterprise-grade security and scalable architecture designed to grow with your business.",
  },
  {
    icon: Zap,
    title: "Industry-Specific Expertise",
    description:
      "Deep understanding of healthcare, education, retail, finance, and NGO sector requirements.",
  },
  {
    icon: Users,
    title: "Proven Reliability",
    description:
      "Track record of successful project delivery with 98% client satisfaction rate.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#0B0A57]/10 text-white hover:bg-[#0B0A57]/20 border-[#0B0A57]/20">
            Why Choose I&J Solutions
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 mb-4 font-poppins">
            Your Trusted Technology Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver
            solutions that not only work but drive real results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
