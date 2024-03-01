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
  removeProductFromList,
  setProduct,
} from '../../service/redux/slices/productSlice';
import {TAB_BAR_NAVIGATOR_ROUTES} from '../../components/navigators/TabBarNavigation/TabNavigator.interfaces.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getProductByBarcode} from '../../service/apiCall';

export const Imager = () => {
  var busy = false;
  const dispatch = useDispatch();
  const [isCameraActive, setIsCameraActive] = useState(true);
  const {hasPermission, requestPermission} = useCameraPermission();

  requestPermission();

  const navigation = useNavigation();

  const {productList} = useSelector(state => state.product);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      if (codes[0].type === 'ean-13') {
        if (!busy) {
          busy = true;
          console.log(`Searching barcode ${codes[0].value}...`);

          getProductByBarcode(codes[0].value).then(result => {
            if (!result) return;
            console.log(`Product found : ${result.name}`);
            dispatch(setProduct(result));
            if (productList.find(product => product.name === result.name)) {
              console.log('Product already in list');

              // Remove product from list if already in list and add it again on top
              dispatch(removeProductFromList(result));
            } else {
              AsyncStorage.setItem('productList', JSON.stringify(productList));
            }

            // Add product to list if not already in list
            dispatch(addProductToList(result));

            // @ts-ignore
            navigation.navigate(TAB_BAR_NAVIGATOR_ROUTES.CARROT);
            busy = false;
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
