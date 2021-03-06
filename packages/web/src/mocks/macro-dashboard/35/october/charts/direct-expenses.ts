import IChartData from '@/interfaces/builds/IChartData';

export default {
  categories: [
    'ago/20',
    'set/20',
    'out/20',
    'nov/20',
    'dez/20',
    'jan/21',
    'fev/21',
    'mar/21',
    'abr/21',
    'mai/21',
    'jun/21',
    'jul/21',
    'ago/21',
    'set/21',
    'out/21',
    'nov/21',
    'dez/21',
    'jan/22',
    'fev/22',
    'mar/22',
    'abr/22',
    'mai/22',
    'jun/22',
    'jul/22',
  ],
  bars: [
    {
      color: '#E53E3E',
      name: 'Despesas realizadas',
      data: [1.73, 2.44, 5.62],
    },
    {
      color: '#4299E1',
      name: 'Despesas previstas',
      data: [
        1.73,
        3.38,
        5.83,
        1.17,
        4.27,
        3.49,
        3.47,
        2.46,
        4.04,
        5.46,
        3.79,
        2.1,
        3.19,
        3.56,
        4.43,
        5.08,
        4.74,
        3.18,
        6.03,
        7.59,
        6.9,
        5.79,
        4.65,
        3.67,
      ],
    },
  ],
} as IChartData;
