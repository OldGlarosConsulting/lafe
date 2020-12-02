import septemberBuild from './september/september-build';

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
    build: string;
    month_index: string;
    directExpenses: IChartData;
    totalExpenses: IChartData;
    general: Array<object>;
    aheadActivities: IMainActivities[];
    lateActivities: IMainActivities[];
  }>;
}

export default {
  id: 'build33',
  build: 'Obra 33',
  months: [septemberBuild],
} as IMonthBuild;
