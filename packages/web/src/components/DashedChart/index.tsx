import React, { useEffect, useState } from 'react';
import { Props as ApexChartProps } from 'react-apexcharts';

import dynamic from 'next/dynamic';

import { Box } from '@chakra-ui/core';

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
}

interface IConfigs {
  series: Array<{
    color: string;
    name: string;
    data: number[];
  }>;
  options: object;
}

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ApexBarChart: React.FC<IBarChartProps> = ({ data, title }) => {
  const [chartConfigs, setChartConfigs] = useState<IConfigs>({} as IConfigs);

  useEffect(() => {
    setChartConfigs({
      series: data.bars,
      options: {
        chart: {
          type: 'line',
          height: 350,
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [5, 7, 5],
          curve: 'straight',
          dashArray: [0, 8, 5],
        },
        title: {
          text: title,
          align: 'center',
        },
        legend: {
          tooltipHoverFormatter(val, opts) {
            return `${val} - ${
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex]
            }`;
          },
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6,
          },
        },
        xaxis: {
          categories: data.categories,
        },
        yaxis: {
          title: {
            text: '% (porcentagem)',
          },
        },
        tooltip: {
          y: [
            {
              title: {
                formatter(val) {
                  return `${val}%`;
                },
              },
            },
            {
              title: {
                formatter(val) {
                  return `${val}%`;
                },
              },
            },
            {
              title: {
                formatter(val) {
                  return val;
                },
              },
            },
          ],
        },
        grid: {
          borderColor: '#f1f1f1',
        },
      },
    });
  }, [data]);
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
        type="line"
        height={350}
      />
    </Box>
  );
};
export default ApexBarChart;
