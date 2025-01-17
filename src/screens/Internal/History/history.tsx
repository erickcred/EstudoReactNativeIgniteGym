import { useState } from 'react';
import { SectionList } from 'react-native';
import { Text, VStack } from '@gluestack-ui/themed';

import { HistoryCard } from '@components/internal/HistoryCard/historyCard';
import { ScreenHeader } from '@components/internal/ScreenHeader/screenHeader';

type ListProps = {
  title: string;
  data: string[];
}

export function History() {
  const [ exercises, setExercises ] = useState<ListProps[]>([
    { title: '12/01/2025', data: [ 'Puxada frontal', 'Remada unilateral' ] },
    { title: '14/01/2025', data: [ 'Puxada frontal' ] },
    // { title: '14/01/2025', data: [ 'Puxada frontal' ] },
    // { title: '15/01/2025', data: [ 'Puxada frontal' ] },
    // { title: '16/01/2025', data: [ 'Puxada frontal' ] }

  ]);

  return (
    <VStack flex={ 1 }>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={ exercises }
        keyExtractor={ (item, index) => item + index }
        showsVerticalScrollIndicator={ false }
        renderItem={({ item }) => (
          <HistoryCard />
        )}
        renderSectionHeader={({ section }) => (
          <Text
            color="$gray200"
            fontFamily="$hading"
            fontSize="$md"
            mt="$10"
            mb="$3"
          >{ section.title }</Text>
        )}
        style={{ paddingHorizontal: 32 }}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: 'center' }
        }
        ListEmptyComponent={ () => (
          <Text
            color="$gray100"
            textAlign="center"
          >Não há exercícios registrados ainda! {"\n"} Vamos fazer exercício hoje?</Text>
        )}
      />

    </VStack>
  )
}