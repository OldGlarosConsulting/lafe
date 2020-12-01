import septemberBuild from './september/september-build';

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

export default { build: 'build33', months: [septemberBuild] } as IMonthBuild;
