import {create} from 'apisauce';

const api = create({
  baseURL: 'https://api.openweathermap.org/',
});

export const settingCoords = coords => {
  console.log('action coords', coords);
  return dispatch => {
    dispatch({type: 'SET_COORDS', payload: coords});
  };
};

export const getWeatherData = coords => {
  console.log('called coords', coords);

  return async dispatch => {
    try {
      dispatch({type: 'SET_LOADER', payload: true});

      const resp = await api.get(
        `data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=447c1f87f0083a05bcf5e95f2df1e184`,
      );
      console.log('resp------', resp);
      if (resp.ok) {
        let currentWeather = resp.data.list[0];
        let forecastWeather = resp.data.list.filter((item, index) => {
          return (
            (index % 8 == 0 && index != 0) || index == resp.data.list.length - 1
          );
        });

        dispatch({
          type: 'SET_WEATHER',
          payload: {
            currentWeather,
            forecastWeather,
            city: resp.data.city.name,
          },
        });
      } else {
        console.log('random');
        dispatch({type: 'SET_ERROR', payload: true});
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
};
