import {
  IChartDataPoint,
  DataVizPalette,
  getColorFromToken,
} from "@fluentui/react-charting";

export const expenseData: IChartDataPoint[] = [
  {
    legend: "Housing",
    data: 20000,
    color: getColorFromToken(DataVizPalette.color1),
    xAxisCalloutData: "Housing",
  },
  {
    legend: "Utilities",
    data: 5000,
    color: getColorFromToken(DataVizPalette.color2),
    xAxisCalloutData: "Utilities",
  },
  {
    legend: "Groceries",
    data: 8000,
    color: getColorFromToken(DataVizPalette.color3),
    xAxisCalloutData: "Groceries",
  },
  {
    legend: "Transportation",
    data: 6000,
    color: getColorFromToken(DataVizPalette.color4),
    xAxisCalloutData: "Transportation",
  },
  {
    legend: "Entertainment",
    data: 4000,
    color: getColorFromToken(DataVizPalette.color5),
    xAxisCalloutData: "Entertainment",
  },
  {
    legend: "Healthcare",
    data: 3000,
    color: getColorFromToken(DataVizPalette.color6),
    xAxisCalloutData: "Healthcare",
  },
  {
    legend: "Education",
    data: 7000,
    color: getColorFromToken(DataVizPalette.color7),
    xAxisCalloutData: "Education",
  },
  {
    legend: "Miscellaneous",
    data: 5000,
    color: getColorFromToken(DataVizPalette.color8),
    xAxisCalloutData: "Miscellaneous",
  },
];
