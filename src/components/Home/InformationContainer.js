import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: min(600px, 80%);
    height: max(500px, 80vh);
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
`

function InformationContainer({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default InformationContainer
