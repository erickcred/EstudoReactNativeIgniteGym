import { useState } from "react";
import { Center, Heading, Image, Text, VStack, ScrollView } from "@gluestack-ui/themed";

import Logo from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from "@components/Input/input";
import { Button } from "@components/Button/button";

export function SignUp() {
  const [ inputNome, setInputNome ] = useState('');
  const [ inputEmail, setInputEmail ] = useState('');
  const [ inputSenha, setInputSenha ] = useState('');

  const [ isLoadingStage, setIsLoadingStage ] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={ false }
    >
      <VStack flex={ 1 } bg="$gray700">
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

            <Input
              placeholder="Nome"
              autoCapitalize="none"
              onChangeText={ setInputNome }
              onSubmitEditing={ () => console.log('submit', inputNome) }
              onKeyPress={ () => console.log('keypress', inputNome) }
              value={ inputNome }
            />
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
              title="Criar e acessar"
              onPress={ () => console.log('submit', { inputNome, inputEmail, inputSenha }) }
            ></Button>
          </Center>

          <Button
            variant="outline"
            title="Voltar para o login"
            mt="$12"
            onPress={ () => console.log('submit', { inputNome, inputEmail, inputSenha }) }
          ></Button>
        </VStack>
      </VStack>
    </ScrollView>
  )
}