import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Button, Container, Item, Input} from 'native-base';
import axios from 'axios';
//local import
import {API_KEY} from './Constants';
import {Loader} from './components/Loader';
import {ErrorDailog} from './components/ErrorDailog';

export const Home = ({navigation}) => {
  const [InputData, setInputData] = useState('');
  const [ShowLoader, setShowLoader] = useState(false);
  const [ShowErrorDailog, setShowErrorDailog] = useState(false);

  const getAstroidInfo = id => {
    setShowLoader(true);
    axios
      .get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}`)
      .then(res => {
        setShowLoader(false);
        console.log(res);
        navigation.navigate('Details', {data: res.data});
      })
      .catch(err => {
        setShowLoader(false);
        setShowErrorDailog(true);
        console.log(err);
      });
  };

  const getAstroidList = () => {
    setShowLoader(true);
    axios
      .get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`)
      .then(res => {
        setShowLoader(false);
        var astroidList = res.data.near_earth_objects;
        var randomAstroid =
          astroidList[Math.floor(Math.random() * astroidList.length)];
        navigation.navigate('Details', {data: randomAstroid});
      })
      .catch(err => {
        setShowLoader(false);
        setShowErrorDailog(true);
        console.log(err.reponse);
      });
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
      <Loader isVisible={ShowLoader} />
      <ErrorDailog
        isVisible={ShowErrorDailog}
        msg={'Something went wrong, Try again.'}
        onDismiss={() => setShowErrorDailog(false)}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '5%',
  },
  button: {marginVertical: '5%'},
});
