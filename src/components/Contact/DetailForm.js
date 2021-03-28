import { CircularProgress } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';

const Form = styled.div`
    background-color: white;
    width: min(700px, 90%);
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    align-items: center;
    height: 600px;
    box-shadow: 0px 4px 8px 1px rgba(0,0,0,0.48);
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    text-align: left;
    color: black;
    justify-content: ${props => props.sending && "center"}
`
const FormInput = styled.input`
    width: 60%;
    padding: 9px 15px;
    margin: 8px 0;
    border: ${props => props.error ? "1px solid red" : "1px solid #B8B6B6"};
    border-radius: 4px;
    box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.2);
    outline: none;
    transition: 0.2s;

    &:hover {
        box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.02);
    }

    &:focus {
        border: 1px solid #B8B6B6;
        box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01), 0px 0px 8px rgba(0, 0, 0, 0.2);
    }
`

const FormTextArea = styled.textarea`
    width: 70%;
    height: 140px;
    padding: 9px 15px;
    margin: 8px 0;
    border-radius: 5px;
    border: 1px solid;
    border: 1px solid #B8B6B6;
    outline: none;
    box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.2);
    transition: 0.2s;

    &:hover {
        box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.02);
    }

    &:focus {
        border: 1px solid #B8B6B6;
        box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01), 0px 0px 8px rgba(0, 0, 0, 0.2);
    }    
`

const FormLabel = styled.label`
    
`

const FormTitleContainer = styled.div`
    padding-top: 1rem;
    width: 100%;
    height: 80px;
    background-color: #4eb5f1;
    text-align: center;
    color: white;
    margin-bottom: 1rem;
`
const SendBtn = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    color: white;
    background-color: #4eb5f1;
    font-size: 1em; 
    margin-top: 1rem;
    border-radius: 100px;
    transition: all 0.2s;
    cursor: pointer;
    outline: none;

    &:hover {
        background-color: rgba(73,102,249,1);
    }
`

const Sending = styled.h1`
    font-weight: 300;
`
const ErrorMessage = styled.span`
    color: red;
    margin-bottom: 0.5rem;
`

function DetailForm({ 
    sending, handleSendClick, handleFirstNameChange,
    handleLastNameChange, handleEmailChange, handleMessageChange,
    firstName, lastName, email, message, errors
}) {

    return (
        <Form sending={sending}>
            {
                !sending ?
                <>
                <FormTitleContainer>
                    <h1 style={{ margin: 0 }}>Keep in touch!</h1>
                </FormTitleContainer>
                <FormLabel>First Name</FormLabel>
                <FormInput error={errors.firstName} value={firstName} onChange={handleFirstNameChange}/>
                {errors.firstName && <ErrorMessage>First name cannot be less than 2 characters long</ErrorMessage>}
                <FormLabel>Last Name</FormLabel>
                <FormInput error={errors.lastName} value={lastName} onChange={handleLastNameChange}/>
                {errors.lastName && <ErrorMessage>Last name cannot be less than 2 characters long</ErrorMessage>}
                <FormLabel>Email</FormLabel>
                <FormInput error={errors.email} value={email} onChange={handleEmailChange}/>
                {errors.email && <ErrorMessage>Invalid email</ErrorMessage>}
                <FormLabel>Message (optional)</FormLabel>
                <FormTextArea value={message} onChange={handleMessageChange}/>
                <SendBtn onClick={() => handleSendClick(firstName, lastName, email)}>Send</SendBtn>
                </>
                :
                <>
                <Sending>Sending</Sending>
                <CircularProgress/>
                </>
            }
            
        </Form>
    )
}

export default DetailForm
