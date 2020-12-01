interface IMainActivities {
  item: string;
  activity: string;
  prev: string;
  real: string;
  physical_deviation: string;
}

export default [
  {
    item: '08',
    activity: 'IPERMEABILIZAÇÃO / ISOLAMENTO',
    prev: '54,02%',
    real: '31,48%',
    physical_deviation: '-22,54%',
  },
  {
    item: '13',
    activity: 'ESQUADRIAS DE ALUMÍNIO',
    prev: '2,27%',
    real: '1,73%',
    physical_deviation: '-0,54%',
  },
  {
    item: '11',
    activity: 'REVESTIMENTO DE TETO',
    prev: '2,26%',
    real: '0,04%',
    physical_deviation: '-2,22%',
  },
  {
    item: '14',
    activity: 'ESQUADRIAS EM METALON',
    prev: '6,56%',
    real: '5,15%',
    physical_deviation: '-1,41%',
  },
] as IMainActivities[];
