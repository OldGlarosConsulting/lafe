import React from 'react';

import {
  color,
  ColorProps,
  justifyContent,
  JustifyContentProps,
  space,
  SpaceProps,
} from 'styled-system';

import { Flex, IconButton } from '@chakra-ui/core';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

interface ISpaceProps extends SpaceProps {
  width: string;
}

export const StyledTable = styled.table<SpaceProps>`
  ${space};
  flex: 1;
  width: 100%;
  max-width: 100%;
  display: flex;
  overflow-x: auto;
  border-radius: 4px;
  flex-direction: column;
  box-sizing: border-box;
`;

export const TableHead = styled.thead<SpaceProps>`
  ${space};
  flex-direction: row;
`;

export const TableCell = styled<
  'div',
  ISpaceProps &
    ColorProps &
    JustifyContentProps & {
      headerGroup: boolean;
    }
>('div')`
  ${space};
  ${color};
  ${justifyContent};
  flex: 1;
  display: flex;
  min-width: 150px;
  align-items: center;
  border-bottom-width: 1px;
  overflow: hidden;
  text-overflow: ellipsis;

  ${props =>
    props.headerGroup &&
    css`
      color: #3182ce;
      display: initial;

      & + th {
        border-left: 1px solid #000;
      }
    `}
`;

export const TableRow = styled(Flex)`
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.01);
  }
`;

interface ITableIconButtonProps extends SpaceProps {
  icon: any;
  onClick:
    | ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined;
  isDisabled: boolean;
  variantColor?: string;
}

export const TableIconButton: React.FC<ITableIconButtonProps> = ({
  icon,
  onClick,
  isDisabled,
  children,
  variantColor = 'gray',
  ...rest
}) => (
  <IconButton
    size="sm"
    {...rest}
    icon={icon}
    borderWidth={1}
    onClick={onClick}
    variantColor={variantColor}
    isDisabled={isDisabled}
    aria-label="Table Icon button"
  >
    {children}
  </IconButton>
);
