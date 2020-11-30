import React from 'react';

import {
  Flex,
  Image,
  Menu,
  MenuButton,
  Text,
  MenuItem,
  MenuList,
} from '@chakra-ui/core';

const Header: React.FC = () => (
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
    <Image
      src="http://lafengenharia.com.br/wp-content/uploads/2018/10/cropped-MARCA_LAFE_CHAPADA.png"
      width={110}
    />
    <Flex alignItems="center">
      <Text marginRight={4}>Nome do usuário</Text>
      <Menu>
        <MenuButton width={10} height={10} _focusWithin={{ outline: 0 }}>
          <Flex
            border="3px solid"
            borderColor="blue.300"
            borderRadius="50%"
            width={10}
            height={10}
          >
            <Image
              borderRadius="50%"
              src="https://avatars3.githubusercontent.com/u/57292850?s=460&u=c239cda75c724d55793087628b4276330ae99942&v=4"
            />
          </Flex>
        </MenuButton>
        <MenuList>
          <MenuItem>Sair</MenuItem>
          <MenuItem>Alterar avatar</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  </Flex>
);

export default Header;
