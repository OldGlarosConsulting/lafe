import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Column } from 'react-table';

import BarChart from '@/components/BarChart';
import DashedChart from '@/components/DashedChart';
import Header from '@/components/Header';
import Select from '@/components/Select';
import SEO from '@/components/SEO';
import Table from '@/components/Table';
import Title from '@/components/Title';
import formatPercentageNumber from '@/utils/formatPercentageNumber';
import formatRealValue from '@/utils/formatRealValue';
import getMonthNameByIndex from '@/utils/getMonthNameByIndex';
import { Box, Flex, useToast, Text } from '@chakra-ui/core';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import builds from '../mocks/management-dashboard/data';

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

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const toast = useToast();

  const firstBuild = useMemo(() => builds[0], []);
  const firstMonth = useMemo(() => {
    return firstBuild.months[0];
  }, [firstBuild.months]);

  const [selectedBuildId, setSelectedBuildId] = useState(firstBuild.id);
  const [selectedMonth, setSelectedMonth] = useState(firstMonth.month_index);

  const selectedBuild = useMemo(() => {
    const findBuild = builds.find(build => build.id === selectedBuildId);

    return findBuild;
  }, [selectedBuildId]);

  const selectedBuildWithMonth = useMemo(() => {
    const findMonthIndex = selectedBuild.months.findIndex(
      month => month.month_index === selectedMonth,
    );

    return selectedBuild.months[findMonthIndex];
  }, [selectedBuild, selectedMonth]);

  const formattedDirectExpenses = useMemo(() => {
    return selectedBuildWithMonth.directExpenses.map(expense => ({
      id: expense.id,
      description: expense.description,
      percent_measured: formatPercentageNumber(expense.percent_measured),
      budget: formatRealValue(expense.budget),
      weight: formatRealValue(expense.weight),
      measured: formatRealValue(expense.measured),
      payments: formatRealValue(expense.payments),
      money_available: formatRealValue(expense.money_available),
      projection: formatRealValue(expense.projection),
    }));
  }, [selectedBuildWithMonth]);

  const formattedIndirectExpenses = useMemo(() => {
    return selectedBuildWithMonth.indirectExpenses.map(expense => ({
      id: expense.id,
      description: expense.description,
      percent_measured: formatPercentageNumber(expense.percent_measured),
      budget: formatRealValue(expense.budget),
      weight: formatRealValue(expense.weight),
      measured: formatRealValue(expense.measured),
      payments: formatRealValue(expense.payments),
      money_available: formatRealValue(expense.money_available),
      projection: formatRealValue(expense.projection),
    }));
  }, [selectedBuildWithMonth]);

  const formattedSummaryProjectionsBudget = useMemo(() => {
    return selectedBuildWithMonth.summaryOfProjectionsBudget.map(row => ({
      month: row.month,
      estimated_cumultative_financial: formatPercentageNumber(
        row.estimated_cumultative_financial,
      ),
      estimated_executed_financial: formatPercentageNumber(
        row.estimated_executed_financial,
      ),
      expected_cost_to_date: formatRealValue(row.expected_cost_to_date),
      cost_measured_to_date: formatRealValue(row.cost_measured_to_date),
      real_cost_to_date: formatRealValue(row.real_cost_to_date),
      budget: formatRealValue(row.budget),
      projected_cost: formatRealValue(row.projected_cost),
      financial_trend: formatPercentageNumber(row.financial_trend),
      projected_cost_per_meter: formatRealValue(row.projected_cost_per_meter),
      equivalent_area: formatRealValue(row.equivalent_area),
    }));
  }, [selectedBuildWithMonth]);

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
              value={selectedBuildWithMonth.build}
              backgroundColor="white"
              name="construction"
              placeholder="Selecione a obra"
              containerProps={{
                border: '1px solid',
                height: 10,
                borderColor: 'gray.400',
                bg: 'white',
              }}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                const { value } = event.currentTarget;

                if (!value) {
                  return;
                }

                const findBuild = builds.find(build => build.id === value);

                const findMonthIndex = findBuild.months.findIndex(
                  month => month.month_index === selectedMonth,
                );

                if (findMonthIndex < 0) {
                  toast({
                    isClosable: true,
                    status: 'error',
                    title:
                      'O registro dessa obra ainda não tem dados desse mês',
                    description:
                      'Mês indisponível, por favor selecione outro mês .',
                    position: 'top',
                    duration: 6000,
                  });

                  return;
                }

                setSelectedBuildId(value);
              }}
            >
              {builds.map(build => (
                <option value={build.id}>{build.build}</option>
              ))}
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
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                const { value } = event.currentTarget;

                if (!value) {
                  return;
                }

                setSelectedMonth(value);
              }}
            >
              {selectedBuild.months.map(month => {
                return (
                  <option value={month.month_index}>
                    {getMonthNameByIndex(Number(month.month_index))}
                  </option>
                );
              })}
            </Select>
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
              data={formattedDirectExpenses}
              columns={FINANCIAL_ANALYSIS}
            />
            <Table
              heading="Despesas Indiretas"
              data={formattedIndirectExpenses}
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
              data={formattedSummaryProjectionsBudget}
              columns={SUMMARY_OF_PROJECTIONS_BUDGET}
            />
            <BarChart
              sideText=""
              title="SÍNTESE DAS PROJEÇÕES x ORÇAMENTO"
              data={selectedBuildWithMonth.summaryOfProjectionsBudgetChart}
            />
          </Flex>
        </Flex>
        <Flex marginY={6} direction="column">
          <BarChart
            sideText="% percent"
            title="Dispesas Diretas - Previstas X Realizadas"
            data={selectedBuildWithMonth.monthlyEvolutionChart}
          />
          <DashedChart
            title="Dispesas Diretas - Previstas X Realizadas"
            data={selectedBuildWithMonth.acumulatedEvolution}
          />
        </Flex>
      </Box>
    </>
  );
};

export default Dashboard;
