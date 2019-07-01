import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { MaxWidthBox } from '../global/MaxWithBox';
import WeatherIcon from '../result/WeatherIcon';
import WeatherSunsetSunrise from '../result/WeatherSunsetSunrise';

const Header = styled.h1`
    text-align: center;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 700;
`;

class SearchResultComponent extends Component {
    render() {
        const { cityName, notFound, weather } = this.props;

        return (
            <MaxWidthBox>
                {notFound ? <div>not found</div> : (
                    <div>
                        {cityName !== '' ? (
                            <>
                                <Header>{cityName}</Header>
                                <WeatherSunsetSunrise sunset={weather.sys.sunset} sunrise={weather.sys.sunrise} time={weather.dt} timezone={weather.timezone} />
                                
                                <p>
                                    temperatura: {weather.main.temp} <sup>o</sup>C
                                </p>
                                <WeatherIcon description={weather.weather[0].description} sunset={weather.sys.sunset} sunrise={weather.sys.sunrise} />
                            </>
                        ) : (
                            <span>Najpierw wyszukaj miasto</span>
                        )}
                    </div>
                )}
            </MaxWidthBox>
        )
    }
}

const SearchResult = connect(state => state) (SearchResultComponent);

export default SearchResult;