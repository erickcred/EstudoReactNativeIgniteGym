import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Center, Heading, Image, Text, VStack, ScrollView } from "@gluestack-ui/themed";

import Logo from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import { Input } from "@components/Input/input";
import { Button } from "@components/Button/button";
import { Controller, useForm } from "react-hook-form";


type FormDataProps = {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
}

const signUpSchema = yup.object({
  nome: yup.string().required('Informe o Nome!'),
  email: yup.string().required('Informe o E-mail!').email('E-mail inválido!'),
  senha: yup.string().required('Informe a Senha!').min(6, 'A Senha deve ter pelo menos 6 dígitos!'),
  confirmarSenha: yup.string().required('Confirmação a Senha!')
    .oneOf([yup.ref("senha"), ""], "Senha e Confirmação confere!")
});

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  const [ isLoadingStage, setIsLoadingStage ] = useState(false);


  function handleGoBackLogin() {
    navigation.navigate('signIn');
  }

  function handleSignUp(data: FormDataProps) {
    console.log(data);
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={ false }
    >
      <VStack flex={ 1 }>
        <Image
          source={ BackgroundImg }
          alt="Passoas treinando"
          w="$full"
          h="70%"
          defaultSource={ BackgroundImg}
          position="absolute"
        />

        <VStack flex={ 1 } px="$10" pb="$16">
          <Center my="$24">
            <Logo />
            <Text
              color="$gray100"
              fontSize="$sm">
                Treine sua mente e seu corpo
            </Text>
          </Center>

          <Center flex={ 1 } gap="$2">
            <Heading color="$gray100">Crie sua conota</Heading>

            <Controller
              control={ control }
              name="nome"
              render={ ({ field: { onChange, value } }) => (
                <Input
                  placeholder="Nome"
                  autoCapitalize="none"
                  onChangeText={ onChange }
                  onSubmitEditing={ () => console.log('submit', value) }
                  value={ value }
                  errorMessage={ errors.nome?.message }
                />
              )}
            />
            
            <Controller
              control={ control }
              name="email"
              render={ ({ field: { onChange, value } }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={ onChange }
                  onSubmitEditing={ () => console.log('submit', value) }
                  value={ value }
                  errorMessage={ errors.email?.message }
                />
              )}
            />

            <Controller
              control={ control }
              name="senha"
              render={ ({ field: { onChange, value } }) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry={ true }
                  onChangeText={ onChange }
                  onSubmitEditing={ () => console.log('submit', value) }
                  value={ value }
                  errorMessage={ errors.senha?.message }
                />
              )}
            />
            <Controller
              control={ control }
              name="confirmarSenha"
              render={ ({ field: { onChange, value } }) => (
                <Input
                  placeholder="Confirmar Senha"
                  secureTextEntry={ true }
                  onChangeText={ onChange }
                  value={ value }
                  onSubmitEditing={ handleSubmit(handleSignUp) }
                  returnKeyType="send"
                  errorMessage={ errors.confirmarSenha?.message }
                />
              )}
            />

            <Button
              title="Criar e acessar"
              onPress={ handleSubmit(handleSignUp) }
            ></Button>
          </Center>

          <Button
            variant="outline"
            title="Voltar para o login"
            mt="$12"
            onPress={ handleGoBackLogin }
          ></Button>
        </VStack>
      </VStack>
    </ScrollView>
  )
}