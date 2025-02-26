
export interface W2FormData {
  // Employee & Employer Info
  employeeSsn: string;
  employerEin: string;
  employerInfo: string;
  controlNumber: string;
  employeeFirstName: string;
  employeeLastName: string;
  employeeAddress: string;
  // Wage & Tax Information
  wagesTips: string;
  federalTax: string;
  socialSecurityWages: string;
  socialSecurityTax: string;
  medicareWages: string;
  medicareTax: string;
  socialSecurityTips: string;
  allocatedTips: string;
  dependentCare: string;
  nonqualifiedPlans: string;
  box13: {
    statutoryEmployee: boolean;
    retirementPlan: boolean;
    thirdPartySickPay: boolean;
  };
  other: string;
  // State Information
  stateId: string;
  stateWages: string;
  stateTax: string;
  localWages: string;
  localTax: string;
  locality: string;
}
