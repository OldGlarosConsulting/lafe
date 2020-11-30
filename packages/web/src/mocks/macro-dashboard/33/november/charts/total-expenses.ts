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
        2.64,
        5.76,
        3.45,
        3.68,
        3.07,
        5.46,
        3.05,
        3.8,
        4.33,
        4.42,
        8.24,
      ],
    },
    {
      color: '#4299E1',
      name: 'Despesas previstas',
      data: [
        3.22,
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
