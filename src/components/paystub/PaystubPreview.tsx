
import { EmployeeFormData } from "./EmployeeForm";
import { EarningsFormData } from "./EarningsForm";
import { PaystubPreviewTemplate } from "./PaystubPreviewTemplates";
import { cn } from "@/lib/utils";

interface PaystubPreviewProps {
  employeeData?: EmployeeFormData | null;
  earningsData?: EarningsFormData | null;
  templateId?: string;
}

export const PaystubPreview = ({
  employeeData,
  earningsData,
  templateId = "modern-blue"
}: PaystubPreviewProps) => {
  const regularPay = (earningsData?.regularHours || 0) * (earningsData?.hourlyRate || 0);
  const overtimePay = (earningsData?.overtimeHours || 0) * (earningsData?.overtimeRate || 0);
  const grossPay = regularPay + overtimePay;

  const templateStyles = {
    "modern-blue": {
      header: "bg-[#0EA5E9] text-white",
      section: "border-[#0EA5E9]",
      table: "bg-gray-50"
    },
    "minimal-dark": {
      header: "bg-[#2D3748] text-white",
      section: "border-gray-600",
      table: "bg-[#1A202C]"
    },
    "corporate-pro": {
      header: "bg-[#403E43] text-white",
      section: "border-[#8A898C]",
      table: "bg-gray-50"
    },
    "tech-startup": {
      header: "bg-[#8B5CF6] text-white",
      section: "border-[#C4B5FD]",
      table: "bg-gray-50"
    },
    "gradient-modern": {
      header: "bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] text-white",
      section: "border-[#9b87f5]",
      table: "bg-white bg-opacity-90"
    },
    "classic-plus": {
      header: "bg-[#8E9196] text-white",
      section: "border-[#C8C8C9]",
      table: "bg-gray-50"
    }
  };

  const styles = templateStyles[templateId as keyof typeof templateStyles];

  return (
    <PaystubPreviewTemplate templateId={templateId}>
      {/* Header */}
      <div className={cn("rounded-t-lg p-4", styles.header)}>
        <div className="text-2xl font-bold mb-2">
          {employeeData?.companyName || "Company Name"}
        </div>
        <div className="text-sm opacity-90">
          {employeeData?.companyAddress || "Company Address"}
        </div>
      </div>

      {/* Employee Info */}
      <div className={cn("grid grid-cols-4 gap-4 p-4 border-x border-b", styles.section)}>
        <div className="col-span-2">
          <div className="font-bold mb-1">Employee</div>
          <div className="text-sm">
            {employeeData ? `${employeeData.firstName} ${employeeData.lastName}` : "Employee Name"}
            <br />
            {employeeData?.address || "Employee Address"}
          </div>
        </div>
        <div>
          <div className="font-bold mb-1">Pay Period</div>
          <div className="text-sm">
            {earningsData?.payPeriodStart || "Start Date"}
            <br />
            {earningsData?.payPeriodEnd || "End Date"}
          </div>
        </div>
        <div>
          <div className="font-bold mb-1">Pay Date</div>
          <div className="text-sm">{earningsData?.payDate || "Pay Date"}</div>
        </div>
      </div>

      {/* Earnings Table */}
      <div className={cn("p-4 border-x border-b", styles.section)}>
        <table className="w-full">
          <thead>
            <tr className={cn("text-left", styles.table)}>
              <th className="p-2">Description</th>
              <th className="p-2">Hours</th>
              <th className="p-2">Rate</th>
              <th className="p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Regular</td>
              <td className="p-2">{earningsData?.regularHours || 0}</td>
              <td className="p-2">${earningsData?.hourlyRate || 0}</td>
              <td className="p-2">${regularPay.toFixed(2)}</td>
            </tr>
            {earningsData?.overtimeHours ? (
              <tr>
                <td className="p-2">Overtime</td>
                <td className="p-2">{earningsData.overtimeHours}</td>
                <td className="p-2">${earningsData.overtimeRate}</td>
                <td className="p-2">${overtimePay.toFixed(2)}</td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className={cn("p-4 rounded-b-lg", styles.table)}>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="font-bold mb-1">Gross Pay</div>
            <div>${grossPay.toFixed(2)}</div>
          </div>
          <div>
            <div className="font-bold mb-1">Total Deductions</div>
            <div>$0.00</div>
          </div>
          <div>
            <div className="font-bold mb-1">Net Pay</div>
            <div>${grossPay.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </PaystubPreviewTemplate>
  );
};
