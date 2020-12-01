import React from 'react';

import { Text } from '@chakra-ui/core';

export default [
  {
    month: <Text color="red.500">set-20</Text>,
    estimated_cumultative_physics: <Text color="blue.500">48,42%</Text>,
    cumulative_physics_executed: <Text color="red.500">56,85%</Text>,
    expected_monthly_physical: <Text color="blue.500">3,94%</Text>,
    physical_monthly_executed: <Text color="red.500">8,27%</Text>,
    physical_deviation: '8,43%',
    performed_monthly_physicist: <Text color="green.400">34</Text>,
  },
  {
    month: <Text color="red.500">ago-20</Text>,
    estimated_cumultative_physics: <Text color="blue.500">44,49%</Text>,
    cumulative_physics_executed: <Text color="red.500">48,59%</Text>,
    expected_monthly_physical: <Text color="blue.500">4,11%</Text>,
    physical_monthly_executed: <Text color="red.500">5,81%</Text>,
    physical_deviation: '4,10%',
    performed_monthly_physicist: <Text color="green.400">22</Text>,
  },
];