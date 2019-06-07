import React from 'react';
import styled from 'styled-components';

const Input = styled.label`

`;

export default ({ placeholder, action, value }) => (
    <Input>
        <input type="text" placeholder={placeholder} onChange={action} value={value} />
    </Input>
)