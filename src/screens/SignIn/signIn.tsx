import { useState } from "react";
import { Center, Heading, Image, Text, VStack, ScrollView } from "@gluestack-ui/themed";

import Logo from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from "@components/Input/input";
import { Button } from "@components/Button/button";

export function SignIn() {
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');

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
            <Text color="$gray100" fontSize="$sm">Treine sua mente e seu corpo</Text>
          </Center>

          <Center gap="$2">
            <Heading color="$gray100">Acesse a conota</Heading>

            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={ setEmail }
              onSubmitEditing={ () => console.log('submit', email) }
              onKeyPress={ () => console.log('keypress', email) }
              value={ email }
            />
            <Input
              placeholder="Senha"
              secureTextEntry={ true }
              onChangeText={ setSenha }
              onSubmitEditing={ () => console.log('submit', senha) }
              onKeyPress={ () => console.log('keypress', senha) }
              value={ senha }
            />

            <Button
              title="Acessar"
              onPress={ () => console.log('submit', email, senha) }
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
            >Ainda não tem acesso?</Text>
            <Button
              variant="outline"
              title="Criar Conta"
              onPress={ () => console.log('submit', email, senha) }
            ></Button>
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  )
}