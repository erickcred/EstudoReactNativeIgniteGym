import { TouchableOpacity, ScrollView } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { Heading, HStack, Icon, VStack, Text, Image, Box } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from '@routes/app.routes';
import BodySvg from '@assets/body.svg';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';
import { Button } from '@components/Button/button';

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={ 1 }>
      <VStack
        pt="$12"
        px="$8"
        bg="$gray600"
      >
        <TouchableOpacity onPress={ handleGoBack }>
          <Icon
            as={ ArrowLeft }
            color="$green500"
            size="xl"
          />
        </TouchableOpacity>

        <HStack
          alignItems="center"
          justifyContent="space-between"
          mt="$4"
          pb="$8"
        >
          <Heading
            color="$gray100"
            fontSize="$lg"
            flexShrink={ 1 }
          >
            Puchada frontal
          </Heading>

          <HStack alignItems="center" justifyContent="center" gap="$2">
            <BodySvg />

            <Text
              color="$gray200"
              textTransform="capitalize"
            >Costas</Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView
        showsVerticalScrollIndicator={ false }
        contentContainerStyle={{ paddingBottom: 62 }}
      >
        <VStack p="$8">
          <Image
            source="https://i.pinimg.com/236x/26/a4/31/26a4312ea5c9d9ca5415cef6670f88f0.jpg" 
            alt="Exercício"
            mb="$3"
            resizeMode="cover"
            rounded="$lg"
            w="$full"
            h="$80"
          />

          <Box bg="$gray600" rounded="$md" pb="$4" px="$4">
            <HStack
              alignItems="center"
              justifyContent="space-between"
              gap="$6"
              mt="$6"
              mb="$5"
            >
              <HStack gap="$2">
                <SeriesSvg />
                <Text color="$gray200">3 seríes</Text>
              </HStack>

              <HStack gap="$2">
                <RepetitionsSvg />
                <Text color="$gray200">12 repetições</Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
        
      </ScrollView>
    </VStack>
  )
}