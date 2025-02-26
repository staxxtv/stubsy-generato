
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for occasional use",
    features: [
      "3 paystubs per month",
      "Basic templates",
      "Download as PDF",
      "Standard calculations",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19/mo",
    description: "Great for small businesses",
    features: [
      "Unlimited paystubs",
      "All templates",
      "Multiple download formats",
      "Advanced calculations",
      "Priority support",
      "Custom branding",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Bulk generation",
      "API access",
      "Custom templates",
      "Dedicated support",
      "SSO integration",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Simple Pricing</h1>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that works best for you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-lg p-8 ${
                tier.highlighted
                  ? "bg-primary text-primary-foreground ring-2 ring-primary"
                  : "bg-card"
              }`}
            >
              <h3 className="text-2xl font-bold">{tier.name}</h3>
              <p className="mt-4 text-3xl font-bold">{tier.price}</p>
              <p className="mt-2 text-sm opacity-90">{tier.description}</p>
              <ul className="mt-8 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full mt-8 ${
                  tier.highlighted ? "bg-background text-foreground" : ""
                }`}
                variant={tier.highlighted ? "secondary" : "default"}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
