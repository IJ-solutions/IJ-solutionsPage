import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
}: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
      <CardHeader className="text-center pb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-[#0B0A57] to-[#0B0A57] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-navy-900 font-poppins">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-center text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {features.map((feature, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-[#0B0A57]/10 text-[#0B0A57] hover:bg-[#0B0A57]/20"
            >
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
