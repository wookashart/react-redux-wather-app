import React, { Component } from 'react';

import clearSkyDay from '../../images/iconfinder_weather-01_1530392.png';
import clearSkyNight from '../../images/iconfinder_weather-10_1530382.png';
import fewCloudsDay from '../../images/iconfinder_weather-02_1530391.png';
import fewCloudsNight from '../../images/iconfinder_weather-11_1530383.png';
import scatteredClouds from '../../images/iconfinder_weather-22_1530369.png';

class WeatherIcon extends Component {
    state = {
        icon: ''
    }

    getWeatherIcon = description => {
        const now = new Date();
        const time = Math.round(now.getTime() / 1000);
        let icon = undefined;

        if (description === 'clear sky') {
            icon = time >= this.props.sunrise && time < this.props.sunset ? clearSkyDay : clearSkyNight;
        } else if (description === 'few clouds') {
            icon = time >= this.props.sunrise && time < this.props.sunset ? fewCloudsDay : fewCloudsNight;
        } else if (description === 'scattered clouds') {
            icon = scatteredClouds;
        } else if (description === 'broken clouds') {

        } else if (description === 'shower rain') {

        } else if (description === 'rain') {

        } else if (description === 'thunderstorm') {

        } else if (description === 'snow') {

        } else if (description === 'mist') {

        }

        return icon;
    }

    render() {
        return (
            <div>
                <img src={this.getWeatherIcon(this.props.description)} alt="" />
            </div>
        )
    }
}

export default WeatherIcon;