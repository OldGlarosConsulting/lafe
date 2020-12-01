import React from 'react';

import { useRouter } from 'next/router';

import {
  Flex,
  Image,
  Menu,
  Button,
  MenuButton,
  Text,
  MenuItem,
  Avatar,
  MenuList,
} from '@chakra-ui/core';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <Flex
      position="fixed"
      paddingX={6}
      width="100%"
      height={65}
      marginBottom={65}
      backgroundColor="#f5f5f0"
      alignItems="center"
      justifyContent="space-between"
      zIndex={3000}
    >
      <Image src="cropped-MARCA_LAFE_CHAPADA.png" width={110} />

      <Flex height="100%" width="70%" justifyContent="space-between">
        <Button
          onClick={() => {
            router.replace('/macro-physics-dashboard');
          }}
          height="100%"
          width="49.8%"
          backgroundColor="#f5f5f0"
          borderRadius={0}
          borderBottom="3px solid"
          borderColor={
            router.pathname === '/macro-physics-dashboard'
              ? 'blue.600'
              : '#f5f5f0'
          }
          color={
            router.pathname === '/macro-physics-dashboard'
              ? 'blue.600'
              : 'black'
          }
          _hover={{
            bg: 'gray.200',
            color: 'black',
          }}
          _focusWithin={{
            shadow: 0,
            outline: 0,
            bg: 'gray.200',
            color: 'black',
          }}
        >
          Analíse Física Macro
        </Button>
        <Button
          onClick={() => {
            router.replace('/management-dashboard');
          }}
          height="100%"
          width="49.8%"
          backgroundColor="#f5f5f0"
          borderRadius={0}
          borderBottom="3px solid"
          borderColor={
            router.pathname === '/management-dashboard' ? 'blue.600' : '#f5f5f0'
          }
          color={
            router.pathname === '/management-dashboard' ? 'blue.600' : 'black'
          }
          _hover={{
            bg: 'gray.200',
            color: 'black',
          }}
          _focusWithin={{
            outline: 0,
            border: '0px ',
            bg: 'gray.200',
            color: 'black',
          }}
        >
          Relatório Gerencial
        </Button>
      </Flex>
      <Flex alignItems="center">
        <Text marginRight={2}>Olá Eduardo</Text>
        <Menu>
          <MenuButton width={10} height={10} _focusWithin={{ outline: 0 }}>
            <Avatar size="sm" bg="blue.300" />
          </MenuButton>
          <MenuList>
            <MenuItem>Sair</MenuItem>
            <MenuItem>Alterar avatar</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Header;
