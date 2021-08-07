import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './RootStackNavigator';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const App = () => {
  return (
    <Provider store={createStore(reducer, applyMiddleware(thunk))}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
