import * as React from "react";
import { AccountingData } from "@/types/types";
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

interface ExpensesProps {
  data: AccountingData[];
  handleDataChange: (newData: AccountingData[]) => void;
}

const columns = [
  { columnKey: "date", label: "Date" },
  { columnKey: "description", label: "Description" },
  { columnKey: "category", label: "Category" },
  { columnKey: "amount", label: "Amount" },
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

const Expenses: React.FC<ExpensesProps> = ({ data }) => {
  // TODO: Put icons in the headers
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Text as="h1" className={classes.title1}>
        Categorize your Expense Data
      </Text>
      <UploadCSVDialog />
      <Table aria-label="Transactions Table">
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
                <TableCellLayout media={item.description}>
                  {item.description}
                </TableCellLayout>
              </TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{formatCurrency(item.amount)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Expenses;
