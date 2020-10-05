import React from 'react';
import {View, Text, Modal, StyleSheet} from 'react-native';
import {Button} from 'native-base';

export const ErrorDailog = props => {
  return (
    <Modal visible={props.isVisible} transparent={true} animationType={'fade'}>
      <View style={styles.modalBackground}>
        <View style={styles.mainView}>
          <Text style={{marginVertical: '5%', textAlign: 'center'}}>
            {props.msg}
          </Text>
          <Button block danger onPress={props.onDismiss}>
            <Text>Dismiss</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.7);',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  mainView: {
    backgroundColor: '#fff',
    marginHorizontal: '10%',
  },
});
