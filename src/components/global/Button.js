import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    margin: 0 5px;
    font-size: 18px;
    padding: 9.5px 20px;
    cursor: pointer;
    border: none;
    outline: none;
`;

export default ({ title, action }) => (
    <Button onClick={action}>
        <span>{title}</span>
    </Button>
);
