import { Card, CardContent } from "@/components/ui/card";

interface IndustryCardProps {
  name: string;
  icon: string;
  description: string;
}

export function IndustryCard({ name, icon, description }: IndustryCardProps) {
  return (
    <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="font-bold text-[#0B0A57] mb-2 font-poppins">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
