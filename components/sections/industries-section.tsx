import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const industries = [
  { name: "Healthcare", image: "/images/industries/health.jpg" },
  { name: "Education", image: "/images/industries/edu.jpg" },
  { name: "Retail", image: "/images/industries/retail.jpg" },
  { name: "Finance", image: "/images/industries/finance.jpg" },
  { name: "NGOs", image: "/images/industries/ngo.jpg" },
  { name: "Beauty", image: "/images/industries/beauty.jpg" },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="bg-white text-center py-3">
                <span className="text-gray-800 text-lg font-medium">
                  {industry.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
