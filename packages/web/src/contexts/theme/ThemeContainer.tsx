import React from 'react';

import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

import customTheme from '@/styles/theme';
import {
  ThemeProvider as ChakraThemeProvider,
  ColorModeProvider,
  CSSReset,
} from '@chakra-ui/core';

const ThemeContainer: React.FC = ({ children }) => (
  <ChakraThemeProvider theme={customTheme}>
    <ColorModeProvider value="light">
      <EmotionThemeProvider theme={{}}>
        <CSSReset
          config={(theme, config) => ({
            ...config,
            light: {
              ...config.light,
              bg: theme.colors.blue[300],
              color: theme.colors.gray[700],
            },
          })}
        />
        {children}
      </EmotionThemeProvider>
    </ColorModeProvider>
  </ChakraThemeProvider>
);

export default ThemeContainer;
