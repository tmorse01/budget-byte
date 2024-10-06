import * as React from "react";
import {
  shorthands,
  makeStyles,
  typographyStyles,
  Text,
} from "@fluentui/react-components";
import UploadCSVDialog from "@/components/UploadDialog";
import TransactionTable from "@/components/transactions/TransactionTable";

interface TransactionProps {}

const useStyles = makeStyles({
  title1: typographyStyles.title1,
  container: {
    ...shorthands.padding("20px", "20px", "20px", "20px"),
    display: "grid",
    justifyItems: "center",
    ...shorthands.gap("40px"),
  },
});

const Transactions: React.FC<TransactionProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Text as="h1" className={classes.title1}>
        Categorize your Expense Data
      </Text>
      <UploadCSVDialog />
      <TransactionTable />
    </div>
  );
};

export default Transactions;
