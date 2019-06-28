import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getCityByName } from '../../redux/actions';
import Input from '../global/Input';
import Button from '../global/Button';
import api from '../../data/api';

const Form = styled.form`
    padding: 50px;
    text-align: center;
`;

class SearchCityForm extends Component {
    state = {
        cityName: '',
        weather: {}
    }

    getInputValue = e => {
        this.setState({ cityName: e.target.value });
    }

    getCityByName = e => {
        e.preventDefault();
        const { cityName } = this.state;
        let weather;
        let notFound = false;

        fetch(api.byCity + cityName)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                if (json.cod === '404') {
                    notFound = true;
                } else {
                    notFound = false;
                    weather = json;
                }

                this.props.getCityByName({ cityName, notFound, weather });
                this.setState({ cityName: '' });
            });
    }

    render() {
        return (
            <Form>
                <Input placeholder="Wyszukaj swoje miasto" action={this.getInputValue} value={this.state.cityName} />
                <Button title="Szukaj" action={this.getCityByName} />
            </Form>
        )
    }
}

const SearchCity = connect(null, dispatch => ({ getCityByName: city => dispatch(getCityByName(city)) })) (SearchCityForm);

export default SearchCity;