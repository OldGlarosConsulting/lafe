import IBuild from '@/interfaces/builds/IMacroBuild';

import directExpenses from './charts/direct-expenses';
import totalExpenses from './charts/total-expenses';
import general from './tables/general';
import aheadActivities from './tables/summary-of-main-activities/ahead-activities';
import lateActivities from './tables/summary-of-main-activities/late-activities';

export default {
  build: 'build34',
  month_index: '11',
  directExpenses,
  totalExpenses,
  general,
  aheadActivities,
  lateActivities,
} as IBuild;
