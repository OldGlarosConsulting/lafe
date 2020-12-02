interface IChartData {
  bars: Array<{
    color: string;
    name: string;
    data: number[];
  }>;
  categories: Array<string>;
}

export default {
  categories: [
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
      name: 'CUSTO PROJETADO',
      data: [2.63, 6.55, 3.69, 3.92, 3.32, 5.7, 3.3, 5.9, 4.46, 4.41, 5.59],
    },
    {
      color: '#4299E1',
      name: 'CUSTO ORÇADO',
      data: [
        2.37,
        3.53,
        3.45,
        3.4,
        4.93,
        5.07,
        4.13,
        2.62,
        2.84,
        4.35,
        4.31,
        5.49,
        9.24,
        7.51,
        5.69,
        4.9,
        7.85,
        5.67,
      ],
    },
  ],
} as IChartData;
