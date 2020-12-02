import monthlyEvolutionChart from './charts/monthly-evolution-of-total-expenses';
import summaryOfProjectionsBudgetChart from './charts/summary-of-projections-budget';
import directExpenses from './tables/financial-analysis/direct-expenses';
import indirectExpenses from './tables/financial-analysis/indirect-expenses';
import summaryOfProjectionsBudget from './tables/summary-of-projections-budget';

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

interface IBuild {
  build: string;
  month_index: string;
  directExpenses: IDirectFinacialsAnalysis[];
  indirectExpenses: IDirectFinacialsAnalysis[];
  summaryOfProjectionsBudget: ISummaryOfProjectionsBudget[];
  summaryOfProjectionsBudgetChart: IChartData;
  monthlyEvolutionChart: IChartData;
}

export default {
  build: 'build33',
  month_index: '9',
  directExpenses,
  indirectExpenses,
  summaryOfProjectionsBudget,
  summaryOfProjectionsBudgetChart,
  monthlyEvolutionChart,
} as IBuild;
