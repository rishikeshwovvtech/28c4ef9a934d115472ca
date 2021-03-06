import React from 'react';
import {View, Text} from 'react-native';

export const Details = ({route}) => {
  const {data} = route.params;
  console.log(data.is_potentially_hazardous_asteroid);
  return (
    <View>
      {data.name && <Text>{`name : ${data.name}`}</Text>}
      {data.nasa_jpl_url && (
        <Text>{`nasa_jpl_url : ${data.nasa_jpl_url}`}</Text>
      )}
      {data.is_potentially_hazardous_asteroid && (
        <Text>
          {`is_potentially_hazardous_asteroid : ${
            data.is_potentially_hazardous_asteroid
          }`}
        </Text>
      )}
    </View>
  );
};
