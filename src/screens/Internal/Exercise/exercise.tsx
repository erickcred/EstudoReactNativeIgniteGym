import { ScreenHeader } from '@components/ScreenHeader/screenHeader';
import { VStack } from '@gluestack-ui/themed';

export function Exercise() {
  return (
    <VStack flex={ 1 }>
      <ScreenHeader title="Exercício" />
    </VStack>
  )
}