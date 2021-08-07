const INITIAL_STATE = {
  currentWeather: {},
  forecastWeather: {},
  city: '',
  loader: true,
  error: false,
  coords: {},
};

export default function weatherReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_WEATHER':
      return {
        ...state,
        currentWeather: action.payload.currentWeather,
        forecastWeather: action.payload.forecastWeather,
        city: action.payload.city,
        loader: false,
        error: false,
      };
    case 'SET_COORDS':
      return {...state, coords: action.payload};

    case 'SET_LOADER':
      return {...state, loader: action.payload, error: false};

    case 'SET_ERROR':
      return {...state, error: action.payload, loader: false};

    default:
      return state;
  }
}
