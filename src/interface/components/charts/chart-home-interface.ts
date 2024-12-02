// export interface MonthlyChartOrdersAndClaims  {
//   title: string;
//   description: string;
//   labels: string[];
//   dataPoints: number[];
//   lastUpdated: string;
// }

export interface ChartProps  {
    labels: string[];
    dataPoints: number[];
}

// export interface WeeklyChartOrdersAndClaims  {
//   title: string;
//   subtitle: string;
//   labels: string[];
//   dataPoints: number[];
//   lastUpdated: string;
// }

export interface ChartBarProps extends ChartProps {
    maxDataPoints: number[];
}