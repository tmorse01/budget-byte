import React, { useLayoutEffect, useState } from "react";
import {
  DonutChart,
  IChartProps,
  IChartDataPoint,
  getColorFromToken,
  getNextColor,
} from "@fluentui/react-charting";
import { Breakpoint, CategorySummary, ChartDimensions } from "@/types/types";
import { determineBreakpoint, getChartDimensions } from "@/util/Helpers";

interface IDonutChartProps {
  accountingData: CategorySummary[];
  totalIncome: number;
  totalExpenses: number;
}

const FluentDonutChart: React.FC<IDonutChartProps> = ({
  accountingData,
  totalIncome,
  totalExpenses,
}) => {
  const [dimensions, setDimensions] = useState<ChartDimensions>({
    width: window.innerWidth,
    height: window.innerHeight,
    innerRadius: Math.min(window.innerWidth, window.innerHeight) / 4,
  });

  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>(null);

  useLayoutEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      const newBreakpoint = determineBreakpoint(screenWidth);

      if (currentBreakpoint !== newBreakpoint) {
        const newDimensions = getChartDimensions(newBreakpoint);
        setDimensions(newDimensions as ChartDimensions);
        setCurrentBreakpoint(newBreakpoint as Breakpoint);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [currentBreakpoint]);

  const totalAmount = accountingData.reduce(
    (total: number, item: CategorySummary) => total + item.amount,
    0
  );

  const chartData: IChartDataPoint[] = accountingData.map(
    (item: CategorySummary, index: number) => ({
      legend: item.category,
      data: item.amount,
      color: getColorFromToken(getNextColor(index + 1, index)),
      xAxisCalloutData: `${item.category} (${(
        (item.amount / totalAmount) *
        100
      ).toFixed(2)}%)`,
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
      height={dimensions.height}
      width={dimensions.width}
      innerRadius={dimensions.innerRadius}
      valueInsideDonut={totalIncome + totalExpenses}
      legendProps={{ enabledWrapLines: true }}
    />
  );
};

export default FluentDonutChart;
