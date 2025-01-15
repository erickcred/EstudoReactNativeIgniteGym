import { Header } from '@components/internal/Header/header';
import { Center, Text } from '@gluestack-ui/themed';

export function History() {
  return (
    <Center flex={ 1 }>
      <Header />
      <Text color="$white">History</Text>
    </Center>
  )
}