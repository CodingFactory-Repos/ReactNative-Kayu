import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const ProfileScreen = () => {
  // @ts-ignore
  const {user} = useSelector(state => state.user);
  useEffect(() => {
    if (user) {
      console.log('user', user);
    }
  }, [user]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
        }}>
        Bonjour {user?.email}
      </Text>
      <View>
        <Text style={{marginTop: 20}}>Email: {user?.email}</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
