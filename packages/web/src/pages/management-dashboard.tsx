import React, { useRef, useState } from 'react';
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

import data from '../mocks/macro-dashboard/data';

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

const Dashboad: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [selectedBuild, setSelectedBuild] = useState(data[0].months[0]);
  const [selectedMonth, setSelectedMonth] = useState(data[0].months[0].month);

  const FINANCIAL_ANALYSIS = React.useMemo(
    () => [
      {
        Header: 'Código',
        accessor: 'id',
      },
      {
        Header: 'Descrição',
        accessor: 'description',
      },
      {
        Header: '% Medido',
        accessor: 'measured',
      },
      {
        Header: 'Valor Orçado',
        accessor: 'budget',
      },
      {
        Header: 'Peso',
        accessor: 'weight',
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    [],
  );

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
          <Box>
            <Table
              heading="Análise Financeira"
              data={[]}
              columns={FINANCIAL_ANALYSIS}
            />
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
              data={selectedBuild.lateActivities}
              columns={SUMMARY_OF_LATE_ACTIVITIES}
            />

            <Table
              title="Principais Atividades Resumo"
              data={selectedBuild.aheadActivities}
              columns={SUMMARY_OF_AHEAD_ACTIVITIES}
            />
          </Flex>
        </Flex>
        <Flex marginTop={6} direction="column">
          <BarChart
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
          />
        </Flex>
      </Box>
    </>
  );
};

export default Dashboad;
