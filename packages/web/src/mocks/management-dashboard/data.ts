import build33 from './33/build';

interface IDirectFinacialsAnalysis {
  id: string;
  description: string;
  percent_measured: number;
  budget: number;
  weight: number;
  measured: number;
  payments: number;
  money_available: number;
  projection: number;
}

interface ISummaryOfProjectionsBudget {
  month: string;
  estimated_cumultative_financial: number;
  estimated_executed_financial: number;
  expected_cost_to_date: number;
  cost_measured_to_date: number;
  real_cost_to_date: number;
  budget: number;
  projected_cost: number;
  financial_trend: number;
  projected_cost_per_meter: number;
  equivalent_area: number;
}

interface IChartData {
  bars: Array<{
    color: string;
    name: string;
    data: number[];
  }>;
  categories: Array<string>;
}

interface IMonthBuild {
  build: string;
  months: Array<{
    build: string;
    month: string;
    directExpenses: IDirectFinacialsAnalysis[];
    indirectExpenses: IDirectFinacialsAnalysis[];
    summaryOfProjectionsBudget: ISummaryOfProjectionsBudget[];
    summaryOfProjectionsBudgetChart: IChartData;
  }>;
}

export default [build33] as IMonthBuild[];
