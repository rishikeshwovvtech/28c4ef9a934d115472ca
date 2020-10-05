import React from 'react';
import {View, Text, Modal, StyleSheet} from 'react-native';
import {Spinner} from 'native-base';

export const Loader = props => {
  return (
    <Modal visible={props.isVisible} transparent={true} animationType={'fade'}>
      <View style={styles.modalBackground}>
        <View style={styles.mainView}>
          <View style={styles.mainSubView1}>
            <Spinner color="blue" />
          </View>
          <View style={styles.mainSubView2}>
            <Text>Fetching data ...</Text>
          </View>
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
    flexDirection: 'row',
    marginHorizontal: '10%',
  },
  mainSubView1: {flex: 2, justifyContent: 'flex-end'},
  mainSubView2: {flex: 4, justifyContent: 'center'},
});
