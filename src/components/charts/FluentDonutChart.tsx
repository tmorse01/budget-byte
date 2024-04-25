import React, { useLayoutEffect, useState } from "react";
import {
  DonutChart,
  IChartProps,
  IChartDataPoint,
  getColorFromToken,
  getNextColor,
} from "@fluentui/react-charting";
import { AccountingData } from "@/types/types";

type Breakpoint = "small" | "medium" | "large" | null;

type Dimensions = {
  width: number;
  height: number;
  innerRadius: number;
};

interface IDonutChartProps {
  accountingData: AccountingData[];
  totalExpenses: number;
}

const FluentDonutChart: React.FC<IDonutChartProps> = ({
  accountingData,
  totalExpenses,
}) => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: window.innerWidth,
    height: window.innerHeight,
    innerRadius: Math.min(window.innerWidth, window.innerHeight) / 4,
  });

  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>(null);

  useLayoutEffect(() => {
    function determineBreakpoint(screenWidth: number) {
      if (screenWidth >= 1200) {
        return "large";
      } else if (screenWidth >= 768) {
        return "medium";
      } else {
        return "small";
      }
    }

    function getChartDimensions(breakpoint: Breakpoint) {
      switch (breakpoint) {
        case "large":
          return {
            width: 500,
            height: 500,
            innerRadius: 150,
          };
        case "medium":
          return {
            width: 400,
            height: 400,
            innerRadius: 120,
          };
        case "small":
          return {
            width: 300,
            height: 300,
            innerRadius: 80,
          };
        default:
          return {};
      }
    }

    function handleResize() {
      const screenWidth = window.innerWidth;
      const newBreakpoint = determineBreakpoint(screenWidth);

      // Only update dimensions if the breakpoint changes
      if (currentBreakpoint !== newBreakpoint) {
        const newDimensions = getChartDimensions(newBreakpoint);
        setDimensions(newDimensions as Dimensions);
        setCurrentBreakpoint(newBreakpoint as Breakpoint);
      }
    }

    window.addEventListener("resize", handleResize);
    // Initialize dimensions on mount
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [currentBreakpoint]);

  const totalAmount = accountingData.reduce(
    (total: number, item: AccountingData) => total + item.amount,
    0
  );

  const chartData: IChartDataPoint[] = accountingData.map(
    (item: AccountingData, index: number) => ({
      legend: item.name,
      data: item.amount,
      color: getColorFromToken(getNextColor(index + 1, index)),
      xAxisCalloutData: `${item.name} (${(
        (item.amount / totalAmount) *
        100
      ).toFixed(2)}%)`,
    })
  );

  const data: IChartProps = {
    chartTitle: "Expenses by Category",
    chartData: chartData,
  };

  console.log(dimensions, currentBreakpoint);

  return (
    <DonutChart
      culture={window.navigator.language}
      data={data}
      // height={300}
      // width={300}
      // innerRadius={70}
      height={dimensions.height}
      width={dimensions.width}
      innerRadius={dimensions.innerRadius}
      valueInsideDonut={totalExpenses}
      legendProps={{ enabledWrapLines: true }}
    />
  );
};

export default FluentDonutChart;
