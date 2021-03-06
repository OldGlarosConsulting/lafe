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
      data: [1.73, 4.17, 9.79, 12.17],
    },
    {
      color: '#4299E1',
      name: 'Despesas previstas',
      data: [
        1.73,
        5.11,
        10.94,
        13.36,
        16.38,
        19.87,
        23.34,
        25.8,
        29.84,
        35.3,
        39.09,
        41.19,
        44.38,
        47.94,
        52.37,
        57.45,
        62.19,
        65.37,
        71.4,
        78.99,
        85.89,
        91.68,
        96.33,
        100.0,
      ],
    },
  ],
} as IChartData;
