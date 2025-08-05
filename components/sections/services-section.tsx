import { Badge } from "@/components/ui/badge";
import { ServiceCard } from "@/components/ui/service-card";
import { Code, Database, Bot, Headphones } from "lucide-react";

// Services configuration data
const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Tailored software solutions built with modern technologies to meet your unique business requirements and scale with your growth.",
    features: [
      "Web Applications",
      "Mobile Apps",
      "API Development",
      "Legacy Modernization",
    ],
  },
  {
    icon: Database,
    title: "SaaS Application Design & Management",
    description:
      "End-to-end SaaS solutions from concept to deployment, including architecture design, development, and ongoing management.",
    features: [
      "Multi-tenant Architecture",
      "Subscription Management",
      "Analytics & Reporting",
      "Auto-scaling",
    ],
  },
  {
    icon: Bot,
    title: "AI & Automation Solutions",
    description:
      "Intelligent automation and AI-powered solutions to streamline operations, reduce costs, and enhance decision-making processes.",
    features: [
      "Process Automation",
      "Machine Learning",
      "Chatbots",
      "Data Analytics",
    ],
  },
  {
    icon: Headphones,
    title: "Dedicated IT Support Services",
    description:
      "24/7 technical support, system maintenance, and proactive monitoring to ensure your IT infrastructure runs smoothly.",
    features: [
      "24/7 Monitoring",
      "Help Desk Support",
      "Security Updates",
      "Disaster Recovery",
    ],
  },
];

/**
 * Services Section Component
 * Displays the main services offered by the company in a grid layout
 * Features: Service cards with icons, descriptions, and feature badges
 */
export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#0B0A57]/10 text-white hover:bg-[#0B0A57]/20 border-[#0B0A57]/20">
            Our Services
          </Badge>
          <h2 className="text-4xl font-bold text-[#0B0A57] mb-4 font-poppins">
            Comprehensive IT Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From custom software development to AI-powered automation, we
            deliver innovative solutions that drive your business forward.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
