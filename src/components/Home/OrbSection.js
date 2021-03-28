import React from 'react'
import styled, { keyframes } from 'styled-components';
import OrbImage from '../../images/orb.png';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const Orb = styled.img`
    height: min(450px, 90vw);
`
const Heading = styled.h1`
    text-align: center;
`

const InformationBody = styled.p`
    padding-bottom: 2rem;
    letter-spacing: 2px;
    line-height: 1.2;
`

const Section = styled.div`
    animation: 0.5s ${fadeIn} ease;
`

function OrbSection() {
    return (
        <Section>
            <Orb
                src={OrbImage}
            />
            <Heading>
                Serve a lasting impression.
            </Heading>
            <InformationBody>
                {"The Orb is a floating payment terminal with tap-and-pay functionality. Customers can simply tap the Orb, or a staff member can bring it to a table. At just $99 and 1.5% per transaction, this is the best valued payment terminal available for venues of all sizes."}
            </InformationBody>
        </Section>
    )
}

export default OrbSection
