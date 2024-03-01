import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {getProduct} from '../../service/apiCall';
import {setProduct} from '../../service/redux/slices/productSlice';
import {TAB_BAR_NAVIGATOR_ROUTES} from '../../components/navigators/TabBarNavigation/TabNavigator.interfaces.ts';

export const Imager = () => {
  const dispatch = useDispatch();
  const {hasPermission, requestPermission} = useCameraPermission();

  requestPermission();

  const navigation = useNavigation();

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      codes.forEach(code => {
        if (code.type === 'ean-13') {
          getProduct(code.value).then(result => {
            console.log(`Product found : ${result.name}`);
            dispatch(setProduct(result));
            navigation.navigate(TAB_BAR_NAVIGATOR_ROUTES.CARROT);
          });
        }
      });
    },
  });

  const device = useCameraDevice('back', {
    physicalDevices: [
      'wide-angle-camera',
      'ultra-wide-angle-camera',
      'telephoto-camera'
    ]
  });

  if (!device) return <NoCameraDeviceError />;
  else {

    if (hasPermission) {
      return (
        <Camera
          style={{flex: 1, aspectRatio: 16/9, height: '70%'}}
          device={device}
          codeScanner={codeScanner}
          isActive={true}
        />
      );
    } else {
      return (
        <SafeAreaView>
          <Text style={{color: 'black'}}>
            No permission granted for the Camera
          </Text>
        </SafeAreaView>
      );
    }
  }
};
