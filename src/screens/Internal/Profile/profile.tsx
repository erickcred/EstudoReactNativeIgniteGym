import { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import { Center, VStack, Text, Heading, useToast } from '@gluestack-ui/themed';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';


import { ScreenHeader } from '@components/internal/ScreenHeader/screenHeader';
import { UserPhoto } from '@components/internal/UserPhoto/userPhoto';
import { Input } from '@components/Input/input';
import { Button } from '@components/Button/button';
import { ToastMessage } from '@components/ToastMessage/toastMessage';

export function Profile() {
  const [ userPhoto, setUserPhoto ] = useState<string>('https://github.com/erickcred.png');
  const toast = useToast();

  async function handleUserPhotoSelect() {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [ 4, 4 ],
        allowsEditing: true,
      });
  
      if (photoSelected.canceled) return;
  
      const photoUri = photoSelected.assets[0].uri
      if (photoUri) {
        const photoInfo = await FileSystem.getInfoAsync(photoUri) as { size: number };
        
        if (photoInfo.size && (photoInfo.size / 1024 / 1024) > 0.05) { // Validação para ver se a foto é maior que 5mb
          toast.show({
            placement: 'top',
            render: ({ id }) => (
              <ToastMessage
                id={ id }
                title="Erro!"
                description="Essa imagem é muito grando. Escolha uma de até 5MB."
                action="error"
                onClose={ () => toast.close(id) }
              />
            ),
            duration: 10000,
          });
          return;
        }
  
        setUserPhoto(photoUri);
      }
    } catch (error) {
      toast.show({
        render: ({ id }) => (
          <ToastMessage
            id={ id }
            title="Não foi possível carregar a imagem."
            action="error"
            onClose={ () => toast.close(id) }
          />
        )
      });
      console.log(error);
    }

  }

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
            source={{ uri: userPhoto }}
            size="xl"
            alt="Erick Rick"
          />
          <TouchableOpacity onPress={ handleUserPhotoSelect }>
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