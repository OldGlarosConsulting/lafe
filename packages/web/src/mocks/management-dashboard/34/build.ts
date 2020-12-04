import IMonthBuild from '@/interfaces/builds/IManagementDashboardData';

import octoberBuild from './october/october-build';
import septemberBuild from './september/september-build';

export default {
  id: 'build34',
  build: 'Obra 34',
  months: [septemberBuild, octoberBuild],
} as IMonthBuild;
