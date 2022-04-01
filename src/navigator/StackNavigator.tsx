import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import CryptoList from '../screens/cryptoList';
import CryptoAdder from '../screens/cryptoAdder';
import {images} from '../constants';

const {Navigator, Screen} = createStackNavigator();
// #region Stack Navigation
const MainStack = () => {
  return (
    <Navigator
      screenOptions={{
        ...styles,
        headerTitleAlign: 'left',
        headerRight: () => (
          <Image source={images.Avatar} style={styles.avatar} />
        ),
      }}>
      <Screen
        name="cryptoList"
        component={CryptoList}
        options={{title: 'CryptoTacker Pro'}}
      />
      <Screen
        name="cryptoAdder"
        component={CryptoAdder}
        options={{
          headerTitle: '',
          headerBackTitleVisible: true,
          headerBackTitleStyle: {color: 'white'},
          headerTintColor: 'white',
          headerBackTitle: 'Back to list',
          headerRight: () => null,
        }}
      />
    </Navigator>
  );
};
//#endregion

const styles = StyleSheet.create({
  avatar: {height: 35, width: 35},
  headerTitleStyle: {fontSize: 20, fontWeight: 'bold', color: 'white'},
  headerStyle: {
    backgroundColor: '#385774',
    height: 100,
  },
  headerRightContainerStyle: {paddingRight: 10},
});
export default MainStack;
