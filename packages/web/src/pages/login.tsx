import React, { useCallback, useRef } from 'react';
import { FiLock, FiMail } from 'react-icons/fi';

import NextLink from 'next/link';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import Input from '@/components/Input';
import SEO from '@/components/SEO';
import { useAuthentication } from '@/hooks/authentication';
import getValidationErrors from '@/utils/getValidationErrors';
import { useToast, Button, Flex, Heading, Link } from '@chakra-ui/core';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

interface IFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const router = useRouter();

  const toast = useToast();

  const { logIn } = useAuthentication();

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string().email().required('E-mail obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        await logIn(data);

        toast({
          status: 'success',
          title: 'Autenticado com sucesso',
          description: 'Você está sendo redirecionado para a página inicial.',
          position: 'top',
          duration: 3000,
        });

        router.replace('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        toast({
          status: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
          position: 'top',
          duration: 5000,
        });
      }
    },
    [logIn, router, toast],
  );

  return (
    <>
      <SEO
        title="Lafe"
        image="og/boost.png"
        shouldExcludeTitleSuffix
        description="Fazer login na plataforma"
      />

      <Flex
        as="main"
        height="100vh"
        justifyContent="center"
        alignItems="center"
        paddingX={6}
        backgroundColor="blue.300"
      >
        <Flex
          backgroundColor="blue.500"
          borderRadius="md"
          flexDirection="column"
          alignItems="stretch"
          padding={16}
          boxShadow="xl"
        >
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Heading color="White" marginBottom={6}>
              Login
            </Heading>
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
              containerProps={{
                marginTop: 3,
              }}
            />
            <Button
              type="submit"
              bg="blue.300"
              color="gray.800"
              _hover={{
                bg: 'blue.400',
                color: 'gray.900',
              }}
              _focusWithin={{
                bg: 'blue.400',
                color: 'gray.900',
              }}
              width="100%"
              marginY={4}
              paddingY={6}
            >
              Entrar
            </Button>
            <NextLink href="forgot-password">
              <Link color="blue.100">Esqueci minha senha</Link>
            </NextLink>
          </Form>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
