import React from 'react';
import styled, { keyframes } from 'styled-components';

const ModalContainer = styled.div`
    display: ${props => props.open ? "block" : "none"}; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

const PopIn = keyframes`
    from{transform:scale(0)}
    80%{transform:scale(1.2)}
    to{transform:scale(1)}
`

const ModalContent = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    margin-top: 5rem;
    border: 1px solid #888;
    width: min(400px, 80%);
    height: min(400px, 80%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 10px;
    animation: ${PopIn} 0.5s ease;
`

const CloseBtn = styled.span`
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    position: absolute;
    top: 3%;
    right: 5%;
    &:hover {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
`

function Modal({ open, handleModalClose }) {
    return (
        <ModalContainer
            open={open}
        >
            <ModalContent>
            <CloseBtn onClick={handleModalClose}>&times;</CloseBtn>
                <h1>Your message was received!</h1>
                <p>Thank you for reaching out to us!</p>
                <p>You will hear from us shortly.</p>
                <p>-The Streamplate Team</p>
            </ModalContent>
        </ModalContainer>
    )
}

export default Modal
