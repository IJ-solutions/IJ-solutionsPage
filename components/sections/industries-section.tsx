import { Badge } from "@/components/ui/badge";
import { IndustryCard } from "@/components/ui/industry-card";

const industries = [
  { name: "Healthcare", icon: "🏥", description: "HIPAA-compliant solutions" },
  { name: "Education", icon: "🎓", description: "Learning management systems" },
  { name: "Retail", icon: "🛍️", description: "E-commerce platforms" },
  { name: "Finance", icon: "💰", description: "Secure financial systems" },
  { name: "NGOs", icon: "🤝", description: "Impact-driven solutions" },
];

export function IndustriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#0B0A57]/10 text-white hover:bg-[#0B0A57]/20 border-[#0B0A57]/20">
            Industries We Serve
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 mb-4 font-poppins">
            Specialized Solutions Across Sectors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expertise spans multiple industries, delivering tailored
            solutions that address specific sector challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              name={industry.name}
              icon={industry.icon}
              description={industry.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
