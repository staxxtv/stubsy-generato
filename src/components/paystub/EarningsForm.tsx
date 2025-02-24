
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface EarningsFormData {
  payPeriodStart: string;
  payPeriodEnd: string;
  payDate: string;
  regularHours: number;
  overtimeHours: number;
  hourlyRate: number;
  overtimeRate: number;
}

interface EarningsFormProps {
  onSubmit: (data: EarningsFormData) => void;
  onBack: () => void;
}

export const EarningsForm = ({ onSubmit, onBack }: EarningsFormProps) => {
  const { register, watch, handleSubmit } = useForm<EarningsFormData>({
    defaultValues: {
      regularHours: 40,
      overtimeHours: 0,
      hourlyRate: 0,
      overtimeRate: 0,
    },
  });

  const regularHours = watch("regularHours");
  const overtimeHours = watch("overtimeHours");
  const hourlyRate = watch("hourlyRate");
  const overtimeRate = watch("overtimeRate") || hourlyRate * 1.5;

  const regularPay = regularHours * hourlyRate;
  const overtimePay = overtimeHours * overtimeRate;
  const grossPay = regularPay + overtimePay;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Pay Period Information</CardTitle>
          <CardDescription>Enter the pay period details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="payPeriodStart">Period Start</Label>
              <Input
                type="date"
                id="payPeriodStart"
                {...register("payPeriodStart", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="payPeriodEnd">Period End</Label>
              <Input
                type="date"
                id="payPeriodEnd"
                {...register("payPeriodEnd", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="payDate">Pay Date</Label>
              <Input
                type="date"
                id="payDate"
                {...register("payDate", { required: true })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hours & Earnings</CardTitle>
          <CardDescription>Enter work hours and pay rates</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="regularHours">Regular Hours</Label>
              <Input
                type="number"
                id="regularHours"
                {...register("regularHours", { required: true, min: 0 })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="overtimeHours">Overtime Hours</Label>
              <Input
                type="number"
                id="overtimeHours"
                {...register("overtimeHours", { required: true, min: 0 })}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
              <Input
                type="number"
                step="0.01"
                id="hourlyRate"
                {...register("hourlyRate", { required: true, min: 0 })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="overtimeRate">Overtime Rate ($)</Label>
              <Input
                type="number"
                step="0.01"
                id="overtimeRate"
                {...register("overtimeRate", { required: true, min: 0 })}
              />
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg space-y-2">
            <div className="flex justify-between">
              <span>Regular Pay:</span>
              <span>${regularPay.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Overtime Pay:</span>
              <span>${overtimePay.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold border-t border-gray-200 pt-2">
              <span>Gross Pay:</span>
              <span>${grossPay.toFixed(2)}</span>
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
