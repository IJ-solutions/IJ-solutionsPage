import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/form/contact-form";

export function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#0B0A57]/10 text-white hover:bg-[#0B0A57]/20 border-[#0B0A57]/20">
            Get In Touch
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 mb-4 font-poppins">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let`s discuss how our innovative solutions can help you achieve your
            goals. Contact us today for a free consultation.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
