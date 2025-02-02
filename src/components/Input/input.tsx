import { Input as GluestackInput, InputField, FormControl, FormControlError, FormControlErrorText } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof InputField> &  {
  errorMessage?: string | null;
  isInvalid?: boolean;
  isReadOnly?: boolean;
}

export function Input({ isReadOnly = false, errorMessage = null, isInvalid = false, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl
      w="$full"
      mb="$4"
      isInvalid={ invalid }
    >
      <GluestackInput
        isInvalid={ isInvalid }
        h="$14"
        borderWidth="$0"
        borderColor="transparent"
        borderRadius="$md"
        $focus={{
          borderColor: invalid ? "$red500" : "$green500",
          borderWidth: '$1',
        }}
        $invalid={{
          borderColor: "$red400",
          borderWidth: "$1"
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
        />
      </GluestackInput>

      <FormControlError>
        <FormControlErrorText
          color="$red400"
          fontFamily="$body"
          fontSize="$md"
        >
          { errorMessage }
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  ); 
}