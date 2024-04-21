import { useEffect, useMemo, useState } from "react";
import {
  Text,
  Card,
  makeStyles,
  shorthands,
  typographyStyles,
} from "@fluentui/react-components";
import FluentDonutChart from "@components/charts/FluentDonutChart";
import { fetchJsonData } from "@/util/DataLoader";
import { ExpenseData } from "@/types/types";

const useStyles = makeStyles({
  title1: typographyStyles.title1,
  container: {
    ...shorthands.padding("20px", "20px", "20px", "20px"),
    display: "flex",
    flexDirection: "column",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  statsCard: {
    ...shorthands.padding("20px", "20px", "20px", "20px"),
    ...shorthands.margin("10px", "10px", "10px", "10px"),
    width: "300px",
    textAlign: "center",
    backgroundColor: "#f3f2f1",
  },
  chartCards: {
    display: "grid",
  },
  chartCard: {
    ...shorthands.padding("20px", "20px", "20px", "20px"),
    ...shorthands.margin("10px", "10px", "10px", "10px"),
  },
});

const Dashboard: React.FC = () => {
  const classes = useStyles();

  const [expenseData, setExpenseData] = useState<ExpenseData[]>([]);
  useEffect(() => {
    fetchJsonData("Expenses").then((data) =>
      setExpenseData(data as ExpenseData[])
    );
  }, []);

  const totals = useMemo(() => {
    const { expenses, income, transfers } = expenseData.reduce(
      (acc, expense) => {
        if (expense.type === "Income") {
          acc.income += expense.amount;
        } else if (expense.type === "Transfer") {
          acc.transfers += expense.amount;
        } else {
          acc.expenses += expense.amount;
        }
        return acc;
      },
      { expenses: 0, income: 0, transfers: 0 }
    );

    return { expenses, income, transfers };
  }, [expenseData]);

  const formattedIncome = `$${totals.income.toLocaleString()}`;
  const formattedExpenses = `$${totals.expenses.toLocaleString()}`;
  const formattedTransfers = `$${totals.transfers.toLocaleString()}`;

  return (
    <div className={classes.container}>
      <Text as="h1" className={classes.title1}>
        Budget Byte Dashboard
      </Text>
      <div className={classes.cardContainer}>
        <Card className={classes.statsCard}>
          <Text size={500}>Total Income</Text>
          <Text size={600}>{formattedIncome}</Text>
        </Card>
        <Card className={classes.statsCard}>
          <Text size={500}>Total Expenses</Text>
          <Text size={600}>{formattedExpenses}</Text>
        </Card>
        <Card className={classes.statsCard}>
          <Text size={500}>Total Transfers</Text>
          <Text size={600}>{formattedTransfers}</Text>
        </Card>
      </div>
      <div className={classes.chartCards}>
        <Card className={classes.chartCard}>
          <FluentDonutChart
            expenseData={expenseData}
            totalExpenses={formattedIncome}
          />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
