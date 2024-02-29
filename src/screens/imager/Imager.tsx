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
import {useNavigation} from '@react-navigation/native';

export const Imager = () => {
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
            navigation.navigate('CarrotScreen', {product: result});
          });
        }
      });
    },
  });

  const device = useCameraDevice('back', {
    physicalDevices: [
      'ultra-wide-angle-camera',
      'wide-angle-camera',
      'telephoto-camera',
    ],
  });

  if (!device) return <NoCameraDeviceError />;
  else {
    const format = useCameraFormat(device, [
      {videoAspectRatio: 3 / 4},
      {fps: 120},
      {videoStabilizationMode: 'cinematic-extended'},
    ]);

    if (hasPermission) {
      return (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          format={format}
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
