
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
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">W2 Form Generator</h1>
              <p className="mt-2 text-gray-600">Fill out the information below to generate your W2 form</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <Card className="p-6 space-y-6">
                <h2 className="font-semibold text-lg">Employee & Employer Information</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="employeeSsn">a. Employee's Social Security Number</Label>
                    <Input id="employeeSsn" {...register("employeeSsn")} placeholder="XXX-XX-XXXX" />
                  </div>

                  <div>
                    <Label htmlFor="employerEin">b. Employer Identification Number (EIN)</Label>
                    <Input id="employerEin" {...register("employerEin")} placeholder="XX-XXXXXXX" />
                  </div>

                  <div className="space-y-4">
                    <Label>c. Employer's Information</Label>
                    <div className="space-y-2">
                      <Input {...register("employerName")} placeholder="Employer Name" />
                      <Input {...register("employerStreet")} placeholder="Street Address" />
                      <div className="grid grid-cols-3 gap-2">
                        <Input {...register("employerCity")} placeholder="City" />
                        <Input {...register("employerState")} placeholder="State" />
                        <Input {...register("employerZip")} placeholder="ZIP" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="employeeFirstName">e. Employee Name</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Input {...register("employeeFirstName")} placeholder="First Name" />
                      <Input {...register("employeeLastName")} placeholder="Last Name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employeeAddress">f. Employee Address</Label>
                    <Input {...register("employeeStreet")} placeholder="Street Address" />
                    <div className="grid grid-cols-3 gap-2">
                      <Input {...register("employeeCity")} placeholder="City" />
                      <Input {...register("employeeState")} placeholder="State" />
                      <Input {...register("employeeZip")} placeholder="ZIP" />
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-6">
                <h2 className="font-semibold text-lg">Wages & Taxes</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>1. Wages, tips, other comp.</Label>
                    <Input {...register("wagesTips")} type="number" step="0.01" />
                  </div>
                  <div>
                    <Label>2. Federal income tax withheld</Label>
                    <Input {...register("federalTax")} type="number" step="0.01" />
                  </div>
                  <div>
                    <Label>3. Social security wages</Label>
                    <Input {...register("socialSecurityWages")} type="number" step="0.01" />
                  </div>
                  <div>
                    <Label>4. Social security tax withheld</Label>
                    <Input {...register("socialSecurityTax")} type="number" step="0.01" />
                  </div>
                  <div>
                    <Label>5. Medicare wages and tips</Label>
                    <Input {...register("medicareWages")} type="number" step="0.01" />
                  </div>
                  <div>
                    <Label>6. Medicare tax withheld</Label>
                    <Input {...register("medicareTax")} type="number" step="0.01" />
                  </div>
                  <div>
                    <Label>7. Social security tips</Label>
                    <Input {...register("socialSecurityTips")} type="number" step="0.01" />
                  </div>
                  <div>
                    <Label>8. Allocated tips</Label>
                    <Input {...register("allocatedTips")} type="number" step="0.01" />
                  </div>
                  <div>
                    <Label>10. Dependent care benefits</Label>
                    <Input {...register("dependentCare")} type="number" step="0.01" />
                  </div>
                  <div>
                    <Label>11. Nonqualified plans</Label>
                    <Input {...register("nonqualifiedPlans")} type="number" step="0.01" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Box 13</Label>
                  <div className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox {...register("box13.statutoryEmployee")} id="statutory" />
                      <Label htmlFor="statutory">Statutory Employee</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox {...register("box13.retirementPlan")} id="retirement" />
                      <Label htmlFor="retirement">Retirement Plan</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox {...register("box13.thirdPartySickPay")} id="sickpay" />
                      <Label htmlFor="sickpay">Third-party Sick Pay</Label>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-6">
                <h2 className="font-semibold text-lg">State & Local Information</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>15. State & Employer's state ID</Label>
                      <Input {...register("stateId")} />
                    </div>
                    <div>
                      <Label>16. State wages, tips, etc.</Label>
                      <Input {...register("stateWages")} type="number" step="0.01" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>17. State income tax</Label>
                      <Input {...register("stateTax")} type="number" step="0.01" />
                    </div>
                    <div>
                      <Label>18. Local wages, tips, etc.</Label>
                      <Input {...register("localWages")} type="number" step="0.01" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>19. Local income tax</Label>
                      <Input {...register("localTax")} type="number" step="0.01" />
                    </div>
                    <div>
                      <Label>20. Locality name</Label>
                      <Input {...register("locality")} />
                    </div>
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
