import IBuild from '@/interfaces/builds/IManagementBuild';

import acumulatedEvolution from './charts/acumulated-evolution-of-total-expenses';
import monthlyEvolutionChart from './charts/monthly-evolution-of-total-expenses';
import summaryOfProjectionsBudgetChart from './charts/summary-of-projections-budget';
import directExpenses from './tables/financial-analysis/direct-expenses';
import indirectExpenses from './tables/financial-analysis/indirect-expenses';
import summaryOfProjectionsBudget from './tables/summary-of-projections-budget';

export default {
  build: 'build33',
  month_index: '9',
  directExpenses,
  indirectExpenses,
  summaryOfProjectionsBudget,
  summaryOfProjectionsBudgetChart,
  monthlyEvolutionChart,
  acumulatedEvolution,
} as IBuild;
