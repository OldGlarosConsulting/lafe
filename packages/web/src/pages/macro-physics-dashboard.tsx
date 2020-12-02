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
import formatPercentageNumber from '@/utils/formatPercentageNumber';
import formatRealValue from '@/utils/formatRealValue';
import getMonthNameByIndex from '@/utils/getMonthNameByIndex';
import { Box, Button, Flex, Text, Tooltip } from '@chakra-ui/core';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import builds from '../mocks/macro-dashboard/data';

const GENERAL = [
  {
    Header: <Text color="red.500">Mês</Text>,
    accessor: 'month',
  },
  {
    Header: <Text color="blue.500">% Físico acumulado previsto</Text>,
    accessor: 'estimated_cumultative_physics',
  },
  {
    Header: <Text color="red.500">% Físico Acumulado Executado</Text>,
    accessor: 'cumulative_physics_executed',
  },
  {
    Header: <Text color="blue.500">% Físico Mensal Previsto</Text>,
    accessor: 'expected_monthly_physical',
  },
  {
    Header: <Text color="red.500">% Físico Mensal Executado</Text>,
    accessor: 'physical_monthly_executed',
  },
  {
    Header: 'Desvio físico',
    accessor: 'physical_deviation',
  },
  {
    Header: <Text color="green.500">Obra adiantada (em dias)</Text>,
    accessor: 'performed_monthly_physicist',
  },
] as Column[];

const SUMMARY_OF_AHEAD_ACTIVITIES = [
  {
    Header: <Text color="blue.500">Item</Text>,
    accessor: 'item',
  },
  {
    Header: <Text color="blue.500">Atividades Adiantadas</Text>,
    accessor: 'activity',
  },
  {
    Header: <Text color="blue.500">% Prev. Até a data</Text>,
    accessor: 'prev',
  },
  {
    Header: <Text color="blue.500">% Real. Até a data</Text>,
    accessor: 'real',
  },
  {
    Header: <Text color="blue.500">% Desvio</Text>,
    accessor: 'physical_deviation',
  },
] as Column[];

const SUMMARY_OF_LATE_ACTIVITIES = [
  {
    Header: <Text color="red.500">Item</Text>,
    accessor: 'item',
  },
  {
    Header: <Text color="red.500">Atividades Atrasadas</Text>,
    accessor: 'activity',
  },
  {
    Header: <Text color="red.500">% Prev. Até a data</Text>,
    accessor: 'prev',
  },
  {
    Header: <Text color="red.500">% Real. Até a data</Text>,
    accessor: 'real',
  },
  {
    Header: <Text color="red.500">% Desvio</Text>,
    accessor: 'physical_deviation',
  },
] as Column[];

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

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

  const formattedAheadActivities = useMemo(() => {
    return selectedBuildWithMonth.aheadActivities.map(row => ({
      item: row.item,
      activity: row.activity,
      prev: formatPercentageNumber(row.prev),
      real: formatPercentageNumber(row.real),
      physical_deviation: formatPercentageNumber(row.physical_deviation),
    }));
  }, [selectedBuildWithMonth]);

  const formattedLateActivities = useMemo(() => {
    return selectedBuildWithMonth.lateActivities.map(row => ({
      item: row.item,
      activity: row.activity,
      prev: formatPercentageNumber(row.prev),
      real: formatPercentageNumber(row.real),
      physical_deviation: formatPercentageNumber(row.physical_deviation),
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
          <Box>
            <Table data={selectedBuildWithMonth.general} columns={GENERAL} />
          </Box>

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
              title="Resumo das Principais Atividades"
              data={formattedLateActivities}
              columns={SUMMARY_OF_LATE_ACTIVITIES}
            />

            <Table
              title="Principais Atividades Resumo"
              data={formattedAheadActivities}
              columns={SUMMARY_OF_AHEAD_ACTIVITIES}
            />
          </Flex>
        </Flex>
        <Flex marginY={6} direction="column">
          <BarChart
            sideText="% (porcentagem)"
            title="Dispesas Diretas - Previstas X Realizadas"
            data={selectedBuildWithMonth.directExpenses}
          />
          <DashedChart
            title="Dispesas Diretas - Previstas X Realizadas"
            data={selectedBuildWithMonth.directExpenses}
          />
          <BarChart
            sideText="% (porcentagem)"
            title="Despesas Totais (DD+DI) - Previstas x Realizadas"
            data={selectedBuildWithMonth.totalExpenses}
          />
          <DashedChart
            title="Despesas Totais (DD+DI) - Previstas x Realizadas"
            data={selectedBuildWithMonth.totalExpenses}
          />
        </Flex>
      </Box>
    </>
  );
};

export default Dashboard;
