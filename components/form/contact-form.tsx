"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setIsSubmitted(true);

    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <Card className="border-0 shadow-xl">
        <CardContent className="text-center py-12 px-6 sm:px-12">
          <div className="w-16 h-16 bg-[#0B0A57]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-[#0B0A57]" />
          </div>
          <h3 className="text-2xl font-bold text-[#0B0A57] mb-4 font-poppins">
            Thank You for Your Message!
          </h3>
          <p className="text-gray-600 mb-6">
            We&apos;ve received your inquiry and will get back to you within 24
            hours. Our team is excited to discuss your project!
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-[#0B0A57] text-[#0B0A57] hover:bg-[#0B0A57] hover:text-white"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-xl">
      <CardHeader className="text-center pb-8 px-4 sm:px-8">
        <CardTitle className="text-2xl sm:text-3xl font-bold text-[#0B0A57] font-poppins">
          Start Your Project Today
        </CardTitle>
        <CardDescription className="text-base sm:text-lg text-gray-600">
          Fill out the form below and we&apos;ll get back to you within 24 hours
          with a customized solution for your needs.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-4 sm:p-8 pt-0">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-[#0B0A57] font-medium">
                First Name *
              </Label>
              <Input
                id="firstName"
                name="firstName"
                required
                placeholder="Enter your first name"
                className="border-gray-300 focus:border-[#0B0A57] focus:ring-[#0B0A57]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-[#0B0A57] font-medium">
                Last Name *
              </Label>
              <Input
                id="lastName"
                name="lastName"
                required
                placeholder="Enter your last name"
                className="border-gray-300 focus:border-[#0B0A57] focus:ring-[#0B0A57]"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#0B0A57] font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email address"
                className="border-gray-300 focus:border-[#0B0A57] focus:ring-[#0B0A57]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#0B0A57] font-medium">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="border-gray-300 focus:border-[#0B0A57] focus:ring-[#0B0A57]"
              />
            </div>
          </div>

          {/* Company & Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <Label htmlFor="company" className="text-[#0B0A57] font-medium">
                Company Name
              </Label>
              <Input
                id="company"
                name="company"
                placeholder="Enter your company name"
                className="border-gray-300 focus:border-[#0B0A57] focus:ring-[#0B0A57]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service" className="text-[#0B0A57] font-medium">
                Service Interested In *
              </Label>
              <Select name="service" required>
                <SelectTrigger className="border-gray-300 focus:border-[#0B0A57] focus:ring-[#0B0A57]">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="custom-development">
                    Custom Software Development
                  </SelectItem>
                  <SelectItem value="saas-design">
                    SaaS Application Design & Management
                  </SelectItem>
                  <SelectItem value="ai-automation">
                    AI & Automation Solutions
                  </SelectItem>
                  <SelectItem value="it-support">
                    Dedicated IT Support Services
                  </SelectItem>
                  <SelectItem value="consulting">IT Consulting</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-[#0B0A57] font-medium">
              Project Description *
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Describe your project requirements, goals, and any specific features you need..."
              className="border-gray-300 focus:border-[#0B0A57] focus:ring-[#0B0A57]"
            />
          </div>

          {/* Terms (Mobile-Optimized) */}
          <div className="flex items-start gap-3">
            <Checkbox
              id="terms"
              name="terms"
              required
              className="mt-1 border-gray-300 data-[state=checked]:bg-[#0B0A57] data-[state=checked]:border-[#0B0A57]"
            />
            <Label
              htmlFor="terms"
              className="text-sm text-gray-600 leading-snug"
            >
              I agree to the{" "}
              <Link href="/terms" className="text-[#0B0A57] hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-[#0B0A57] hover:underline">
                Privacy Policy
              </Link>{" "}
              *
            </Label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            disabled={isLoading}
            className="w-full bg-[#0B0A57] hover:bg-[#0B0A57]/90 text-white py-4 text-base sm:text-lg font-semibold"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>

          <p className="text-sm text-gray-500 text-center">
            We typically respond within 24 hours. For urgent inquiries, please
            call us directly.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
