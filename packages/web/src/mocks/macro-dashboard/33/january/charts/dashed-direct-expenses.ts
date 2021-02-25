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
        12.01,
        14.4,
        20.14,
        23.31,
        26.7,
        29.74,
        34.69,
        37.03,
        39.56,
        42.78,
        48.59,
        56.85,
        60.45,
        65.58,
      ],
    },
    {
      color: '#4299E1',
      name: 'Despesas previstas',
      data: [
        12.86,
        14.54,
        17.94,
        20.81,
        23.62,
        28.49,
        33.59,
        37.28,
        38.64,
        40.38,
        44.48,
        48.42,
        53.87,
        65.24,
        74.28,
        80.16,
        85.13,
        94.16,
        100.0,
      ],
    },
  ],
} as IChartData;
