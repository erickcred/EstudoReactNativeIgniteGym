import { HStack } from '@gluestack-ui/themed';
import {
  Toast,
  ToastDescription,
  ToastTitle,
  Pressable,
  Icon,
  VStack,
} from '@gluestack-ui/themed';
import { X } from 'lucide-react-native';

type Props = {
  id: string;
  title: string;
  description?: string;
  action?: 'error' | 'success';
  onClose: () => void;
}

export function ToastMessage({ id, title, description, action = 'success', onClose }: Props) {
  return (
    <Toast
      nativeID={ `toast-${id}` }
      action={ action }
      bgColor={ action === 'success' ? '$green200' : '$red200' }
      mt="$10"
    >
      <VStack space="xs" w="$full">
        <Pressable
          alignItems="flex-end"
          onPress={ onClose }
        >
          <Icon 
            as={ X }
            size="lg"
            color="$gray900"
          />
        </Pressable>
        <ToastTitle
          color={ action === 'success' ? '$green900' : '$red900' }
          fontFamily="$heading"
          fontSize="$lg"
          flexShrink={ 1 }
          numberOfLines={ 1 }
        >
          { title }
        </ToastTitle>

        {
          description && 
          <ToastDescription
            color={ action === 'success' ? '$green900' : '$red900' }
            fontFamily="$body"
            fontSize="$lg"
          >
            { description }
          </ToastDescription>
        }
      </VStack>
    </Toast>
  )
}