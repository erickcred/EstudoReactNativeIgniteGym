import { Header } from '@components/internal/Header/header';
import { Text, VStack } from '@gluestack-ui/themed';

export function Home() {
  return (
    <VStack flex={ 1 }>
      <Header />
    </VStack>
  )
}