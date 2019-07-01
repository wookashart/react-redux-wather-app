import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { MaxWidthBox } from '../global/MaxWithBox';
import WeatherSunsetSunrise from '../result/WeatherSunsetSunrise';
import WeatherInfo from '../result/WeatherInfo';

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
                                <WeatherInfo weather={weather} />
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