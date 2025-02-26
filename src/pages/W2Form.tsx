
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
import { generateW2PDF } from "@/utils/pdfGenerator";
import { Textarea } from "@/components/ui/textarea";

const W2Form = () => {
  const { register, handleSubmit, watch } = useForm<W2FormData>();
  const { toast } = useToast();
  const formData = watch();

  const onSubmit = async (data: W2FormData) => {
    try {
      await generateW2PDF(data);
      toast({
        title: "W2 Form Generated",
        description: "Your W2 form has been generated and downloaded.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
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
                    <Label htmlFor="employeeSsn">a. Employee's Social Security Number</Label>
                    <Input
                      id="employeeSsn"
                      {...register("employeeSsn")}
                      placeholder="XXX-XX-XXXX"
                    />
                  </div>

                  <div>
                    <Label htmlFor="employerEin">b. Employer EIN</Label>
                    <Input
                      id="employerEin"
                      {...register("employerEin")}
                      placeholder="XX-XXXXXXX"
                    />
                  </div>

                  <div className="space-y-4">
                    <Label>c. Employer Information</Label>
                    <div>
                      <Label htmlFor="employerName">Employer Name</Label>
                      <Input
                        id="employerName"
                        {...register("employerName")}
                      />
                    </div>
                    <div>
                      <Label htmlFor="employerStreet">Street Address</Label>
                      <Input
                        id="employerStreet"
                        {...register("employerStreet")}
                      />
                    </div>
                    <div>
                      <Label htmlFor="employerCityStateZip">City, State, ZIP</Label>
                      <Input
                        id="employerCityStateZip"
                        {...register("employerCityStateZip")}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="controlNumber">d. Control Number</Label>
                    <Input
                      id="controlNumber"
                      {...register("controlNumber")}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="employeeFirstName">e. Employee First Name</Label>
                      <Input
                        id="employeeFirstName"
                        {...register("employeeFirstName")}
                      />
                    </div>
                    <div>
                      <Label htmlFor="employeeLastName">Employee Last Name</Label>
                      <Input
                        id="employeeLastName"
                        {...register("employeeLastName")}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="employeeAddress">f. Employee Address</Label>
                    <Textarea
                      id="employeeAddress"
                      {...register("employeeAddress")}
                      placeholder="Street, City, State, ZIP"
                    />
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-6">
                <h2 className="font-semibold text-lg">Wages & Taxes</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="wagesTips">1. Wages, tips, other comp.</Label>
                    <Input
                      id="wagesTips"
                      {...register("wagesTips")}
                      type="number"
                      step="0.01"
                    />
                  </div>
                  <div>
                    <Label htmlFor="federalTax">2. Federal tax withheld</Label>
                    <Input
                      id="federalTax"
                      {...register("federalTax")}
                      type="number"
                      step="0.01"
                    />
                  </div>
                  <div>
                    <Label htmlFor="socialSecurityWages">3. Social security wages</Label>
                    <Input
                      id="socialSecurityWages"
                      {...register("socialSecurityWages")}
                      type="number"
                      step="0.01"
                    />
                  </div>
                  <div>
                    <Label htmlFor="socialSecurityTax">4. Social security tax withheld</Label>
                    <Input
                      id="socialSecurityTax"
                      {...register("socialSecurityTax")}
                      type="number"
                      step="0.01"
                    />
                  </div>
                  <div>
                    <Label htmlFor="medicareWages">5. Medicare wages and tips</Label>
                    <Input
                      id="medicareWages"
                      {...register("medicareWages")}
                      type="number"
                      step="0.01"
                    />
                  </div>
                  <div>
                    <Label htmlFor="medicareTax">6. Medicare tax withheld</Label>
                    <Input
                      id="medicareTax"
                      {...register("medicareTax")}
                      type="number"
                      step="0.01"
                    />
                  </div>
                  <div>
                    <Label htmlFor="socialSecurityTips">7. Social security tips</Label>
                    <Input
                      id="socialSecurityTips"
                      {...register("socialSecurityTips")}
                      type="number"
                      step="0.01"
                    />
                  </div>
                  <div>
                    <Label htmlFor="allocatedTips">8. Allocated tips</Label>
                    <Input
                      id="allocatedTips"
                      {...register("allocatedTips")}
                      type="number"
                      step="0.01"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dependentCare">10. Dependent care benefits</Label>
                    <Input
                      id="dependentCare"
                      {...register("dependentCare")}
                      type="number"
                      step="0.01"
                    />
                  </div>
                  <div>
                    <Label htmlFor="nonqualifiedPlans">11. Nonqualified plans</Label>
                    <Input
                      id="nonqualifiedPlans"
                      {...register("nonqualifiedPlans")}
                      type="number"
                      step="0.01"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>13. Checkboxes</Label>
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
                    <Label htmlFor="stateId">15. State ID Number</Label>
                    <Input id="stateId" {...register("stateId")} />
                  </div>
                  <div>
                    <Label htmlFor="stateWages">16. State wages, tips, etc.</Label>
                    <Input
                      id="stateWages"
                      {...register("stateWages")}
                      type="number"
                      step="0.01"
                    />
                  </div>
                  <div>
                    <Label htmlFor="stateTax">17. State income tax</Label>
                    <Input
                      id="stateTax"
                      {...register("stateTax")}
                      type="number"
                      step="0.01"
                    />
                  </div>
                  <div>
                    <Label htmlFor="locality">18. Local name</Label>
                    <Input id="locality" {...register("locality")} />
                  </div>
                  <div>
                    <Label htmlFor="localWages">19. Local wages, tips, etc.</Label>
                    <Input
                      id="localWages"
                      {...register("localWages")}
                      type="number"
                      step="0.01"
                    />
                  </div>
                  <div>
                    <Label htmlFor="localTax">20. Local income tax</Label>
                    <Input
                      id="localTax"
                      {...register("localTax")}
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
