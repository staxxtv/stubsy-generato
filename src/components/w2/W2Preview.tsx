
import { W2FormData } from "@/types/w2";

export const W2Preview = ({ data }: { data: Partial<W2FormData> }) => {
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow">
      <div className="border-2 border-black p-4">
        <div className="text-center font-bold text-xl mb-4">
          2025 W-2 Wage and Tax Statement
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="border p-2">
              <div className="text-xs">a. Employee's social security number</div>
              <div className="font-mono">{data.employeeSsn || ''}</div>
            </div>
            <div className="border p-2">
              <div className="text-xs">b. Employer identification number (EIN)</div>
              <div>{data.employerEin || ''}</div>
            </div>
            <div className="border p-2 min-h-[100px]">
              <div className="text-xs">c. Employer's name, address, and ZIP code</div>
              <div className="whitespace-pre-line">{data.employerInfo || ''}</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="border p-2">
                <div className="text-xs">1. Wages, tips, other compensation</div>
                <div>{data.wagesTips || ''}</div>
              </div>
              <div className="border p-2">
                <div className="text-xs">2. Federal income tax withheld</div>
                <div>{data.federalTax || ''}</div>
              </div>
            </div>
            {/* Add more boxes for 3-20 */}
          </div>
        </div>
      </div>
    </div>
  );
};
