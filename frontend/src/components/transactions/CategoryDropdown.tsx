import React from "react";
import {
  Dropdown,
  makeStyles,
  Option,
  OptionOnSelectData,
  SelectionEvents,
} from "@fluentui/react-components";
import { useAccounting } from "@/hooks/useAccounting";
// import { updateCategory } from "@/util/DataApi";

interface CategoryDropdownProps {
  value?: string;
  onChange?: (category: string) => void;
}

const useStyles = makeStyles({
  dropdown: {
    minWidth: "150px",
  },
});

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  value,
  onChange,
}) => {
  const styles = useStyles();

  const { data } = useAccounting();
  const { categories } = data;
  const categoryOptions = categories.map((category) => ({
    key: category.name,
    text: category.name,
  }));

  const handleOptionSelect = (
    _event: SelectionEvents,
    data: OptionOnSelectData
  ) => {
    if (data) {
      if (onChange) onChange(data.optionText as string);
      // updateCategoryInDatabase(data.optionText as string);
    }
  };

  // const updateCategoryInDatabase = async (category: string) => {
  //   const updatedItem = { ...item, category };
  //   try {
  //     await updateCategory(updatedItem);
  //   } catch (error) {
  //     console.error("Error updating category:", error);
  //   }
  // };

  return (
    <Dropdown
      className={styles.dropdown}
      placeholder="Select a category"
      value={value}
      onOptionSelect={handleOptionSelect}
    >
      {categoryOptions.map((option) => (
        <Option key={option.key}>{option.text}</Option>
      ))}
    </Dropdown>
  );
};

export default CategoryDropdown;
