"use client";

import { useEffect, useState } from "react";

interface SEOCheck {
  name: string;
  status: "pass" | "fail" | "warning";
  message: string;
}

export function SEOChecklist() {
  const [checks, setChecks] = useState<SEOCheck[]>([]);

  useEffect(() => {
    const performSEOChecks = () => {
      const newChecks: SEOCheck[] = [];

      // Check for title tag
      const title = document.querySelector("title");
      newChecks.push({
        name: "Title Tag",
        status:
          title && title.textContent && title.textContent.length > 0
            ? "pass"
            : "fail",
        message: title
          ? `Title: "${title.textContent}" (${title.textContent?.length} chars)`
          : "No title tag found",
      });

      // Check for meta description
      const metaDesc = document.querySelector('meta[name="description"]');
      newChecks.push({
        name: "Meta Description",
        status: metaDesc && metaDesc.getAttribute("content") ? "pass" : "fail",
        message: metaDesc
          ? `Description: "${metaDesc.getAttribute("content")}" (${
              metaDesc.getAttribute("content")?.length
            } chars)`
          : "No meta description found",
      });

      // Check for canonical URL
      const canonical = document.querySelector('link[rel="canonical"]');
      newChecks.push({
        name: "Canonical URL",
        status: canonical ? "pass" : "warning",
        message: canonical
          ? `Canonical: ${canonical.getAttribute("href")}`
          : "No canonical URL found",
      });

      // Check for Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      const ogImage = document.querySelector('meta[property="og:image"]');

      newChecks.push({
        name: "Open Graph Tags",
        status: ogTitle && ogDesc && ogImage ? "pass" : "warning",
        message: `OG Title: ${!!ogTitle}, OG Description: ${!!ogDesc}, OG Image: ${!!ogImage}`,
      });

      // Check for structured data
      const structuredData = document.querySelector(
        'script[type="application/ld+json"]'
      );
      newChecks.push({
        name: "Structured Data",
        status: structuredData ? "pass" : "warning",
        message: structuredData
          ? "JSON-LD structured data found"
          : "No structured data found",
      });

      // Check for heading structure
      const h1 = document.querySelectorAll("h1");
      newChecks.push({
        name: "H1 Tag",
        status: h1.length === 1 ? "pass" : h1.length > 1 ? "warning" : "fail",
        message: `Found ${h1.length} H1 tag(s)`,
      });

      // Check for alt text on images
      const images = document.querySelectorAll("img");
      const imagesWithoutAlt = Array.from(images).filter(
        (img) => !img.getAttribute("alt")
      );
      newChecks.push({
        name: "Image Alt Text",
        status: imagesWithoutAlt.length === 0 ? "pass" : "warning",
        message: `${images.length - imagesWithoutAlt.length}/${
          images.length
        } images have alt text`,
      });

      setChecks(newChecks);
    };

    // Run checks after a short delay to ensure DOM is fully loaded
    setTimeout(performSEOChecks, 1000);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <h3 className="font-bold text-sm mb-2">SEO Checklist</h3>
      <div className="space-y-1 text-xs">
        {checks.map((check, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span
              className={`w-2 h-2 rounded-full ${
                check.status === "pass"
                  ? "bg-green-500"
                  : check.status === "warning"
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
            />
            <span className="font-medium">{check.name}:</span>
            <span className="text-gray-600 truncate">{check.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
