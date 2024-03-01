import React, {useCallback, useEffect, useRef, useState} from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

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

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={() => openModal()}>
        <Text>Open modal</Text>
      </TouchableOpacity>
      {isBottomSheetModalVisible && (
        <BottomSheet
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          snapPoints={['20%', '100%']}
          enablePanDownToClose={true}>
          <BottomSheetView>
            <Text>Swipe down to close</Text>
          </BottomSheetView>
        </BottomSheet>
      )}
    </View>
  );
};

export default PlateScreen;
