import React from 'react';
import styled from 'styled-components';
import WeatherIcon from './WeatherIcon';
import { MaxWidthBox } from '../global/MaxWithBox';

const WeatherInfo = styled.div`
    margin-top: 30px;
`;

const InfoRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .temperature {
        font-size: 50px;
        font-weight: 600;
        margin-left: 15px;
    }
`;

const Info = styled.div`
    margin: 0 50px;
    text-align: center;

    .title {
        font-size: 18px;
        margin-bottom: 5px;
    }

    .content {
        font-size: 22px;
        font-weight: 600;
    }
`;

export default ({ weather }) => (
    <WeatherInfo>
        <MaxWidthBox>
            <InfoRow>
                <WeatherIcon description={weather.weather[0].description} sunset={weather.sys.sunset} sunrise={weather.sys.sunrise} />
                <div className="temperature">{weather.main.temp} <sup>o</sup>C</div>
                <Info>
                    <div className="title">Wilgotność:</div>
                    <div className="content">{weather.main.humidity}%</div>
                </Info>
                <Info>
                    <div className="title">Ciśnienie:</div>
                    <div className="content">{weather.main.pressure} hPa</div>
                </Info>
                <Info>
                    <div className="title">Zachmurzenie:</div>
                    <div className="content">{weather.clouds.all}%</div>
                </Info>
            </InfoRow>
        </MaxWidthBox>
    </WeatherInfo>
);
