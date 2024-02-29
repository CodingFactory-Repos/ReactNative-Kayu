import React, {useEffect} from 'react';
import {Image, View, Text} from 'react-native';

import {styles} from './ProfileScreen.styles.ts';
import {useSelector} from 'react-redux';

const ProfileScreen = () => {
  // @ts-ignore
  const {user} = useSelector(state => state.user);
  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);

  return (
    <View>
      <Text>Profile Screen</Text>
      <Image
        source={require('../../../assets/kayu.png')}
        style={styles.image}
      />
      <Text>Bonjour {user?.email}</Text>
      <div>
        <Text>Information : </Text>
        <Text>Email: {user?.email}</Text>
        <Text> Password : {user?.password} </Text>
      </div>
    </View>
  );
};

export default ProfileScreen;
