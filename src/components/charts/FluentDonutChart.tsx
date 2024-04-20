import React from "react";
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
  height: number;
  width: number;
  innerRadius: number;
}

const FluentDonutChart: React.FC<IDonutChartProps> = ({
  expenseData,
  height,
  width,
  innerRadius,
}) => {
  const chartData: IChartDataPoint[] = expenseData.map(
    (item: ExpenseData, index: number) => ({
      legend: item.category,
      data: item.amount,
      color: getColorFromToken(getNextColor(index + 1, index)),
      xAxisCalloutData: item.category,
    })
  );

  const data: IChartProps = {
    chartTitle: "Expenses by Category",
    chartData: chartData,
  };

  return (
    <DonutChart
      culture={window.navigator.language}
      data={data}
      innerRadius={innerRadius}
      legendsOverflowText={"overflow Items"}
      height={height}
      width={width}
      valueInsideDonut={39000}
    />
  );
};

export default FluentDonutChart;
