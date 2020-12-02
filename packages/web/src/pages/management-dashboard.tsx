import React, { useMemo, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Column } from 'react-table';

import BarChart from '@/components/BarChart';
import DashedChart from '@/components/DashedChart';
import Header from '@/components/Header';
import Select from '@/components/Select';
import SEO from '@/components/SEO';
import Table from '@/components/Table';
import Title from '@/components/Title';
import { Box, Button, Flex, Text, Tooltip } from '@chakra-ui/core';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import data from '../mocks/management-dashboard/data';

interface IDirectFinacialsAnalysis {
  id: string;
  description: string;
  percent_measured: number;
  budget: number;
  weight: number;
  measured: number;
  payments: number;
  money_available: number;
  projection: number;
}

interface ISummaryOfProjectionsBudget {
  month: string;
  estimated_cumultative_financial: number;
  estimated_executed_financial: number;
  expected_cost_to_date: number;
  cost_measured_to_date: number;
  real_cost_to_date: number;
  budget: number;
  projected_cost: number;
  financial_trend: number;
  projected_cost_per_meter: number;
  equivalent_area: number;
}

interface IChartData {
  bars: Array<{
    color: string;
    name: string;
    data: number[];
  }>;
  categories: Array<string>;
}

interface IBuild {
  build: string;
  month: string;
  directExpenses: IDirectFinacialsAnalysis[];
  indirectExpenses: IDirectFinacialsAnalysis[];
  summaryOfProjectionsBudget: ISummaryOfProjectionsBudget[];
  summaryOfProjectionsBudgetChart: IChartData;
}

const FINANCIAL_ANALYSIS = [
  {
    Header: '.',
    columns: [
      {
        Header: <Text color="blue.500">Código</Text>,
        accessor: 'id',
      },
      {
        Header: <Text color="blue.500">Descrição</Text>,
        accessor: 'description',
      },
      {
        Header: <Text color="blue.500">% Medido</Text>,
        accessor: 'percent_measured',
      },
      {
        Header: <Text color="blue.500">Valor Orçado</Text>,
        accessor: 'budget',
      },
      {
        Header: <Text color="blue.500">Peso</Text>,
        accessor: 'weight',
      },
    ],
  },
  {
    Header: 'VALORES ACUMULADOS',
    columns: [
      {
        Header: <Text color="blue.500">Medido</Text>,
        accessor: 'measured',
      },
      {
        Header: (
          <Text color="blue.500">Pagamentos (Pago + A Pagar + Compromet.)</Text>
        ),
        accessor: 'payments',
      },
      {
        Header: <Text color="blue.500">Verba</Text>,
        accessor: 'money_available',
      },
      {
        Header: <Text color="blue.500">Projeçãos</Text>,
        accessor: 'projection',
      },
    ],
  },
] as Column[];

const DIRECT_EXPENSES = [
  {
    Header: <Text color="blue.500">Código</Text>,
    accessor: 'id',
  },
  {
    Header: <Text color="blue.500">Descrição</Text>,
    accessor: 'description',
  },
  {
    Header: <Text color="blue.500">% Medido</Text>,
    accessor: 'percent_measured',
  },
  {
    Header: <Text color="blue.500">Valor Orçado</Text>,
    accessor: 'budget',
  },
  {
    Header: <Text color="blue.500">Peso</Text>,
    accessor: 'weight',
  },
  {
    Header: <Text color="blue.500">Medido</Text>,
    accessor: 'measured',
  },
  {
    Header: (
      <Text color="blue.500">Pagamentos (Pago + A Pagar + Compromet.)</Text>
    ),
    accessor: 'payments',
  },
  {
    Header: <Text color="blue.500">Verba</Text>,
    accessor: 'money_available',
  },
  {
    Header: <Text color="blue.500">Projeçãos</Text>,
    accessor: 'projection',
  },
] as Column[];

const SUMMARY_OF_PROJECTIONS_BUDGET = [
  {
    Header: 'Mês',
    accessor: 'month',
  },
  {
    Header: '% Financeiro acumulado previsto',
    accessor: 'estimated_cumultative_financial',
  },
  {
    Header: '% FInanceiro acumulado executado',
    accessor: 'estimated_executed_financial',
  },
  {
    Header: 'Custo previsto até a data',
    accessor: 'expected_cost_to_date',
  },
  {
    Header: 'Custo medido até a data',
    accessor: 'cost_measured_to_date',
  },
  {
    Header: 'Custo real até a data',
    accessor: 'real_cost_to_date',
  },
  {
    Header: 'Valor orçado',
    accessor: 'budget',
  },
  {
    Header: 'Custo projetado',
    accessor: 'projected_cost',
  },
  {
    Header: 'Tendência financeira',
    accessor: 'financial_trend',
  },
  {
    Header: 'Custo projetado por m² de AEQ',
    accessor: 'projected_cost_per_meter',
  },
  {
    Header: 'Área equivalente',
    accessor: 'equivalent_area',
  },
] as Column[];

