import { CITY_NAME } from './action-types';

export function getCityByName(payload) {
    return { type: CITY_NAME, payload};
}