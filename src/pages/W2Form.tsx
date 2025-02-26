import { useState } from "react";
import { useForm } from "react-hook-form";
import { W2FormData } from "@/types/w2";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { W2Preview } from "@/components/w2/W2Preview";
import { useToast } from "@/hooks/use-toast";

const W2Form = () => {
  const { register, handleSubmit, watch } = useForm<W2FormData>();
  const { toast } = useToast();
  const formData = watch();

  const onSubmit = (data: W2FormData) => {
    toast({
      title: "W2 Form Generated",
      description: "Your W2 form has been generated and is ready for download.",
    });
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">W2 Form Generator</h1>
              <p className="mt-2 text-gray-600">
                Fill out the information below to generate your W2 form
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <Card className="p-6 space-y-6">
                <h2 className="font-semibold text-lg">Employee & Employer Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="employeeSsn">Social Security Number</Label>
                    <Input id="employeeSsn" {...register("employeeSsn")} placeholder="XXX-XX-XXXX" />
                  </div>
                  <div>
                    <Label htmlFor="employerEin">Employer EIN</Label>
                    <Input id="employerEin" {...register("employerEin")} placeholder="XX-XXXXXXX" />
                  </div>

                  <h3 className="font-semibold">Employer Information</h3>
                  <div>
                    <Label htmlFor="employerName">Employer Name</Label>
                    <Input id="employerName" {...register("employerName")} placeholder="Company Name" />
                  </div>
                  <div>
                    <Label htmlFor="employerStreet">Street Address</Label>
                    <Input id="employerStreet" {...register("employerStreet")} placeholder="123 Main St" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="employerCity">City</Label>
                      <Input id="employerCity" {...register("employerCity")} />
                    </div>
                    <div>
                      <Label htmlFor="employerState">State</Label>
                      <Input id="employerState" {...register("employerState")} />
                    </div>
                    <div>
                      <Label htmlFor="employerZip">ZIP Code</Label>
                      <Input id="employerZip" {...register("employerZip")} />
                    </div>
                  </div>
                </div>
              </Card>

              <div className="flex justify-end">
                <Button type="submit">Generate W2 Form</Button>
              </div>
            </form>
          </div>

          {/* Preview Section */}
          <div className="hidden md:block sticky top-24 h-fit">
            <Card className="p-6">
              <h2 className="font-semibold text-lg mb-4">Preview</h2>
              <W2Preview data={formData} realistic={true} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default W2Form;
