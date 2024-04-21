import React, { useLayoutEffect, useState } from "react";
import {
  DonutChart,
  IChartProps,
  IChartDataPoint,
  getColorFromToken,
  getNextColor,
} from "@fluentui/react-charting";
import { ExpenseData } from "@/types/types";

interface IDonutChartProps {
  expenseData: ExpenseData[];
  totalExpenses: string;
}

const FluentDonutChart: React.FC<IDonutChartProps> = ({
  expenseData,
  totalExpenses,
}) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    innerRadius: Math.min(window.innerWidth, window.innerHeight) / 4, // example radius
  });

  const chartData: IChartDataPoint[] = expenseData.map(
    (item: ExpenseData, index: number) => ({
      legend: item.name,
      data: item.amount,
      color: getColorFromToken(getNextColor(index + 1, index)),
      xAxisCalloutData: item.name, // TODO: calculate percentage of total here
    })
  );

  const data: IChartProps = {
    chartTitle: "Expenses by Category",
    chartData: chartData,
  };

  useLayoutEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth - 200,
        height: window.innerHeight - 200,
        innerRadius: Math.min(window.innerWidth, window.innerHeight) / 4,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DonutChart
      culture={window.navigator.language}
      data={data}
      height={dimensions.height}
      width={dimensions.width}
      innerRadius={dimensions.innerRadius}
      valueInsideDonut={totalExpenses}
      legendProps={{ enabledWrapLines: true }}
    />
  );
};

export default FluentDonutChart;
