import React, {useState} from 'react';
import {Text, StyleSheet, Modal} from 'react-native';
import {Button, Container, Item, Input, View} from 'native-base';
//local import
import {API_KEY} from './Constants';

export const Home = ({navigation}) => {
  const [InputData, setInputData] = useState('');
  const [Loader, setLoader] = useState(false);

  const getAstroidInfo = async id => {
    setLoader(true);
    try {
      const res = await fetch(
        `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}`,
      );
      setLoader(false);
      const json = await res.json();
      console.log(json);
      navigation.navigate('Details', {data: json});
    } catch (err) {
      setLoader(false);
      console.log(err);
    }
  };

  const getAstroidList = async () => {
    setLoader(true);
    try {
      const res = await fetch(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`,
      );
      setLoader(false);
      const json = await res.json();
      console.log(json);
      var astroidList = json.near_earth_objects;
      var randomAstroid =
        astroidList[Math.floor(Math.random() * astroidList.length)];
      navigation.navigate('Details', {data: randomAstroid});
    } catch (err) {
      setLoader(false);
      console.log(err);
    }
  };

  return (
    <Container style={styles.container}>
      <Item regular>
        <Input
          placeholder={'Enter Asteroid ID'}
          onChangeText={text => setInputData(text)}
        />
      </Item>
      <Button
        primary
        block
        disabled={InputData == '' ? true : false}
        onPress={() => getAstroidInfo(InputData)}
        style={styles.button}>
        <Text>Submit</Text>
      </Button>
      <Button block danger onPress={() => getAstroidList()}>
        <Text>Random Astroid</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '5%',
  },
  button: {marginVertical: '5%'},
});
