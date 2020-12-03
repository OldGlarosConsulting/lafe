import IMonthBuild from '@/interfaces/builds/IManagementDashboardData';

import octoberBuild from './october/october-build';
import septemberBuild from './september/september-build';

export default {
  id: 'build33',
  build: 'Obra 33',
  months: [septemberBuild, octoberBuild],
} as IMonthBuild;
