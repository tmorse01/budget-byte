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
import { TransactionData, CsvData } from "@/types/types";
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
  const { setData } = useAccounting();
  const [dataUploaded, setDataUploaded] = useState<TransactionData[]>();
  const handleFileUpload = (results: CsvData) => {
    if (results) {
      // TODO: Move the conversion logic to the backend
      // Process the uploaded CSV file here
      const expenseJson = convertCsvToJson(results);
      const accountingData = convertToAccountingData(expenseJson);
      setDataUploaded(accountingData);
      uploadCsvFile(accountingData);
    }
  };

  const handleSubmit = () => {
    if (dataUploaded) {
      setData(dataUploaded);
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
