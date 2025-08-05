import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="text-center group">
      <div className="w-20 h-20 bg-gradient-to-br from-[#0B0A57] to-[#0B0A57] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
        <Icon className="h-10 w-10 text-white" />
      </div>
      <h3 className="text-xl font-bold text-navy-900 mb-3 font-poppins">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
