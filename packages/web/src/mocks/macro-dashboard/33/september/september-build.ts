import directExpenses from './charts/direct-expenses';
import totalExpenses from './charts/total-expenses';
import general from './tables/general';
import aheadActivities from './tables/summary-of-main-activities/ahead-activities';
import lateActivities from './tables/summary-of-main-activities/late-activities';

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

interface IBuild {
  build: string;
  month_index: string;
  directExpenses: IChartData;
  totalExpenses: IChartData;
  general: Array<object>;
  aheadActivities: IMainActivities[];
  lateActivities: IMainActivities[];
}

export default {
  build: 'build33',
  month_index: '9',
  directExpenses,
  totalExpenses,
  general,
  aheadActivities,
  lateActivities,
} as IBuild;
