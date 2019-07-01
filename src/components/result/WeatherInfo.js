import React from 'react';
import styled from 'styled-components';
import WeatherIcon from './WeatherIcon';
import { MaxWidthBox } from '../global/MaxWithBox';

const WeatherInfo = styled.div`
    margin-top: 30px;
`;

const Temp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .temperature {
        font-size: 50px;
        font-weight: 600;
        margin-left: 15px;
    }
`;

export default ({ weather }) => (
    <WeatherInfo>
        <MaxWidthBox>
            <Temp>
                <WeatherIcon description={weather.weather[0].description} sunset={weather.sys.sunset} sunrise={weather.sys.sunrise} />
                <div className="temperature">{weather.main.temp} <sup>o</sup>C</div>
            </Temp>
        </MaxWidthBox>
    </WeatherInfo>
);
