import { CITY_NAME } from './action-types';

const initialState = {
    cityName: '',
    notFound: false,
    weather: {}
}

function rootReducer(state = initialState, action) {
    if (action.type === CITY_NAME) {
        return Object.assign({}, state, {
            cityName: action.payload.cityName,
            notFound: action.payload.notFound,
            weather: action.payload.weather
        });
    };

    return state;
}

export default rootReducer;