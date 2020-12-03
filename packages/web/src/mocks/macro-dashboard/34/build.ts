import IMonthBuild from '@/interfaces/builds/IMacroDasboardDataBuilds';

import novemberBuild from './november/november-build';

export default {
  id: 'build34',
  build: 'Obra 34',
  months: [novemberBuild],
} as IMonthBuild;
