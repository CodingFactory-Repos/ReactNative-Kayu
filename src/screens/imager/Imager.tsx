import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Camera, useCameraDevice, useCameraFormat, useCameraPermission, useCodeScanner } from 'react-native-vision-camera';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getProduct} from '../../service/apiCall';
import {
  addProductToList,
  setProduct,
} from '../../service/redux/slices/productSlice';
import {TAB_BAR_NAVIGATOR_ROUTES} from '../../components/navigators/TabBarNavigation/TabNavigator.interfaces.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import productItem from '../carrot/components/productItem/ProductItem.tsx';

export const Imager = () => {
  const dispatch = useDispatch();
  const {hasPermission, requestPermission} = useCameraPermission();

  requestPermission();

  const navigation = useNavigation();

  const {productList} = useSelector(state => state.product);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      codes.forEach(code => {
        if (code.type === 'ean-13') {
          getProduct(code.value).then(async result => {
            console.log(`Product found : ${result.name}`);
            dispatch(setProduct(result));
            dispatch(addProductToList(result));
            await AsyncStorage.setItem(
              'productList',
              JSON.stringify(productList),
            );
            // @ts-ignore
            navigation.navigate(TAB_BAR_NAVIGATOR_ROUTES.CARROT);
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
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
