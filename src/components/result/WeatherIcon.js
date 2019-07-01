import React, { Component } from 'react';

import clearSkyDay from '../../images/iconfinder_weather-01_1530392.png';
import clearSkyNight from '../../images/iconfinder_weather-10_1530382.png';
import fewCloudsDay from '../../images/iconfinder_weather-02_1530391.png';
import fewCloudsNight from '../../images/iconfinder_weather-11_1530383.png';
import clouds from '../../images/iconfinder_weather-22_1530369.png';
import showerRain from '../../images/iconfinder_weather-32_1530362.png';
import rainDay from '../../images/iconfinder_weather-03_1530390.png';
import rainNight from '../../images/iconfinder_weather-14_1530379.png';
import thunderstorm from '../../images/iconfinder_weather-23_1530363.png';
import snow from '../../images/iconfinder_weather-24_1530371.png';
import mist from '../../images/iconfinder_weather-27_1530368.png';

class WeatherIcon extends Component {
    getWeatherIcon = description => {
        const now = new Date();
        const time = Math.round(now.getTime() / 1000);
        let icon = undefined;

        if (description === 'clear sky') {
            icon = time >= this.props.sunrise && time < this.props.sunset ? clearSkyDay : clearSkyNight;
        } else if (description === 'few clouds') {
            icon = time >= this.props.sunrise && time < this.props.sunset ? fewCloudsDay : fewCloudsNight;
        } else if (description === 'scattered clouds' || description === 'broken clouds') {
            icon = clouds;
        } else if (description === 'shower rain') {
            icon = showerRain;
        } else if (description === 'rain') {
            icon = time >= this.props.sunrise && time < this.props.sunset ? rainDay : rainNight;
        } else if (description === 'thunderstorm') {
            icon = thunderstorm;
        } else if (description === 'snow') {
            icon = snow;
        } else if (description === 'mist') {
            icon = mist;
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