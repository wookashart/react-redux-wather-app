import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import WeatherIcon from '../result/WeatherIcon';
import { MaxWidthBox } from '../global/MaxWithBox';

const Header = styled.div`
    text-align: center;
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 600;

    span {
        margin: 0 5px;
    }
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
                                <Header>
                                    <span>Pogoda dla:</span>
                                    <span>{cityName}</span>
                                </Header>
                                
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