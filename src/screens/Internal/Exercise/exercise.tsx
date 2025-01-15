import { Header } from '@components/internal/Header/header';
import { Center, Text } from '@gluestack-ui/themed';

export function Exercise() {
  return (
    <Center flex={ 1 }>
      <Header />
      <Text color="$white">Exercise</Text>
    </Center>
  )
}