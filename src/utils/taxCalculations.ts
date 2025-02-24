interface TaxRates {
  [key: string]: {
    incomeTax: number;
    medicare: number;
    socialSecurity: number;
    stateWithholding: {
      single: number[];
      married: number[];
      marriedSeparate: number[];
    };
  };
}

const TAX_RATES: TaxRates = {
  AL: { incomeTax: 0.05, medicare: 0.0145, socialSecurity: 0.062, stateWithholding: { single: [0.02], married: [0.018], marriedSeparate: [0.02] } },
  AK: { incomeTax: 0, medicare: 0.0145, socialSecurity: 0.062, stateWithholding: { single: [0], married: [0], marriedSeparate: [0] } },
  AZ: { incomeTax: 0.049, medicare: 0.0145, socialSecurity: 0.062, stateWithholding: { single: [0.022], married: [0.019], marriedSeparate: [0.022] } },
  CA: {
    incomeTax: 0.07,
    medicare: 0.0145,
    socialSecurity: 0.062,
    stateWithholding: {
      single: [0.011, 0.022, 0.044, 0.066, 0.088],
      married: [0.009, 0.019, 0.038, 0.057, 0.076],
      marriedSeparate: [0.011, 0.022, 0.044, 0.066, 0.088],
    },
  },
  CO: { incomeTax: 0.0463, medicare: 0.0145, socialSecurity: 0.062, stateWithholding: { single: [0.02], married: [0.018], marriedSeparate: [0.02] } },
  CT: { incomeTax: 0.0699, medicare: 0.0145, socialSecurity: 0.062, stateWithholding: { single: [0.03], married: [0.027], marriedSeparate: [0.03] } },
  NY: {
    incomeTax: 0.065,
    medicare: 0.0145,
    socialSecurity: 0.062,
    stateWithholding: {
      single: [0.014, 0.028, 0.056, 0.084],
      married: [0.012, 0.024, 0.048, 0.072],
      marriedSeparate: [0.014, 0.028, 0.056, 0.084],
    },
  },
  WY: { incomeTax: 0, medicare: 0.0145, socialSecurity: 0.062, stateWithholding: { single: [0], married: [0], marriedSeparate: [0] } }
};

export const calculateTaxes = (
  grossPay: number,
  state: string,
  maritalStatus: string
) => {
  const rates = TAX_RATES[state] || TAX_RATES.CA; // Default to CA if state not found
  const medicare = grossPay * rates.medicare;
  const socialSecurity = grossPay * rates.socialSecurity;
  
  let stateWithholdingRate;
  switch (maritalStatus) {
    case "married":
      stateWithholdingRate = rates.stateWithholding.married[0];
      break;
    case "married-separate":
      stateWithholdingRate = rates.stateWithholding.marriedSeparate[0];
      break;
    default:
      stateWithholdingRate = rates.stateWithholding.single[0];
  }
  
  const stateWithholding = grossPay * stateWithholdingRate;
  const federalWithholding = grossPay * 0.15; // Simplified federal tax calculation

  return {
    medicare,
    socialSecurity,
    stateWithholding,
    federalWithholding,
    totalDeductions: medicare + socialSecurity + stateWithholding + federalWithholding,
    netPay: grossPay - (medicare + socialSecurity + stateWithholding + federalWithholding),
  };
};
