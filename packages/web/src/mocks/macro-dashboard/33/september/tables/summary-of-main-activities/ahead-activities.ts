interface IMainActivities {
  item: string;
  activity: string;
  prev: number;
  real: number;
  physical_deviation: number;
}

export default [
  {
    item: '16',
    activity: 'INSTALAÇÕES',
    prev: 0.29116779449317975,
    real: 0.6275331391297557,
    physical_deviation: 0.33636534463657597,
  },
  {
    item: '12',
    activity: 'REVESTIMENTO EXTERNO',
    prev: 0.489482617240399,
    real: 0.8522810953202222,
    physical_deviation: 0.36279847807982324,
  },
  {
    item: '10',
    activity: 'REVESTIMENTO DE PAREDE',
    prev: 0.36362173825650207,
    real: 0.4050037376791716,
    physical_deviation: 0.04138199942266951,
  },
  {
    item: '20',
    activity: 'DIVERSOS',
    prev: 0,
    real: 0.026212993540981482,
    physical_deviation: 0.026212993540981482,
  },
  {
    item: '09',
    activity: 'REVESTIMENTO DE PISO',
    prev: 0.1628506267849298,
    real: 0.17288905780647884,
    physical_deviation: 0.010038431021549055,
  },
  {
    item: '07',
    activity: 'ALVENARIA/FECHAMENTO',
    prev: 0.7766034354798593,
    real: 0.7943345886020291,
    physical_deviation: 0.017731153122169774,
  },
  {
    item: '19',
    activity: 'PINTURA',
    prev: 0,
    real: 0.007758912475318634,
    physical_deviation: 0.007758912475318634,
  },
] as IMainActivities[];
