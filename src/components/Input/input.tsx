import { Input as GluestackInput, InputField } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof InputField> &  {
  isReadOnly?: boolean;
}

export function Input({ isReadOnly = false, ...rest }: Props) {
  return (
    <GluestackInput
      h="$14"
      borderWidth="$0"
      borderColor="transparent"
      borderRadius="$md"
      $focus={{
        borderColor: '$green500',
        borderWidth: '$1',
      }}
      bg="$gray700"
      isReadOnly={ isReadOnly }
      opacity={ isReadOnly ? .5 : 1 }
    >
      <InputField
        { ...rest }
        px="$4"
        color="$white"
        fontFamily="$body"
        placeholderTextColor="$gray300"
        // style={
        //   isReadOnly && { opacity: .6 }
        // }
      />
    </GluestackInput>
  ); 
}