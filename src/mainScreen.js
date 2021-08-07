import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import GeoLocation from 'react-native-geolocation-service';
import {connect} from 'react-redux';
import {getWeatherData, settingCoords} from '../action';
import Weather from './components/weather';
import ErrorScreen from './components/error';

const mainScreen = ({
  getWeatherData,
  settingCoords,
  current,
  forecast,
  city,
  loader,
  error,
}) => {
  const findCoordinates = () => {
    GeoLocation.getCurrentPosition(
      position => {
        console.log('-------', position);
        settingCoords(position.coords);
        getWeatherData(position.coords);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    findCoordinates();
  }, []);

  return (
    <View>
      {loader ? (
        <AnimatedLoader
          visible={true}
          overlayColor="rgba(255,255,255,0.75)"
          source={require('../splashy-loader.json')}
          animationStyle={styles.lottie}
          speed={1}
        />
      ) : error ? (
        <ErrorScreen />
      ) : (
        <Weather
          currentWeather={current}
          forecastWeather={forecast}
          city={city}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 300,
    height: 300,
  },
});

const mapStateToProps = state => {
  console.log('sttt', state);
  return {
    current: state.currentWeather,
    forecast: state.forecastWeather,
    city: state.city,
    loader: state.loader,
    error: state.error,
  };
};

export default connect(mapStateToProps, {getWeatherData, settingCoords})(
  mainScreen,
);
