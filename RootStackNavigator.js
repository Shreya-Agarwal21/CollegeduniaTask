import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import mainScreen from './src/mainScreen';

const RootStack = createStackNavigator();

const Root = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="mainScreen"
        component={mainScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default Root;
