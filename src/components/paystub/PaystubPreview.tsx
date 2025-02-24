
import { Card } from "@/components/ui/card";
import { calculateTaxes } from "@/utils/taxCalculations";

interface PaystubPreviewProps {
  employeeData?: {
    firstName: string;
    lastName: string;
    ssnLast4: string;
    maritalStatus: string;
    state: string;
  } | null;
  earningsData?: {
    payPeriodStart: string;
    payPeriodEnd: string;
    payDate: string;
    regularHours: number;
    overtimeHours: number;
    hourlyRate: number;
    overtimeRate: number;
  } | null;
}

export const PaystubPreview = ({
  employeeData,
  earningsData,
}: PaystubPreviewProps) => {
  const regularPay = (earningsData?.regularHours || 0) * (earningsData?.hourlyRate || 0);
  const overtimePay = (earningsData?.overtimeHours || 0) * (earningsData?.overtimeRate || 0);
  const grossPay = regularPay + overtimePay;

  const taxes = employeeData
    ? calculateTaxes(grossPay, employeeData.state, employeeData.maritalStatus)
    : null;

  return (
    <Card className="p-6 bg-white shadow-sm">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold">Pay Stub Preview</h3>
        <p className="text-sm text-gray-500">Live preview as you type</p>
      </div>

      {employeeData && (
        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium">Employee</p>
              <p>{`${employeeData.firstName} ${employeeData.lastName}`}</p>
              <p>SSN: XXX-XX-{employeeData.ssnLast4}</p>
              <p>Filing Status: {employeeData.maritalStatus}</p>
            </div>
            <div>
              <p className="font-medium">Pay Period</p>
              {earningsData && (
                <>
                  <p>Start: {earningsData.payPeriodStart}</p>
                  <p>End: {earningsData.payPeriodEnd}</p>
                  <p>Pay Date: {earningsData.payDate}</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {earningsData && (
        <div className="space-y-4">
          <div className="border-t border-b border-gray-200 py-4">
            <h4 className="font-medium mb-2">Earnings</h4>
            <div className="grid grid-cols-4 gap-2 text-sm">
              <div>Type</div>
              <div>Hours</div>
              <div>Rate</div>
              <div>Amount</div>

              <div>Regular</div>
              <div>{earningsData.regularHours}</div>
              <div>${earningsData.hourlyRate}</div>
              <div>${regularPay.toFixed(2)}</div>

              {earningsData.overtimeHours > 0 && (
                <>
                  <div>Overtime</div>
                  <div>{earningsData.overtimeHours}</div>
                  <div>${earningsData.overtimeRate}</div>
                  <div>${overtimePay.toFixed(2)}</div>
                </>
              )}
            </div>
          </div>

          {taxes && (
            <div className="border-b border-gray-200 py-4">
              <h4 className="font-medium mb-2">Deductions</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Federal Withholding</div>
                <div>${taxes.federalWithholding.toFixed(2)}</div>
                <div>State Withholding</div>
                <div>${taxes.stateWithholding.toFixed(2)}</div>
                <div>Social Security</div>
                <div>${taxes.socialSecurity.toFixed(2)}</div>
                <div>Medicare</div>
                <div>${taxes.medicare.toFixed(2)}</div>
              </div>
            </div>
          )}

          <div className="pt-4">
            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
              <div>Gross Pay</div>
              <div>${grossPay.toFixed(2)}</div>
              <div>Total Deductions</div>
              <div>${(taxes?.totalDeductions || 0).toFixed(2)}</div>
              <div className="text-base">Net Pay</div>
              <div className="text-base">${(taxes?.netPay || grossPay).toFixed(2)}</div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};
