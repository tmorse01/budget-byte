import * as React from "react";
import { AccountingData, TotalData } from "@/types/types";
import {
  DetailsList,
  IColumn,
  TextField,
  SelectionMode,
} from "@fluentui/react";

interface ExpensesProps {
  data: AccountingData[];
  handleDataChange: (newData: AccountingData[]) => void;
}

const Expenses: React.FC<ExpensesProps> = ({ data, handleDataChange }) => {
  const onCellChange = (
    item: AccountingData,
    field: keyof AccountingData,
    newValue: any
  ) => {
    const newData = data.map((i) => {
      if (i.key === item.key) {
        return { ...i, [field]: newValue };
      }
      return i;
    });
    handleDataChange(newData);
  };

  const columns: IColumn[] = [
    {
      key: "column1",
      name: "Name",
      fieldName: "name",
      minWidth: 100,
      maxWidth: 200,
      onRender: (item: AccountingData) => (
        <TextField
          value={item.name}
          onChange={(_, newValue) => onCellChange(item, "name", newValue)}
        />
      ),
    },
    {
      key: "column2",
      name: "Description",
      fieldName: "description",
      minWidth: 150,
      maxWidth: 300,
      onRender: (item: AccountingData) => (
        <TextField
          value={item.description}
          onChange={(_, newValue) =>
            onCellChange(item, "description", newValue)
          }
        />
      ),
    },
    {
      key: "column3",
      name: "Amount",
      fieldName: "amount",
      minWidth: 70,
      maxWidth: 100,
      onRender: (item: AccountingData) => (
        <TextField
          value={item.amount.toString()}
          onChange={(_, newValue) =>
            onCellChange(item, "amount", newValue ? parseInt(newValue) : 0)
          }
        />
      ),
    },
    {
      key: "column4",
      name: "Category",
      fieldName: "category",
      minWidth: 100,
      maxWidth: 200,
      onRender: (item: AccountingData) => (
        <TextField
          value={item.category}
          onChange={(_, newValue) => onCellChange(item, "category", newValue)}
        />
      ),
    },
  ];

  return (
    <DetailsList
      items={data}
      columns={columns}
      selectionMode={SelectionMode.none}
      setKey="set"
    />
  );
};

export default Expenses;
