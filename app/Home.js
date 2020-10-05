import React from 'react';
import {View, Text, Button} from 'react-native';

export const Home = ({navigation}) => {
  return (
    <View>
      <Text>home</Text>
      <Button
        title={'Details'}
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};
