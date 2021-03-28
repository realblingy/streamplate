import React from 'react'
import styled, { keyframes } from 'styled-components';
import DetailForm from '../Contact/DetailForm';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`
const Section = styled.div`
    animation: 0.5s ${fadeIn} ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: min(600px, 100%);
`

function ContactSection({ sending, handleSendClick, errors,
    firstName, lastName, email, message, handleFirstNameChange,
    handleLastNameChange, handleEmailChange, handleMessageChange }) {

    return (
        <Section>
            <DetailForm
                sending={sending}
                firstName={firstName}
                lastName={lastName}
                message={message}
                email={email}
                handleSendClick={handleSendClick}
                handleFirstNameChange={handleFirstNameChange}
                handleLastNameChange={handleLastNameChange}
                handleEmailChange={handleEmailChange}
                handleMessageChange={handleMessageChange}
                errors={errors}
            />
        </Section>
    )
}

export default ContactSection
