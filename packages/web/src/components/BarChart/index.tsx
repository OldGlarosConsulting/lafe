import React, { useEffect, useMemo, useState } from 'react';
import { Props as ApexChartProps } from 'react-apexcharts';

import dynamic from 'next/dynamic';

import { Box } from '@chakra-ui/core';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface IBarChartProps extends ApexChartProps {
  title: string;
  data: {
    bars: Array<{
      color: string;
      name: string;
      data: number[];
    }>;
    categories: Array<string>;
  };
  sideText: string;
}

interface IConfigs {
  series: Array<{
    color: string;
    name: string;
    data: number[];
  }>;
  options: object;
}

const ApexBarChart: React.FC<IBarChartProps> = ({ sideText, data, title }) => {
  const chartConfigs = useMemo(() => {
    return {
      series: data.bars,
      options: {
        chart: {
          type: 'bar',
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded',
          },
        },
        title: {
          text: title,
          align: 'center',
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent'],
        },
        xaxis: {
          categories: data.categories,
        },
        yaxis: {
          title: {
            text: sideText,
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter(val) {
              return `${val}`;
            },
          },
        },
      },
    };
  }, [sideText, data, title]);

  return (
    <Box
      width="100%"
      marginTop={6}
      borderRadius={8}
      padding={2}
      background="white"
    >
      <Chart
        options={chartConfigs.options}
        series={chartConfigs.series}
        type="bar"
        height={350}
      />
    </Box>
  );
};
export default ApexBarChart;
