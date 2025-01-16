import { HStack, Image, VStack, Heading, Text, Icon } from "@gluestack-ui/themed";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { ChevronRight } from 'lucide-react-native';

type Props = TouchableOpacityProps & {

}

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity { ...rest }>
      <HStack
        bg="$gray500"
        alignItems="center"
        p="$2"
        pr="$4"
        rounded="$md"
        mb="$3"
      >
        <Image source={{ uri: 'https://i.pinimg.com/236x/26/a4/31/26a4312ea5c9d9ca5415cef6670f88f0.jpg' }}
          alt="Imagem do exercício"
          w="$16"
          h="$16"
          mr="$4"
          rounded="$md"
          resizeMode="cover"
        />

        <VStack flex={ 1 }>
          <Heading
            color="$white"
            fontSize="$md"
            fontFamily="$heading"
          >
            Puxada frontal
          </Heading>
          <Text
            color="$gray200" 
            fontSize="$sm"
            fontFamily="$body"
            mt="$1"
            numberOfLines={ 2 }
          >
            3 séries x 12 repetições
          </Text>
        </VStack>
        <Icon
          as={ ChevronRight }
          color="$gray300"
          size="xl"
        />
      </HStack>
    </TouchableOpacity>
  )
}