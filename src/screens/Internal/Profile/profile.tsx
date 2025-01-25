import { ScrollView, TouchableOpacity } from 'react-native';
import { Center, VStack, Text, Heading } from '@gluestack-ui/themed';

import { ScreenHeader } from '@components/internal/ScreenHeader/screenHeader';
import { UserPhoto } from '@components/internal/UserPhoto/userPhoto';
import { Input } from '@components/Input/input';
import { Button } from '@components/Button/button';

export function Profile() {
  return (
    <VStack flex={ 1 }>
      <ScreenHeader title="Perfil" />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 36 }}
      >
        <Center
          mt="$6"
          px="$10"
        >
          <UserPhoto
            source={{ uri: 'https://github.com/erickcred.png' }}
            size="xl"
            alt="Erick Rick"
          />
          <TouchableOpacity>
            <Text
              color="$green500"
              fontFamily="$heading"
              fontSize="$md"
              mt="$2"
              mb="$8"
            >Alterar foto</Text>
          </TouchableOpacity>

          <Center gap="$4">
            <Input 
              placeholder="Nome"
              bg="$gray600"
            />
            <Input 
              value="erick@email.com"
              bg="$gray600"
              isReadOnly
            />
          </Center>

          <Heading
            alignSelf="flex-start"
            fontFamily="$heading"
            color="$gray200"
            fontSize="$md"
            mt="$16"
            mb="$8"
          >Alterar senha</Heading>

          <Center
            w="$full"
            gap="$4"
          >
            <Input
              placeholder="Senha antiga"
              bg="$gray600"
              secureTextEntry
            />

            <Input
              placeholder="Nova senha"
              bg="$gray600"
              secureTextEntry
            />
            <Input
              placeholder="Confirme a nova senha"
              bg="$gray600"
              secureTextEntry
            />
            
            <Button
              title="Atualizar"
            />
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  )
}