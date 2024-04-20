import React, { useState } from "react";
import { Pie, Arc } from "@visx/shape";
import { Group } from "@visx/group";
import { scaleOrdinal } from "@visx/scale";
import { Text } from "@visx/text";
import { tokens } from "@fluentui/react-theme";
import { expenses, IExpense } from "@/data/ExampleExpenses";

interface DonutChartProps {
  width: number;
  height: number;
}

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
    tokens.colorPaletteTealBackground2,
    tokens.colorPalettePinkForeground2,
  ],
});

const DonutChart: React.FC<DonutChartProps> = ({ width, height }) => {
  const [hoveredSlice, setHoveredSlice] = useState<string | null>(null);

  const radius = Math.min(width, height) / 2;
  const centerY = height / 2;
  const centerX = width / 2;
  const pieValue = (data: IExpense) => data.amount;
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
            return pie.arcs.map((arc, i) => {
              const [centroidX, centroidY] = pie.path.centroid(arc);
              const arcData: IExpense = arc.data;
              const isHovered = hoveredSlice === arcData.category;

              return (
                <g
                  key={`arc-${arcData.category}-${i}`}
                  onMouseEnter={() => setHoveredSlice(arcData.category)}
                  onMouseLeave={() => setHoveredSlice(null)}
                >
                  <Arc
                    data={arcData}
                    innerRadius={radius * 0.6}
                    outerRadius={radius}
                    cornerRadius={3}
                    startAngle={arc.startAngle}
                    endAngle={arc.endAngle}
                    padAngle={0.005}
                    fill={colorScale(arcData.category)}
                  />
                  {isHovered && (
                    <Text
                      x={centroidX}
                      y={centroidY}
                      fill={tokens.colorNeutralForeground1}
                      fontSize={16}
                      fontWeight={700}
                      dy=".33em"
                      textAnchor="middle"
                      pointerEvents="none" // Ignore pointer events on text element
                    >
                      {`${arcData.category} - ${arcData.amount}`}
                    </Text>
                  )}
                </g>
              );
            });
          }}
        </Pie>
      </Group>
    </svg>
  );
};

export default DonutChart;
