import { ComponentProps } from 'react';
import { Button as GluestackButton, Text, ButtonSpinner } from '@gluestack-ui/themed';

type Props = ComponentProps<typeof GluestackButton> & {
  title: string;
  variant?: 'solid' | 'outline';
  isLoading?: boolean;
}

export function Button({ title, variant = 'solid', isLoading = false, ...rest }: Props) {
  return (
    <GluestackButton 
      { ...rest }
      width="$full"
      h="$14"
      bg={ variant === 'solid' ? "$green700" : 'transparent' }
      borderWidth={ variant === 'solid' ? "$0" : "$1" }
      borderColor="$green500"
      borderRadius="$sm"
      $active={{
        borderWidth: "$1",
        borderColor:"$white",
        bg: variant === 'solid' ? "$green500" : "$gray500" ,
      }}
      $disabled={{
        bg: "$green100",
        borderWidth: "$8",
        borderColor: "$gray200",
      }}
      disabled={ isLoading }
    >
      {
        isLoading ? (
          <ButtonSpinner
            color="$white"
          ></ButtonSpinner>
        ) : (
          <Text
            color={ variant === 'solid' ? "$white" : "$green500" }
            fontFamily="$heading"
            fontSize="$sm"
          >{ title }</Text>
        )
      }
    </GluestackButton>
  );
}