
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { PaystubTemplate } from "@/components/paystub/PaystubTemplate";
import { EmployeeForm, EmployeeFormData } from "@/components/paystub/EmployeeForm";
import { EarningsForm, EarningsFormData } from "@/components/paystub/EarningsForm";
import { PaystubPreview } from "@/components/paystub/PaystubPreview";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const templates = [
  {
    id: "modern-blue",
    name: "Modern Blue",
    preview: "/lovable-uploads/bb5e4f6c-fba6-44e9-bd8e-1523fd4d7b5a.png",
    description: "Clean and professional design with blue accents",
    category: "Featured"
  },
  {
    id: "minimal-dark",
    name: "Minimal Dark",
    preview: "/lovable-uploads/9fd093fc-9d58-412d-ba4a-c59b43ae8d49.png",
    description: "Sleek dark theme with white text",
    category: "Modern"
  },
  {
    id: "corporate-pro",
    name: "Corporate Pro",
    preview: "/placeholder.svg",
    description: "Traditional corporate style with modern elements",
    category: "Corporate"
  },
  {
    id: "tech-startup",
    name: "Tech Startup",
    preview: "/placeholder.svg",
    description: "Modern design for tech companies",
    category: "Featured"
  },
  {
    id: "gradient-modern",
    name: "Gradient Modern",
    preview: "/placeholder.svg",
    description: "Contemporary design with gradient accents",
    category: "Modern"
  },
  {
    id: "classic-plus",
    name: "Classic Plus",
    preview: "/placeholder.svg",
    description: "Enhanced classic design for traditional businesses",
    category: "Corporate"
  }
];

const Creator = () => {
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [employeeData, setEmployeeData] = useState<EmployeeFormData | null>(null);
  const [earningsData, setEarningsData] = useState<EarningsFormData | null>(null);
  const { toast } = useToast();

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  const handleTemplateSubmit = () => {
    if (!selectedTemplate) {
      toast({
        title: "Template Required",
        description: "Please select a template to continue",
        variant: "destructive",
      });
      return;
    }
    setStep(2);
  };

  const handleEmployeeSubmit = (data: EmployeeFormData) => {
    setEmployeeData(data);
    setStep(3);
  };

  const handleEarningsSubmit = (data: EarningsFormData) => {
    setEarningsData(data);
    toast({
      title: "Success!",
      description: "Your paystub is ready to be generated.",
    });
    // Here we would handle the final submission and PDF generation
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        <div className="space-y-8">
          <nav aria-label="Progress">
            <ol className="flex items-center justify-center">
              {[
                { id: 1, name: "Template" },
                { id: 2, name: "Details" },
                { id: 3, name: "Earnings" },
              ].map((s) => (
                <li
                  key={s.id}
                  className={`relative ${
                    s.id !== 3 ? "pr-8 sm:pr-20" : ""
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`${
                        step >= s.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-gray-200"
                      } rounded-full flex items-center justify-center h-8 w-8 font-medium`}
                    >
                      {s.id}
                    </div>
                    <span className="ml-4 text-sm font-medium text-gray-900">
                      {s.name}
                    </span>
                  </div>
                  {s.id !== 3 && (
                    <div className="hidden sm:block absolute top-4 right-0 w-full">
                      <div className="h-0.5 bg-gray-200" />
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold">Choose a Template</h2>
                    <p className="text-gray-600 mt-2">
                      Select a professional template for your paystub
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {["All", "Featured", "Modern", "Corporate"].map(
                      (filter) => (
                        <Button
                          key={filter}
                          variant={filter === "Featured" ? "default" : "outline"}
                          className="rounded-full"
                        >
                          {filter}
                        </Button>
                      )
                    )}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {templates.map((template) => (
                      <PaystubTemplate
                        key={template.id}
                        {...template}
                        selected={selectedTemplate === template.id}
                        onSelect={handleTemplateSelect}
                      />
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <Button onClick={handleTemplateSubmit}>Next</Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <EmployeeForm
                  onSubmit={handleEmployeeSubmit}
                  onBack={() => setStep(1)}
                />
              )}

              {step === 3 && (
                <EarningsForm
                  onSubmit={handleEarningsSubmit}
                  onBack={() => setStep(2)}
                />
              )}
            </div>

            <div className="hidden md:block sticky top-24">
              <PaystubPreview
                employeeData={employeeData}
                earningsData={earningsData}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creator;
