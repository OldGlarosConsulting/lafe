import IMonthBuild from '@/interfaces/builds/IManagementDashboardData';

import octoberBuild from './october/october-build';
import septemberBuild from './september/september-build';

export default {
  id: 'build35',
  build: 'Obra 35',
  months: [septemberBuild, octoberBuild],
} as IMonthBuild;
