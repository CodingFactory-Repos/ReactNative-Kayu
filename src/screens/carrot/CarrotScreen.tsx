import React, {useEffect} from 'react';

import {SafeAreaView, Text} from 'react-native';

const CarrotScreen = () => {
  useEffect(() => {
    console.log('CarrotScreen');
  }, []);

  return (
    <SafeAreaView>
      <Text>CarrotScreen</Text>
    </SafeAreaView>
  );
};

export default CarrotScreen;
