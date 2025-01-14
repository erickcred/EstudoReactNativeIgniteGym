import { Input as GluestackInput, InputField } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof InputField>

export function Input({ ...rest }: Props) {
  return (
    <GluestackInput
      bg="$gray700"
      h="$14"
      px="$4"
      borderWidth="$1"
      borderColor="transparent"
      borderRadius="$md"
      $focus={{
        bgColor: '$gray600',
        borderColor: '$green500',
        borderWidth: '$1',
        borderRadius: '$md',
      }}
    >
      <InputField
        { ...rest }
        color="$white"
        fontFamily="$body"
        placeholderTextColor="$gray300"
      />
    </GluestackInput>
  ); 
}