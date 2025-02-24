
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface EmployeeFormData {
  firstName: string;
  lastName: string;
  ssnLast4: string;
  maritalStatus: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  employerId: string;
  employerName: string;
  employerAddress: string;
  employerCity: string;
  employerState: string;
  employerZipCode: string;
}

interface EmployeeFormProps {
  onSubmit: (data: EmployeeFormData) => void;
  onBack: () => void;
}

export const EmployeeForm = ({ onSubmit, onBack }: EmployeeFormProps) => {
  const { register, handleSubmit, setValue, watch } = useForm<EmployeeFormData>();
  const watchState = watch("state");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Employee Information</CardTitle>
          <CardDescription>
            Enter the employee's personal information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                {...register("firstName", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                {...register("lastName", { required: true })}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ssnLast4">Last 4 SSN</Label>
              <Input
                id="ssnLast4"
                maxLength={4}
                {...register("ssnLast4", {
                  required: true,
                  pattern: /^[0-9]{4}$/,
                })}
                placeholder="1234"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maritalStatus">Marital Status</Label>
              <Select
                onValueChange={(value) => setValue("maritalStatus", value)}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single">Single</SelectItem>
                  <SelectItem value="married">Married</SelectItem>
                  <SelectItem value="married-separate">
                    Married (Separate)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" {...register("address", { required: true })} />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" {...register("city", { required: true })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Select
                onValueChange={(value) => setValue("state", value)}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CA">California</SelectItem>
                  <SelectItem value="NY">New York</SelectItem>
                  <SelectItem value="TX">Texas</SelectItem>
                  <SelectItem value="FL">Florida</SelectItem>
                  {/* Add more states as needed */}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="zipCode">ZIP Code</Label>
              <Input id="zipCode" {...register("zipCode", { required: true })} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Employer Information</CardTitle>
          <CardDescription>
            Enter the employer's business information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="employerId">Employer ID</Label>
              <Input
                id="employerId"
                {...register("employerId", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="employerName">Company Name</Label>
              <Input
                id="employerName"
                {...register("employerName", { required: true })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="employerAddress">Business Address</Label>
            <Input
              id="employerAddress"
              {...register("employerAddress", { required: true })}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="employerCity">City</Label>
              <Input
                id="employerCity"
                {...register("employerCity", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="employerState">State</Label>
              <Input
                id="employerState"
                {...register("employerState", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="employerZipCode">ZIP Code</Label>
              <Input
                id="employerZipCode"
                {...register("employerZipCode", { required: true })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
};
