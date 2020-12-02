import build33 from './33/build';

interface IMainActivities {
  item: string;
  activity: string;
  prev: number;
  real: number;
  physical_deviation: number;
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
  id: string;
  build: string;
  months: Array<{
    month_index: string;
    build: string;
    month: string;
    directExpenses: IChartData;
    totalExpenses: IChartData;
    general: Array<object>;
    aheadActivities: IMainActivities[];
    lateActivities: IMainActivities[];
  }>;
}

export default [build33] as IMonthBuild[];
