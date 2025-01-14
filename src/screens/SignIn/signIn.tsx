import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Center, Heading, Image, Text, VStack, ScrollView } from "@gluestack-ui/themed";

import Logo from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Input } from "@components/Input/input";
import { Button } from "@components/Button/button";

export function SignIn() {
  const navigator = useNavigation<AuthNavigatorRoutesProps>();

  const [ inputEmail, setInputEmail ] = useState('');
  const [ inputSenha, setInputSenha ] = useState('');

  const [ isLoadingStage, setIsLoadingStage ] = useState(false);

  function handleLogin() {
    
  }

  function handleNewAccount() {
    navigator.navigate('signUp');
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
            <Text color="$gray100" fontSize="$sm">Treine sua mente e seu corpo</Text>
          </Center>

          <Center gap="$2">
            <Heading color="$gray100">Acesse a conota</Heading>

            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={ setInputEmail }
              onSubmitEditing={ () => console.log('submit', inputEmail) }
              onKeyPress={ () => console.log('keypress', inputEmail) }
              value={ inputEmail }
            />
            <Input
              placeholder="Senha"
              secureTextEntry={ true }
              onChangeText={ setInputSenha }
              onSubmitEditing={ () => console.log('submit', inputSenha) }
              onKeyPress={ () => console.log('keypress', inputSenha) }
              value={ inputSenha }
            />

            <Button
              title="Acessar"
              onPress={ handleLogin }
            ></Button>
          </Center>

          <Center
            flex={ 1 }
            justifyContent="flex-end"
            mt="$4"
          >
            <Text
              color="$gray100"
              fontFamily="$body"
              fontSize="$sm"
              mb="$3"
            >
              Ainda não tem acesso?
            </Text>
            <Button
              variant="outline"
              title="Criar Conta"
              onPress={ handleNewAccount }
            ></Button>
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  )
}