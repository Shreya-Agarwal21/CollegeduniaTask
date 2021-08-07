import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import moment from 'moment';

const Weather = ({currentWeather, forecastWeather, city}) => {
  console.log('forecastWeather', forecastWeather);

  return (
    <View style={styles.container}>
      <View style={styles.currentDataView}>
        <Text style={{fontSize: 70, fontWeight: '1000'}}>
          {Math.floor(currentWeather.main.temp - 273.15)}
        </Text>
        <Text style={styles.cityText}>{city}</Text>
      </View>

      <View>
        {forecastWeather.map(item => {
          return (
            <View style={styles.row}>
              <Text style={styles.forecastText}>
                {moment(item.dt_txt).format('dddd')}
              </Text>
              <Text style={styles.forecastText}>
                {' '}
                {Math.floor(currentWeather.main.temp - 273.15)}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: '100%',
  },
  cityText: {
    fontSize: 35,
  },
  currentDataView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    borderBottomWidth: 1,
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 25,
    padding: 20,
    borderBottomWidth: 1,
  },
  forecastText: {
    fontSize: 35,
  },
});

export default Weather;
