
import { W2FormData } from "@/types/w2";

export const W2Preview = ({ data }: { data: Partial<W2FormData> }) => {
  const employerAddress = [
    data.employerName,
    data.employerStreet,
    `${data.employerCity || ''}, ${data.employerState || ''} ${data.employerZip || ''}`
  ].filter(Boolean).join('\n');

  const employeeAddress = [
    data.employeeStreet,
    `${data.employeeCity || ''}, ${data.employeeState || ''} ${data.employeeZip || ''}`
  ].filter(Boolean).join('\n');

  return (
    <div className="w-full bg-white p-4">
      <div className="border-2 border-black">
        <div className="text-center font-bold text-xl border-b-2 border-black p-2">
          2025 W-2 Wage and Tax Statement
        </div>
        
        <div className="grid grid-cols-2 gap-px bg-black">
          <div className="bg-white p-2 space-y-2">
            <div className="border border-black p-2">
              <div className="text-[10px] font-bold">a. Employee's social security number</div>
              <div className="font-mono">{data.employeeSsn || ''}</div>
            </div>
            
            <div className="border border-black p-2">
              <div className="text-[10px] font-bold">b. Employer identification number (EIN)</div>
              <div>{data.employerEin || ''}</div>
            </div>
            
            <div className="border border-black p-2 min-h-[120px]">
              <div className="text-[10px] font-bold">c. Employer's name, address, and ZIP code</div>
              <div className="whitespace-pre-line text-sm">{employerAddress}</div>
            </div>
          </div>

          <div className="bg-white p-2">
            <div className="grid grid-cols-2 gap-px bg-black">
              <div className="bg-white p-2 border border-black">
                <div className="text-[10px] font-bold">1. Wages, tips, other compensation</div>
                <div>{data.wagesTips || ''}</div>
              </div>
              <div className="bg-white p-2 border border-black">
                <div className="text-[10px] font-bold">2. Federal income tax withheld</div>
                <div>{data.federalTax || ''}</div>
              </div>
            </div>
            
            {/* Add more boxes following the same pattern */}
            <div className="grid grid-cols-2 gap-px bg-black mt-px">
              <div className="bg-white p-2 border border-black">
                <div className="text-[10px] font-bold">3. Social security wages</div>
                <div>{data.socialSecurityWages || ''}</div>
              </div>
              <div className="bg-white p-2 border border-black">
                <div className="text-[10px] font-bold">4. Social security tax withheld</div>
                <div>{data.socialSecurityTax || ''}</div>
              </div>
            </div>

            {/* Continue with remaining boxes */}
          </div>
        </div>

        <div className="border-t-2 border-black p-2">
          <div className="font-bold text-sm mb-1">Employee's name and address</div>
          <div>
            {data.employeeFirstName} {data.employeeLastName}
          </div>
          <div className="whitespace-pre-line">
            {employeeAddress}
          </div>
        </div>
      </div>
    </div>
  );
};
