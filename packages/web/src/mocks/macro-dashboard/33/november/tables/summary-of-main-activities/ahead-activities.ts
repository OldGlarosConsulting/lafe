interface IMainActivities {
  item: string;
  activity: string;
  prev: string;
  real: string;
  physical_deviation: string;
}

export default [
  {
    item: '16',
    activity: 'INSTALAÇÕES',
    prev: '29,12%',
    real: '62,75%',
    physical_deviation: '33,64%',
  },
  {
    item: '12',
    activity: 'REVESTIMENTO EXTERNO',
    prev: '48,95%',
    real: '85,23%',
    physical_deviation: '36,28%',
  },
  {
    item: '10',
    activity: 'REVESTIMENTO DE PAREDE',
    prev: '36,36%',
    real: '40,50%',
    physical_deviation: '4,14%',
  },
  {
    item: '20',
    activity: 'DIVERSOS',
    prev: '',
    real: '2,62%',
    physical_deviation: '2,62%',
  },
  {
    item: '09',
    activity: 'REVESTIMENTO DE PISO',
    prev: '16,29%',
    real: '17,29%',
    physical_deviation: '1,00%',
  },
  {
    item: '07',
    activity: 'ALVENARIA/FECHAMENTO',
    prev: '77,66%',
    real: '79,43%',
    physical_deviation: '1,77%',
  },
  {
    item: '19',
    activity: 'PINTURA',
    prev: '',
    real: '0,78%',
    physical_deviation: '0,78%',
  },
] as IMainActivities[];
