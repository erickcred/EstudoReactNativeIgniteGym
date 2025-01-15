import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { UserPhoto } from "./UserPhoto/userPhoto";

export function Header() {
  return (
    <HStack
      bg="$gray600"
      pt="$16"
      pb="$5"
      px="$8"
      alignItems="center"
      gap="$4"
    >
      <UserPhoto 
        source={{ uri: 'https://github.com/erickcred.png' }}
        w="$16"
        h="$16"
        alt="Erick Rick"
      />
      <VStack>
        <Text color="$gray100" fontSize="$sm">Olá,</Text>
        <Heading color="$gray100" fontSize="$md">Erick Rick</Heading>
      </VStack>
    </HStack>
  )
}