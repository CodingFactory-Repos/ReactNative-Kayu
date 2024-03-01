import React, {useCallback, useEffect, useRef, useState} from 'react';

import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {Colors} from '../../utils/colors.ts';

const PlateScreen = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isBottomSheetModalVisible, setBottomSheetModalVisible] =
    useState(false);
  useEffect(() => {}, []);

  function openModal() {
    console.log('open modal');
    setBottomSheetModalVisible(true);
  }

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) setBottomSheetModalVisible(false);
  }, []);

  function getBottomSheetContent() {
    return (
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={['95%', '20%']}
        enablePanDownToClose={true}>
        <BottomSheetView style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Ajouter un Repas
            </Text>
          </View>
          <View
            style={{
              flex: 1,
            }}>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                padding: 10,
                margin: 10,
                borderRadius: 10,
              }}
              placeholder="Nom du repas"
            />
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                padding: 10,
                margin: 10,
                borderRadius: 10,
              }}
              placeholder="Description"
            />
          </View>
        </BottomSheetView>
      </BottomSheet>
    );
  }

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View>
          <Text>Plate Screen</Text>
        </View>

        <TouchableOpacity
          onPress={() => openModal()}
          style={{
            margin: 20,
            padding: 10,
            alignItems: 'center',
            backgroundColor: Colors.primary,
            width: '50%',
            alignSelf: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: 'white'}}>+ Ajouter un repas</Text>
        </TouchableOpacity>
      </View>

      {isBottomSheetModalVisible && getBottomSheetContent()}
    </View>
  );
};

export default PlateScreen;
