import React from 'react';
import styled, { keyframes } from 'styled-components';
import iPhoneImage from '../../images/iphone.png'

const Phone = styled.img`
    height: min(450px, 90vw);
`
const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const InformationBody = styled.p`
    padding-bottom: 2rem;
    letter-spacing: 2px;
    line-height: 1.2;
`

const Section = styled.div`
    animation: 0.5s ${fadeIn} ease;
`

function AppSection() {
    return (
        <Section>
            <Phone
                src={iPhoneImage}
            />
            <h1>
                Your personalised food ordering app
            </h1>
            <InformationBody>
            Streamplate is your personalised food ordering app with health tracking.
            The health tracking dashboard enables you to track your meals, mood, energy, nutrition, create study timers, tasks and a training plan. Then, add allergen or dietary filters to automatically adjust food ordering recommendations so they fit your preferences.
            </InformationBody>
        </Section>
    )
}

export default AppSection
