import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
  makeStyles,
  shorthands,
} from "@fluentui/react-components";
import CSVReader from "./CSVUpload";
import { CsvData, TransactionData } from "@/types/types";
import { useAccounting } from "@/hooks/useAccounting";
import { convertCsvToJson, convertToAccountingData } from "@/util/DataLoader";
import { useState } from "react";
import { uploadCsvFile } from "@/util/DataApi";

const useStyles = makeStyles({
  content: {
    ...shorthands.padding("20px", "20px", "20px", "20px"),
    height: "max-content",
  },
});

const UploadCSVDialog = () => {
  const classes = useStyles();
  const { setTransactionData } = useAccounting();
  const [dataUploaded, setDataUploaded] = useState<CsvData>();
  const handleFileUpload = async (results: CsvData) => {
    if (results) {
      setDataUploaded(results);
    }
  };

  const handleSubmit = async () => {
    if (dataUploaded) {
      // TODO: Move the conversion logic to the backend
      // Process the uploaded CSV file here
      const expenseJson = convertCsvToJson(dataUploaded);
      const accountingData = convertToAccountingData(expenseJson);
      const categorizedData = await uploadCsvFile(accountingData);
      setTransactionData(categorizedData as TransactionData[]);
    }
  };

  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <Button>Upload CSV</Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Upload Expense Data</DialogTitle>
          <DialogContent className={classes.content}>
            <CSVReader handleFileUpload={handleFileUpload} />
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Cancel</Button>
            </DialogTrigger>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="primary" onClick={() => handleSubmit()}>
                Upload
              </Button>
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};

export default UploadCSVDialog;
