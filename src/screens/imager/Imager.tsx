import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {getProduct} from '../../service/apiCall';
import React from 'react';

export const Imager = () => {
  const {hasPermission, requestPermission} = useCameraPermission();

  requestPermission();

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      codes.forEach(code => {
        if (code.type === 'ean-13')
          getProduct(code.value).then(
            result =>
              console.log(
                `Product found : ${result.name}`,
              ) /* call another page */,
          );
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
