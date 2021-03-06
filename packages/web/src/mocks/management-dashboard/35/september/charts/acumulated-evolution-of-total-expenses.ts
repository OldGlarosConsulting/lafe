import IChartData from '@/interfaces/builds/IChartData';

export default {
  categories: [
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
      name: 'CUSTO PROJETADO',
      data: [5.45],
    },
    {
      color: '#4299E1',
      name: 'CUSTO ORÇADO',
      data: [
        8.81,
        12.8,
        15.97,
        20.15,
        23.91,
        27.4,
        30.75,
        34.72,
        40.32,
        44.46,
        47.25,
        50.94,
        54.56,
        58.67,
        63.17,
        67.66,
        71.29,
        76.37,
        82.65,
        88.27,
        93.34,
        97.72,
        100.0,
      ],
    },
  ],
} as IChartData;
