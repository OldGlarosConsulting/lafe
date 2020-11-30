import build33 from './33/build';

interface IMainActivities {
  item: string;
  activity: string;
  prev: string;
  real: string;
  physical_deviation: string;
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
    directExpenses: IChartData;
    totalExpenses: IChartData;
    general: Array<object>;
    aheadActivities: IMainActivities[];
    lateActivities: IMainActivities[];
  }>;
}

export default [build33] as IMonthBuild[];
