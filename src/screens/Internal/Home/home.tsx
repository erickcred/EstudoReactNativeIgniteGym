import { ExerciseCard } from '@components/internal/ExerciseCard/exerciseCard';
import { Group } from '@components/internal/Group/group';
import { HomeHeader } from '@components/internal/HomeHeader/homeHeader';
import { Heading, HStack, Text, VStack } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { useState } from 'react';
import { FlatList } from 'react-native';

export function Home() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const [ groups, setGroups ] = useState<string[]>([
    'Costas',
    'Bíceps',
    'Tríceps',
    'Ombro',
    'Perna',
    'Peito'
  ]);
  const [ groupSelected, setGroupSelected ] = useState<string>();
  const [ exercises, setExercises ] = useState<string[]>([
    'Puxada frontal', 
    'Remada curvada',
    'Remada unilateral',
    'Levantamento terra',
    'Puxada alta',
    'Remada cavalinho',
    'Cardio'
  ]);

  function handleOpenExerciseDetails() {
    navigation.navigate('exercise')
  }
  
  return (
    <VStack flex={ 1 }>
      <HomeHeader />
      
      <FlatList
        data={ groups }
        keyExtractor={ item => item }
        showsHorizontalScrollIndicator={ false }
        contentContainerStyle={{ paddingHorizontal: 32 }}
        style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
        horizontal={ true}
        renderItem={({ item }) => (
          <Group
            name={ item }
            isActive={ groupSelected?.toLowerCase() === item.toLowerCase() }
            onPress={ () => setGroupSelected(item) }
          />
        )}
      />

      <VStack flex={ 1 } px="$8">
        <HStack justifyContent='space-between' alignItems="center" mb="$5">
          <Heading color="$gray200" fontSize="$md" fontFamily="$heading">Exercícios</Heading>
          <Text color="$gray200" fontSize="$sm" fontFamily="$body">{ exercises.length }</Text>
        </HStack>
        
        <FlatList
          data={ exercises }
          keyExtractor={ item => item }
          showsVerticalScrollIndicator={ false }
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <ExerciseCard
              onPress={ handleOpenExerciseDetails }
            />
          )}
        />
      </VStack>

    </VStack>
  )
}