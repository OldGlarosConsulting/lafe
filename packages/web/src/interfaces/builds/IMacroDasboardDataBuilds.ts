import IChartData from './IChartData';
import IGeneralTable from './IGeneralTable';
import IMainActivities from './IMainActivities';

export default interface IMonthBuild {
  id: string;
  build: string;
  months: Array<{
    build: string;
    month_index: string;
    directExpenses: IChartData;
    dashedDirectExpenses: IChartData;
    totalExpenses: IChartData;
    dashedTotalExpenses: IChartData;
    general: Array<IGeneralTable>;
    aheadActivities: IMainActivities[];
    lateActivities: IMainActivities[];
  }>;
}
