import React from "react";
import { Pie, Arc } from "@visx/shape";
import { Group } from "@visx/group";
import { scaleOrdinal } from "@visx/scale";
import { tokens } from "@fluentui/react-theme";

interface DonutChartProps {
  width: number;
  height: number;
}
interface Expense {
  category: string;
  amount: number;
}

const expenses: Expense[] = [
  { category: "Groceries", amount: 300 },
  { category: "Utilities", amount: 200 },
  { category: "Entertainment", amount: 150 },
  { category: "Transportation", amount: 100 },
  { category: "Healthcare", amount: 80 },
];

const colorScale = scaleOrdinal({
  domain: expenses.map((e) => e.category),
  range: [
    tokens.colorPaletteGreenForeground1,
    tokens.colorPaletteRedForeground1,
    tokens.colorPaletteYellowForeground1,
    tokens.colorPaletteBlueForeground2,
    tokens.colorPaletteBerryForeground1,
    tokens.colorPaletteLightGreenForeground1,
    tokens.colorPaletteMarigoldForeground1,
    tokens.colorPaletteDarkOrangeForeground1,
    tokens.colorPalettePurpleForeground2,
    tokens.colorPalettePinkForeground2,
  ],
});
const DonutChart: React.FC<DonutChartProps> = ({ width, height }) => {
  console.log(tokens);
  const radius = Math.min(width, height) / 2;
  const centerY = height / 2;
  const centerX = width / 2;
  const pieValue = (data: Expense) => data.amount;
  return (
    <svg width={width} height={height}>
      <Group top={centerY} left={centerX}>
        <Pie
          data={expenses}
          pieValue={pieValue}
          outerRadius={radius}
          innerRadius={radius * 0.6}
          cornerRadius={3}
          padAngle={0.005}
        >
          {(pie) => {
            return pie.arcs.map((arc, i) => (
              <g key={`arc-${arc.data.category}-${i}`}>
                <Arc
                  data={arc.data}
                  innerRadius={radius * 0.6}
                  outerRadius={radius}
                  cornerRadius={3}
                  startAngle={arc.startAngle}
                  endAngle={arc.endAngle}
                  padAngle={0.005}
                  fill={colorScale(arc.data.category)}
                />
              </g>
            ));
          }}
        </Pie>
      </Group>
    </svg>
  );
};

export default DonutChart;
