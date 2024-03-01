import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addProductToList,
  setProduct,
} from '../../service/redux/slices/productSlice';
import {TAB_BAR_NAVIGATOR_ROUTES} from '../../components/navigators/TabBarNavigation/TabNavigator.interfaces.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getProductByBarcode} from '../../service/apiCall';
import { fakeBaseQuery } from '@reduxjs/toolkit/query';

export const Imager = () => {
  var busy = false;
  const dispatch = useDispatch();
  const [isCameraActive, setIsCameraActive] = useState(true);
  const {hasPermission, requestPermission} = useCameraPermission();

  requestPermission();

  const navigation = useNavigation();

  const {productList} = useSelector(state => state.product);
  let productListToSave = productList;

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      if (codes[0].type === 'ean-13') {
        // setIsCameraActive(false);
        if (!busy)
        {
          busy = true;
          console.log(`Searching barcode ${codes[0].value}...`);
          
          getProductByBarcode(codes[0].value).then(async result => {
            if(!result) return;
            console.log(`Product found : ${result.name}`);
            dispatch(setProduct(result));
            // productListToSave.push(result);
            dispatch(addProductToList(result));
            await AsyncStorage.setItem(
              'productList',
              JSON.stringify(productList),
            );
            // @ts-ignore
            busy = false;
            navigation.navigate(TAB_BAR_NAVIGATOR_ROUTES.CARROT);
          });
        }
      }
    },
  });

  useEffect(() => {
    setIsCameraActive(true);
  }, [isCameraActive]);

  const device = useCameraDevice('back', {
    physicalDevices: [
      'wide-angle-camera',
      'ultra-wide-angle-camera',
      'telephoto-camera',
    ],
  });

  if (!device) return <NoCameraDeviceError />;
  else {
    if (hasPermission) {
      return (
        <Camera
          style={{flex: 1, aspectRatio: 16 / 9, height: '70%'}}
          device={device}
          codeScanner={codeScanner}
          isActive={isCameraActive}
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
