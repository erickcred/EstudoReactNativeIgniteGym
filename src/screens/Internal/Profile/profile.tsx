import { ScreenHeader } from '@components/internal/ScreenHeader/screenHeader';
import { VStack } from '@gluestack-ui/themed';

export function Profile() {
  return (
    <VStack flex={ 1 }>
      <ScreenHeader title="Profiles" />
    </VStack>
  )
}