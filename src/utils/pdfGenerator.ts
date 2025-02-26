
import { W2FormData } from "@/types/w2";
import { Document, Page, Text, View, StyleSheet, pdf } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#ffffff'
  },
  box: {
    border: '1pt solid black',
    padding: 5,
    marginBottom: 5
  },
  label: {
    fontSize: 8,
    marginBottom: 2
  },
  value: {
    fontSize: 10
  },
  title: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center'
  }
});

const W2Document = ({ data }: { data: W2FormData }) => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      <Text style={styles.title}>2025 W-2 Wage and Tax Statement</Text>
      
      <View style={styles.box}>
        <Text style={styles.label}>a. Employee&apos;s social security number</Text>
        <Text style={styles.value}>{data.employeeSsn}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.label}>b. Employer identification number (EIN)</Text>
        <Text style={styles.value}>{data.employerEin}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.label}>c. Employer&apos;s name, address, and ZIP code</Text>
        <Text style={styles.value}>{data.employerName}</Text>
        <Text style={styles.value}>{data.employerStreet}</Text>
        <Text style={styles.value}>{data.employerCityStateZip}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.label}>d. Control number</Text>
        <Text style={styles.value}>{data.controlNumber}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.label}>e. Employee&apos;s name</Text>
        <Text style={styles.value}>{`${data.employeeFirstName} ${data.employeeLastName}`}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.label}>f. Employee&apos;s address</Text>
        <Text style={styles.value}>{data.employeeAddress}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.label}>1. Wages, tips, other compensation</Text>
        <Text style={styles.value}>{data.wagesTips}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.label}>2. Federal income tax withheld</Text>
        <Text style={styles.value}>{data.federalTax}</Text>
      </View>

      {/* Add remaining boxes 3-20 following the same pattern */}
    </Page>
  </Document>
);

export const generateW2PDF = async (data: W2FormData) => {
  try {
    const blob = await pdf(<W2Document data={data} />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `w2-form-${data.employeeLastName}.pdf`;
    link.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};
