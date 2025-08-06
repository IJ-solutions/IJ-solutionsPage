import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutSnapshotSection() {
  return (
    <section className="py-20 bg-[#0B0A57] text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-white/20 text-white hover:bg-white/30 border-white/20">
              About I&J Solutions
            </Badge>
            <h2 className="text-4xl font-bold font-poppins">
              Transforming Ideas into Digital Reality
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Founded on the principles of innovation and excellence, I&J
              Solutions Ltd is your trusted partner in digital transformation.
              We combine deep technical expertise with strategic business
              insight to deliver solutions that not only meet today&apos;s needs
              but anticipate tomorrow&apos;s challenges.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-white" />
                <span>Expert team of certified developers and consultants</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-white" />
                <span>Agile development methodology for faster delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-white" />
                <span>24/7 support and maintenance services</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-white" />
                <span>Proven track record across multiple industries</span>
              </div>
            </div>

            {/* Custom Button as Link */}
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-4 bg-white text-navy-900 hover:bg-navy-900 hover:text-white transition-colors text-base font-medium rounded-md"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5 transition-colors" />
            </Link>
          </div>

          <div className="relative">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2 font-poppins">
                      5+
                    </div>
                    <div className="text-sm text-blue-200">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2 font-poppins">
                      50+
                    </div>
                    <div className="text-sm text-blue-200">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2 font-poppins">
                      25+
                    </div>
                    <div className="text-sm text-blue-200">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2 font-poppins">
                      98%
                    </div>
                    <div className="text-sm text-blue-200">Success Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
