import IChartData from '@/interfaces/builds/IChartData';

export default {
  categories: [
    'Projetos',
    'Laudos e estudos',
    'Serviços preliminares',
    'Terraplanagem',
    'Fundação',
    'Super estrutura',
    'Alvenaria/Fechamento',
    'Impermeabilização/Isolamento',
    'Revestimento de piso',
    'Revestimento de parede',
    'Revestimento de teto',
    'Revestimento externo',
    'Esquadrias de alumínio',
    'Esquadrias em metalon',
    'Esquadrias em madeira',
    'Instalações',
    'Bancadas',
    'Louças e metais',
    'Pintura',
    'Diversos',
    'Licenças, taxas e emolumentos',
    'Segurança do trabalho',
    'Custos indiretos - pessoal',
    'Custos indiretos - equipamentos',
    'Custos indiretos - outros',
    'Administração',
  ],
  bars: [
    {
      color: '#2C5282',
      name: 'CUSTO PROJETADO',
      data: [
        393545.25,
        1908.61,
        91213.53,
        164292.55,
        462946.36,
        1450698.4,
        295720.14,
        122394.21,
        748430.57,
        659946.5,
        1959155.05,
        543009.19,
        964655.57,
        173245.01,
        138847.45,
        1961228.36,
        198634.44,
        191195.37,
        279380.63,
        939454.25,
        136048.74,
        184083.63,
        2026184.4,
        267145.74,
        393317.24,
        2180905.39,
      ],
    },
    {
      color: '#ECC94B',
      name: 'CUSTO ORÇADO',
      data: [
        397552.48,
        45218.96,
        88841.77,
        200590.72,
        515403.26,
        1422012.33,
        295720.14,
        116027.46,
        748430.57,
        659946.5,
        1959155.05,
        543009.19,
        964655.57,
        173245.01,
        138847.45,
        1941099.16,
        198634.44,
        191195.37,
        279380.63,
        939454.25,
        136048.74,
        184083.63,
        1261449.85,
        265397.34,
        406169.82,
        2180905.39,
      ],
    },
  ],
} as IChartData;