import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    
`;

export default ({ title, action }) => (
    <Button onClick={action}>
        <span>{title}</span>
    </Button>
);
