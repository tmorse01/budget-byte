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
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
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

  const totalExpenses = useMemo(
    () =>
      expenseData
        .reduce((acc, expense) => acc + expense.amount, 0)
        .toLocaleString(),
    [expenseData]
  );

  return (
    <div className={classes.container}>
      <Text as="h1" className={classes.title1}>
        Budget Byte Dashboard
      </Text>
      <div className={classes.cardContainer}>
        <Card className={classes.statsCard}>
          <Text size={500}>Total Income</Text>
          <Text size={600}>$2,500</Text>
        </Card>
        <Card className={classes.statsCard}>
          <Text size={500}>Total Expenses</Text>
          <Text size={600}>${totalExpenses}</Text>
        </Card>
      </div>
      <div className={classes.chartCards}>
        <Card className={classes.chartCard}>
          <FluentDonutChart
            height={400}
            width={400}
            innerRadius={100}
            expenseData={expenseData}
          />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
