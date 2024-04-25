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
import { CsvData } from "@/types/types";

const useStyles = makeStyles({
  content: {
    ...shorthands.padding("20px", "20px", "20px", "20px"),
    height: "max-content",
  },
});

const UploadCSVDialog = () => {
  const classes = useStyles();
  const handleFileUpload = (results: CsvData) => {
    if (results) {
      // Process the uploaded CSV file here
      console.log("Uploaded file:", results);
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
            <Button appearance="primary">Upload</Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};

export default UploadCSVDialog;
