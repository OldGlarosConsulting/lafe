import IMonthBuild from '@/interfaces/builds/IMacroDasboardDataBuilds';

import novemberBuild from './november/november-build';
import octoberBuild from './october/october-build';
import septemberBuild from './september/september-build';
import januaryBuild from './january/january-build';

export default {
  id: 'build33',
  build: 'Obra 33',
  months: [septemberBuild, octoberBuild, novemberBuild, januaryBuild],
} as IMonthBuild;
