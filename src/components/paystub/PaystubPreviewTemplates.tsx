
import { cn } from "@/lib/utils";

interface PaystubStyleProps {
  templateId: string;
  children: React.ReactNode;
}

export const PaystubPreviewTemplate = ({ templateId, children }: PaystubStyleProps) => {
  const templates = {
    "modern-blue": "bg-white border-[#0EA5E9] text-[#1E293B]",
    "minimal-dark": "bg-[#1E293B] text-white border-gray-600",
    "corporate-pro": "bg-white border-[#403E43] text-[#403E43]",
    "tech-startup": "bg-white border-[#8B5CF6] text-[#1E293B]",
    "gradient-modern": "bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] text-[#1E293B]",
    "classic-plus": "bg-white border-[#8E9196] text-[#403E43]"
  };

  return (
    <div className={cn(
      "w-full p-4 rounded-lg shadow-lg",
      templates[templateId as keyof typeof templates]
    )}>
      {children}
    </div>
  );
};
