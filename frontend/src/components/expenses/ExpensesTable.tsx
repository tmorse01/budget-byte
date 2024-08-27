import { useState } from "react";
import { useAccounting } from "@/hooks/useAccounting";
import { formatCurrency } from "@/util/Helpers";
import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  TableCellLayout,
  OptionOnSelectData,
  SelectionEvents,
} from "@fluentui/react-components";
import Pagination from "@/components/Pagination";

const columns = [
  { columnKey: "date", label: "Date" },
  { columnKey: "description", label: "Description" },
  { columnKey: "category", label: "Category" },
  { columnKey: "amount", label: "Amount" },
  { columnKey: "balance", label: "Balance" },
];

const ExpensesTable = () => {
  const { data } = useAccounting();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const handlePageChange = (
    _event: React.MouseEvent<HTMLButtonElement>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (
    _event: SelectionEvents,
    data: OptionOnSelectData
  ) => {
    setRowsPerPage(parseInt(data.optionValue ?? "20"));
    setCurrentPage(1); // Reset to first page
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + rowsPerPage);
  // TODO: Put icons in the headers
  return (
    <>
      <Table aria-label="Expenses Table" size="small">
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
          {paginatedData.map((item, index) => (
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
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(data.length / rowsPerPage)}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </>
  );
};

export default ExpensesTable;