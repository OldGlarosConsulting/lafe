import IChartData from '@/interfaces/builds/IChartData';
import IFinacialsAnalysis from '@/interfaces/builds/IFinacialsAnalysis';
import ISummaryOfProjectionsBudget from '@/interfaces/builds/ISummaryOfProjectionsBudget';

export default interface IBuild {
  build: string;
  month_index: string;
  directExpenses: IFinacialsAnalysis[];
  indirectExpenses: IFinacialsAnalysis[];
  summaryOfProjectionsBudget: ISummaryOfProjectionsBudget[];
  summaryOfProjectionsBudgetChart: IChartData;
  monthlyEvolutionChart: IChartData;
}
