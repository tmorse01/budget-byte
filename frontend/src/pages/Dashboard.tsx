import {
  Text,
  Card,
  makeStyles,
  shorthands,
  typographyStyles,
} from "@fluentui/react-components";
import FluentDonutChart from "@components/charts/FluentDonutChart";
import { useAccounting } from "@/hooks/useAccounting";
import { calculateTotals } from "@/util/Helpers";
import { useMemo } from "react";
import { summarizeAccountingData } from "@/util/DataLoader";
import useFetch from "@/hooks/useFetch";
import { CategoryData } from "@/types/types";

interface DashboardProps {}

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
    backgroundColor: "#f3f2f1",
  },
});

const Dashboard: React.FC<DashboardProps> = () => {
  const { data: accountData } = useAccounting();
  const { data: categoryData } = useFetch(
    `${import.meta.env.VITE_API_URL}/api/data/categories`
  );
  const categories = useMemo(() => categoryData ?? [], [categoryData]);
  const categorySummary = useMemo(
    () =>
      summarizeAccountingData(
        categories as unknown as CategoryData[],
        accountData
      ),
    [accountData, categories]
  );
  const totals = useMemo(() => calculateTotals(accountData), [accountData]);
  const classes = useStyles();

  const formattedIncome = `$${totals.income.toLocaleString()}`;
  const formattedExpenses = `$${totals.expenses.toLocaleString()}`;

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
      </div>
      <div className={classes.chartCards}>
        <Card className={classes.chartCard}>
          <FluentDonutChart
            accountingData={categorySummary}
            totalIncome={totals.income}
            totalExpenses={totals.expenses}
          />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
