
import { W2FormData } from "@/types/w2";
import { Document, Page, Text, View, PDFDownloadLink, StyleSheet, pdf } from "@react-pdf/renderer";

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
        <Text style={styles.label}>a. Employee's social security number</Text>
        <Text style={styles.value}>{data.employeeSsn}</Text>
      </View>

      {/* Add all other boxes following the same pattern */}
    </Page>
  </Document>
);

export const generateW2PDF = async (data: W2FormData) => {
  const blob = await pdf(<W2Document data={data} />).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `w2-form-${data.employeeLastName}.pdf`;
  link.click();
  URL.revokeObjectURL(url);
};
