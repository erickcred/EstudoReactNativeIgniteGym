import { Center, Heading, Image, Text, VStack } from "@gluestack-ui/themed";
import BackgroundImg from '@assets/background.png';
import Logo from '@assets/logo.svg';
import { Input } from "@components/Input/input";

export function SignIn() {
  return (
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

          <Input placeholder="E-mail"></Input>
          <Input placeholder="Senha"></Input>
        </Center>
      </VStack>
    </VStack>
  )
}