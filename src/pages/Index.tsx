import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const reviews = [
  {
    text: "Best paystub generator I've ever used. Simple and professional.",
    author: "Sarah Johnson",
    role: "Business Owner",
  },
  {
    text: "Saves me hours every month. The calculations are always accurate.",
    author: "Michael Chen",
    role: "HR Manager",
  },
  {
    text: "Clean interface and instant generation. Exactly what I needed.",
    author: "David Smith",
    role: "Accountant",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-down">
            Professional Pay Stubs
            <span className="text-primary block mt-2">In Seconds</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 animate-fade-up">
            Generate professional paystubs, W2s, and 1099 forms instantly.
            Accurate calculations, beautiful designs, and instant downloads.
          </p>
          <div className="mt-10 animate-fade-up">
            <Link to="/creator">
              <Button size="lg" className="text-lg px-8 py-6">
                Create Paystub Now
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trusted by Thousands
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-primary"
                      size={20}
                      fill="#10B981"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.text}</p>
                <div>
                  <p className="font-medium">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Why Choose Bolt Stubs?</h2>
            <p className="mt-4 text-lg text-gray-600">
              The fastest and most reliable way to generate professional pay stubs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Instant Generation",
                description:
                  "Create professional paystubs in seconds with our easy-to-use interface",
              },
              {
                title: "100% Accurate",
                description:
                  "Automatic tax calculations based on the latest rates and regulations",
              },
              {
                title: "Multiple Formats",
                description:
                  "Download your documents in multiple formats including PDF and JPG",
              },
            ].map((feature, index) => (
              <div key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Generate Your Pay Stub?
          </h2>
          <Link to="/creator">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 bg-white text-primary hover:bg-gray-100"
            >
              Get Started Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500">
              All rights reserved. © Bolt Stubs 2025
            </div>
            
            <div className="flex gap-6">
              <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-700">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-700">
                Privacy policy
              </Link>
              <Link to="/refund" className="text-sm text-gray-500 hover:text-gray-700">
                Refund policy
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <img 
                src="/lovable-uploads/1b4258fa-a104-41a4-a053-b611eee86c30.png" 
                alt="Security and Payment Methods" 
                className="h-8 object-contain"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