const Dashboad: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [selectedBuild, setSelectedBuild] = useState({
    month: data[0].months[0].month,
    build: data[0].months[0].month,
    directExpenses: useMemo(
      () =>
        data[0].months[0].directExpenses.map(expense => ({
          id: expense.id,
          description: expense.description,
          percent_measured: expense.percent_measured.toLocaleString('pt-br', {
            style: 'percent',
            minimumFractionDigits: 2,
          }),
          budget: expense.budget.toLocaleString('pt-br', {
            currency: 'BRL',
          }),
          weight: expense.weight.toLocaleString('pt-br', {
            currency: 'BRL',
          }),
          measured: expense.measured.toLocaleString('pt-br', {
            currency: 'BRL',
          }),
          payments: expense.payments.toLocaleString('pt-br', {
            currency: 'BRL',
          }),
          money_available: expense.money_available.toLocaleString('pt-br', {
            currency: 'BRL',
          }),
          projection: expense.projection.toLocaleString('pt-br', {
            currency: 'BRL',
          }),
        })),
      [],
    ),
    indirectExpenses: data[0].months[0].indirectExpenses,
    summaryOfProjectionsBudget: data[0].months[0].summaryOfProjectionsBudget,
    summaryOfProjectionsBudgetChart:
      data[0].months[0].summaryOfProjectionsBudgetChart,
  });
  const [selectedMonth, setSelectedMonth] = useState(data[0].months[0].month);

  return (
    <>
      <SEO
        title="Lafe"
        image="og/boost.png"
        shouldExcludeTitleSuffix
        description="Fazer Dashboad na plataforma"
      />

      <Header />

      <Box
        as="main"
        maxWidth="100vw"
        paddingX={{ xs: 12, lg: 8 }}
        paddingTop={20}
      >
        <Flex color="white" direction="column">
          <Title>Filtros</Title>

          <Form
            css={{
              width: '35%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}
            ref={formRef}
            onSubmit={() => {
              console.log('ok');
            }}
          >
            <Select
              height={8}
              value={selectedBuild.build}
              backgroundColor="white"
              name="construction"
              placeholder="Selecione a obra"
              containerProps={{
                border: '1px solid',
                height: 10,
                borderColor: 'gray.400',
                bg: 'white',
              }}
            >
              <option value="build33">Obra33</option>
              <option value="build34">Obra34</option>
              <option value="build35">Obra35</option>
            </Select>

            <Select
              height={8}
              backgroundColor="white"
              value={selectedMonth}
              name="month"
              placeholder="Selecione o mês"
              containerProps={{
                height: 10,
                marginLeft: '16px',
                border: '1px solid',
                borderColor: 'gray.400',
                bg: 'white',
              }}
            >
              <option value="september">Setembro</option>
              <option value="october">Outubro</option>
              <option value="november">Novembro</option>
            </Select>

            <Tooltip label="Filtrar resultados" aria-label="Filtrar resultados">
              <Button marginLeft={4} height={10} type="submit">
                <FiSearch color="Black" size={40} />
              </Button>
            </Tooltip>
          </Form>
        </Flex>

        <Flex marginTop={6} direction="column">
          <Flex
            marginTop={6}
            direction="column"
            padding={4}
            backgroundColor="white"
            borderRadius="md"
            height="100%"
          >
            <Text
              textAlign="center"
              fontWeight="bold"
              fontSize={20}
              marginBottom={2}
            >
              Principais Atividades Resumo
            </Text>
            <Table
              heading="Despesas Diretas"
              data={selectedBuild.directExpenses}
              columns={FINANCIAL_ANALYSIS}
            />
            <Table
              heading="Despesas Indiretas"
              data={selectedBuild.indirectExpenses}
              columns={DIRECT_EXPENSES}
            />
          </Flex>

          <Flex
            marginTop={6}
            direction="column"
            padding={4}
            backgroundColor="white"
            borderRadius="md"
            height="100%"
          >
            <Text
              textAlign="center"
              fontWeight="bold"
              fontSize={20}
              marginBottom={2}
            >
              SÍNTESE DAS PROJEÇÕES x ORÇAMENTO
            </Text>
            <Table
              data={selectedBuild.summaryOfProjectionsBudget}
              columns={SUMMARY_OF_PROJECTIONS_BUDGET}
            />
            <BarChart
              sideText=""
              title="SÍNTESE DAS PROJEÇÕES x ORÇAMENTO"
              data={selectedBuild.summaryOfProjectionsBudgetChart}
            />
          </Flex>
        </Flex>
        <Flex marginTop={6} direction="column">
          {/* <BarChart
            title="Dispesas Diretas - Previstas X Realizadas"
            data={selectedBuild.directExpenses}
          />
          <DashedChart
            title="Dispesas Diretas - Previstas X Realizadas"
            data={selectedBuild.directExpenses}
          />
          <BarChart
            title="Despesas Totais (DD+DI) - Previstas x Realizadas"
            data={selectedBuild.totalExpenses}
          />
          <DashedChart
            title="Despesas Totais (DD+DI) - Previstas x Realizadas"
            data={selectedBuild.totalExpenses}
          /> */}
        </Flex>
      </Box>
    </>
  );
};

export default Dashboad;
