import React, {useEffect, useState} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {getWeatherData} from '../../action';

const ErrorScreen = ({getWeatherData, coords}) => {
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <Text style={{fontSize: 60}}>Something went wrong at our end</Text>

      <TouchableOpacity onPress={() => getWeatherData(coords)}>
        <View
          style={{
            borderWidth: 1,
            padding: 8,
            alignSelf: 'center',
            marginTop: 30,
          }}>
          <Text style={{fontSize: 20, paddingLeft: 20, paddingRight: 20}}>
            Retry
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    coords: state.coords,
  };
};

export default connect(mapStateToProps, {getWeatherData})(ErrorScreen);
