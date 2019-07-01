import React, { Component } from 'react';
import styled from 'styled-components';
import sunriseImg from '../../images/iconfinder_weather-07_1530387.png';
import sunsetImg from '../../images/iconfinder_weather-09_1530384.png';

const SunsetSunrise = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        display: inline-block;
        margin: 0 10px;
        font-size: 18px;
    }

    img {
        height: 40px;
        width: 40px;
        vertical-align: middle;
    }
`;

class WeatherSunsetSunrise extends Component {
    state = {
        date: undefined,
        currentTimestamp: undefined
    }

    componentDidMount() {
        const today = new Date();
        const date = `${today.getDate()}.${today.getMonth() === 12 ? 1 : today.getMonth() + 1}.${today.getFullYear()}`;

        this.setState({ date });
    }

    getTime = unix_timestamp => {
        const date = new Date(unix_timestamp ? unix_timestamp * 1000 : false);
        const hours = date.getHours();
        const minutes = "0" + date.getMinutes();
        const formattedTime = hours + ':' + minutes.substr(-2);

        return formattedTime;
    }

    getLocaleTime = timezone => {
        const today = new Date();
        const timeInSeconds = (today.getUTCHours() * 3600) + (today.getMinutes() * 60);
        const timeOverTimezone = timeInSeconds + timezone;
        const localTime = `${Math.floor(timeOverTimezone / 3600)}:${(timeOverTimezone % 3600) / 60}`;

        return localTime;
    }

    render () {
        return (
            <SunsetSunrise>
                <span>
                    <strong>Pogoda teraz - </strong>
                </span>
                <span>dzisiaj - {this.state.date}r.</span>
                <span>czas lokalny - godz {this.getLocaleTime(this.props.timezone)}</span>
                <span><img src={sunriseImg} alt="Sunrise icon" /> {this.getTime(this.props.sunrise)}</span>
                <span><img src={sunsetImg} alt="Sunset icon" /> {this.getTime(this.props.sunset)}</span>
            </SunsetSunrise>
        );
    }
}

export default WeatherSunsetSunrise;
