import * as React from "react";
import { Text, Card, makeStyles, shorthands } from "@fluentui/react-components";
import DonutChart from "../components/DonutChart";

const useStyles = makeStyles({
  container: {
    ...shorthands.padding("20px", "20px", "20px", "20px"),
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  statsCard: {
    ...shorthands.padding("10px", "10px", "10px", "10px"),
    ...shorthands.margin("10px", "10px", "10px", "10px"),
    width: "300px",
    textAlign: "center",
    backgroundColor: "#f3f2f1",
  },
});

const Dashboard: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Text as="h1" size={600} weight="semibold">
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
      <DonutChart width={400} height={400} />
    </div>
  );
};

export default Dashboard;
