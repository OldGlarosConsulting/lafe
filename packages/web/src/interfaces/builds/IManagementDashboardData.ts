import IChartData from './IChartData';
import IFinacialsAnalysis from './IFinacialsAnalysis';
import ISummaryOfProjectionsBudget from './ISummaryOfProjectionsBudget';

export default interface IMonthBuild {
  id: string;
  build: string;
  months: Array<{
    build: string;
    month_index: string;
    directExpenses: IFinacialsAnalysis[];
    indirectExpenses: IFinacialsAnalysis[];
    summaryOfProjectionsBudget: ISummaryOfProjectionsBudget[];
    summaryOfProjectionsBudgetChart: IChartData;
    monthlyEvolutionChart: IChartData;
  }>;
}
