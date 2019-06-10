import React from 'react';
import styled from 'styled-components';

const Input = styled.label`
    margin: 0 5px;

    input {
        height: 40px;
        width: 350px;
        padding: 5px 10px;
        font-size: 18px;

        &:focus {
            outline: none;
        }
    }
`;

export default ({ placeholder, action, value }) => (
    <Input>
        <input type="text" placeholder={placeholder} onChange={action} value={value} />
    </Input>
)