import { Breakpoint } from "@/types/types";

export function determineBreakpoint(screenWidth: number) {
  if (screenWidth >= 1200) {
    return "large";
  } else if (screenWidth >= 768) {
    return "medium";
  } else {
    return "small";
  }
}

export function getChartDimensions(breakpoint: Breakpoint) {
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

export function formatCurrency(amount: number) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
