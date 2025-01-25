import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";

export function HistoryCard() {
  return (
    <HStack
      w="$full"
      px="$5"
      py="$4"
      mb="$3"
      bg="$gray600"
      rounded="$md"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack
        mr="$5"
        flexShrink={ 1 }
      >
        <Heading
          color="$white"
          fontFamily="$heading"
          fontSize="$md"
          textTransform="capitalize"
          numberOfLines={ 2 }
        >
          Costas
        </Heading>

        <Text
          color="$gray100"
          fontFamily="$body"
          fontSize="$lg"
          numberOfLines={ 2 }
        >
          Puxada frontal
        </Text>
      </VStack>

      <Text color="$gray300" fontSize="$md">08:00</Text>
    </HStack>
  )
}