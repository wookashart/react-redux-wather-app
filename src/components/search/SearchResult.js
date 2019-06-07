import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                                <p>
                                    <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="" />
                                </p>
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