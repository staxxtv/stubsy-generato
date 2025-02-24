
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";

interface PaystubTemplateProps {
  id: string;
  name: string;
  preview: string;
  selected: boolean;
  onSelect: (id: string) => void;
}

export const PaystubTemplate = ({
  id,
  name,
  preview,
  selected,
  onSelect,
}: PaystubTemplateProps) => {
  return (
    <Card
      className={cn(
        "relative cursor-pointer transition-all hover:shadow-md",
        selected && "ring-2 ring-primary"
      )}
      onClick={() => onSelect(id)}
    >
      <div className="aspect-[1.4] overflow-hidden rounded-t-lg">
        <img
          src={preview}
          alt={name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{name}</h3>
      </div>
      {selected && (
        <div className="absolute right-2 top-2 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center">
          <CheckIcon className="h-4 w-4" />
        </div>
      )}
    </Card>
  );
};
