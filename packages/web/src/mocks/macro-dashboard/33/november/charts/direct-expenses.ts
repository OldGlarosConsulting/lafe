import IChartData from '@/interfaces/builds/IChartData';

export default {
  categories: [
    'out/19',
    'nov/19',
    'dez/19',
    'jan/20',
    'fev/20',
    'mar/20',
    'abr/20',
    'mai/20',
    'jun/20',
    'jul/20',
    'ago/20',
    'set/20',
    'out/20',
    'nov/20',
    'dez/20',
    'jan/21',
    'fev/21',
    'mar/21',
    'abr/21',
  ],
  bars: [
    {
      color: '#E53E3E',
      name: 'Despesas realizadas',
      data: [
        0,
        2.39,
        5.74,
        3.17,
        3.4,
        3.04,
        4.94,
        2.34,
        2.53,
        3.21,
        5.81,
        8.27,
        3.59,
        3.13,
      ],
    },
    {
      color: '#4299E1',
      name: 'Despesas previstas',
      data: [
        2.88,
        1.68,
        3.4,
        2.87,
        2.81,
        4.87,
        5.1,
        3.69,
        1.36,
        1.74,
        4.1,
        3.94,
        5.45,
        11.37,
        9.04,
        5.88,
        4.97,
        9.03,
        5.84,
      ],
    },
  ],
} as IChartData;