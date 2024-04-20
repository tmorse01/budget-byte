import * as React from "react";
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
});

const Dashboard: React.FC = () => {
  const classes = useStyles();

  const [expenseData, setExpenseData] = React.useState<ExpenseData[]>([]);
  React.useEffect(() => {
    fetchJsonData("Expenses").then((data) =>
      setExpenseData(data as ExpenseData[])
    );
  }, []);

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
          <Text size={600}>$1,550</Text>
        </Card>
      </div>
      <div className={classes.chartCards}>
        <Card className={classes.statsCard}>
          <FluentDonutChart
            height={280}
            width={300}
            innerRadius={75}
            expenseData={expenseData}
          />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
