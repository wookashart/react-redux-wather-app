import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherIcon from '../result/WeatherIcon';

class SearchResultComponent extends Component {
    render() {
        const { cityName, notFound, weather } = this.props;

        return (
            <>
                {notFound ? <div>not found</div> : (
                    <div>
                        {cityName !== '' ? (
                            <>
                                <span>Pogoda dla:</span>
                                <span>{cityName}</span>
                                <p>
                                    temperatura: {weather.main.temp} st C
                                </p>
                                <WeatherIcon description={weather.weather[0].description} sunset={weather.sys.sunset} sunrise={weather.sys.sunrise} />
                            </>
                        ) : (
                            <span>Najpierw wyszukaj miasto</span>
                        )}
                    </div>
                )}
            </>
        )
    }
}

const SearchResult = connect(state => state) (SearchResultComponent);

export default SearchResult;