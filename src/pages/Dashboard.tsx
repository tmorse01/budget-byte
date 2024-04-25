import {
  Text,
  Card,
  makeStyles,
  shorthands,
  typographyStyles,
} from "@fluentui/react-components";
import FluentDonutChart from "@components/charts/FluentDonutChart";
import { useAccounting } from "@/contexts/AccountingContext";
import { calculateTotals } from "@/util/Helpers";
import { useMemo } from "react";

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
  const { data } = useAccounting();
  const totals = useMemo(() => calculateTotals(data), [data]);
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
            accountingData={data}
            totalExpenses={totals.expenses}
          />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
