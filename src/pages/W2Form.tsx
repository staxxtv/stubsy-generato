
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
    // Here you would handle PDF generation
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
                    <Input
                      id="employeeSsn"
                      {...register("employeeSsn")}
                      placeholder="XXX-XX-XXXX"
                    />
                  </div>

                  <div>
                    <Label htmlFor="employerEin">Employer EIN</Label>
                    <Input
                      id="employerEin"
                      {...register("employerEin")}
                      placeholder="XX-XXXXXXX"
                    />
                  </div>

                  <div>
                    <Label htmlFor="employerInfo">Employer Information</Label>
                    <Input
                      id="employerInfo"
                      {...register("employerInfo")}
                      placeholder="Name and Address"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="employeeFirstName">First Name</Label>
                      <Input
                        id="employeeFirstName"
                        {...register("employeeFirstName")}
                      />
                    </div>
                    <div>
                      <Label htmlFor="employeeLastName">Last Name</Label>
                      <Input
                        id="employeeLastName"
                        {...register("employeeLastName")}
                      />
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-6">
                <h2 className="font-semibold text-lg">Wages & Taxes</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="wagesTips">Wages and Tips (Box 1)</Label>
                    <Input
                      id="wagesTips"
                      {...register("wagesTips")}
                      type="number"
                      step="0.01"
                    />
                  </div>
                  <div>
                    <Label htmlFor="federalTax">Federal Tax Withheld (Box 2)</Label>
                    <Input
                      id="federalTax"
                      {...register("federalTax")}
                      type="number"
                      step="0.01"
                    />
                  </div>
                  {/* Add more wage & tax fields */}
                </div>

                <div className="space-y-2">
                  <Label>Box 13</Label>
                  <div className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox {...register("box13.statutoryEmployee")} />
                      <Label>Statutory Employee</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox {...register("box13.retirementPlan")} />
                      <Label>Retirement Plan</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox {...register("box13.thirdPartySickPay")} />
                      <Label>Third-party Sick Pay</Label>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-6">
                <h2 className="font-semibold text-lg">State & Local Information</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="stateId">State ID Number</Label>
                    <Input id="stateId" {...register("stateId")} />
                  </div>
                  <div>
                    <Label htmlFor="stateWages">State Wages</Label>
                    <Input
                      id="stateWages"
                      {...register("stateWages")}
                      type="number"
                      step="0.01"
                    />
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
              <W2Preview data={formData} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default W2Form;
