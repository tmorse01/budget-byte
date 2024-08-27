import * as React from "react";
import {
  shorthands,
  makeStyles,
  typographyStyles,
  Text,
} from "@fluentui/react-components";
import UploadCSVDialog from "@/components/UploadDialog";
import ExpensesTable from "@/components/expenses/ExpensesTable";

interface ExpensesProps {}

const useStyles = makeStyles({
  title1: typographyStyles.title1,
  container: {
    ...shorthands.padding("20px", "20px", "20px", "20px"),
    display: "grid",
    justifyItems: "center",
    ...shorthands.gap("40px"),
  },
});

const Expenses: React.FC<ExpensesProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Text as="h1" className={classes.title1}>
        Categorize your Expense Data
      </Text>
      <UploadCSVDialog />
      <ExpensesTable />
    </div>
  );
};

export default Expenses;
