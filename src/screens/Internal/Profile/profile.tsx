import { Header } from '@components/internal/Header/header';
import { Center, Text } from '@gluestack-ui/themed';

export function Profile() {
  return (
    <Center flex={ 1 }>
      <Header />
      <Text color="$white">Profile</Text>
    </Center>
  )
}