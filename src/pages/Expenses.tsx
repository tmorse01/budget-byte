import * as React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  TableCellLayout,
  shorthands,
  makeStyles,
  typographyStyles,
  Text,
} from "@fluentui/react-components";
import UploadCSVDialog from "@/components/UploadDialog";
import { formatCurrency } from "@/util/Helpers";
import { useAccounting } from "@/contexts/AccountingContext";

interface ExpensesProps {}

const columns = [
  { columnKey: "date", label: "Date" },
  { columnKey: "description", label: "Description" },
  { columnKey: "category", label: "Category" },
  { columnKey: "amount", label: "Amount" },
  { columnKey: "balance", label: "Balance" },
];

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
  const { data } = useAccounting();
  console.log("data: ", data);
  // TODO: Put icons in the headers
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Text as="h1" className={classes.title1}>
        Categorize your Expense Data
      </Text>
      <UploadCSVDialog />
      <Table aria-label="Transactions Table" size="small">
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHeaderCell key={column.columnKey}>
                {column.label}
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.date}</TableCell>
              <TableCell>
                <TableCellLayout>{item.description}</TableCellLayout>
              </TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{formatCurrency(item.amount)}</TableCell>
              <TableCell>{formatCurrency(item.balance)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Expenses;
