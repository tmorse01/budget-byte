import React from "react";
import {
  Button,
  Dropdown,
  makeStyles,
  Option,
  OptionOnSelectData,
  SelectionEvents,
  shorthands,
} from "@fluentui/react-components";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    page: number
  ) => void;
  rowsPerPage: number;
  onRowsPerPageChange: (
    event: SelectionEvents,
    data: OptionOnSelectData
  ) => void;
}

const useStyles = makeStyles({
  pagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    ...shorthands.gap("10px"),
    ...shorthands.padding("10px"),
    ...shorthands.margin("10px", "0"),
  },
  button: {
    minWidth: "80px",
  },
  dropdown: {
    minWidth: "60px",
  },
  pageInfo: {
    ...shorthands.margin("0", "10px"),
  },
});

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  rowsPerPage,
  onRowsPerPageChange,
}) => {
  const styles = useStyles();

  const handlePreviousPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (currentPage > 1) {
      onPageChange(event, currentPage - 1);
    }
  };

  const handleNextPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (currentPage < totalPages) {
      onPageChange(event, currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <Button
        className={styles.button}
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      <span className={styles.pageInfo}>
        Page {currentPage} of {totalPages}
      </span>
      <Button
        className={styles.button}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
      <Dropdown
        className={styles.dropdown}
        value={rowsPerPage.toString()}
        onOptionSelect={onRowsPerPageChange}
      >
        {[10, 20, 50, 100].map((size) => (
          <Option key={size} value={size.toString()} text={`${size}`}>
            {size}
          </Option>
        ))}
      </Dropdown>
    </div>
  );
};

export default Pagination;
