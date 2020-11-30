import React from 'react';
import { FiPower } from 'react-icons/fi';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';

import Link from 'next/link';

import { useAuthentication } from '@/hooks/authentication';
import { Box, Tooltip } from '@chakra-ui/core';

import { Container } from './styles';

interface ISidebarProps {
  top?: React.ReactNode;
  middle?: React.ReactNode;
}

const Sidebar: React.FC<ISidebarProps> = () => {
  const { logOut } = useAuthentication();

  return (
    <>
      <Container>
        <ProSidebar collapsed>
          <SidebarContent>
            <Menu iconShape="square">
              <Tooltip aria-label="Macro">
                <Link href="a-report">
                  <MenuItem>Relatório A</MenuItem>
                </Link>
              </Tooltip>
              <Tooltip aria-label="Gerencial">
                <Link href="b-report">
                  <MenuItem>Relatório B</MenuItem>
                </Link>
              </Tooltip>
            </Menu>
          </SidebarContent>

          <SidebarFooter
            css={{
              color: 'Black',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Tooltip label="Sair" aria-label="Sair">
              <Box cursor="pointer" onClick={logOut} padding={3}>
                <FiPower size={20} color="Black" />
              </Box>
            </Tooltip>
          </SidebarFooter>
        </ProSidebar>
      </Container>
    </>
  );
};
export default Sidebar;
