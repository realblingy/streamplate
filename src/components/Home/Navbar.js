import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const NavbarContainer = styled.div`
    width: min(400px, 90vw);
    height: 40px;
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    -webkit-animation: 1s ${fadeIn} ease-out; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: 1s ${fadeIn} ease-out; /* Firefox < 16 */
    -ms-animation: 1s ${fadeIn} ease-out; /* Internet Explorer */
    -o-animation: 1s ${fadeIn} ease-out; /* Opera < 12.1 */
    animation: 0.5s ${fadeIn} ease-out;
`

const NavbarBtn = styled.button`
    border-radius: 0px;
    display:inline-block;
    padding:0.3em 1.2em;
    margin:0 0.5em 0.5em 0;
    border-radius: 2em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color:#FFFFFF;
    background-color:${props => props.selected ? "rgba(73,102,249,1)" : "#4eb5f1"};
    text-align:center;
    transition: all 0.2s;
    font-size: 1em;
    border: none;
    outline: none;
    height: 50px;
    width: 100px;
    cursor: pointer;

    &:hover {
        background-color: rgba(73,102,249,1);
    }
`

function Navbar({ sections, section, handleNavBarBtnClick }) {
    return (
        <NavbarContainer>
            {
                sections.map((sec, idx) => (
                    <NavbarBtn
                        selected={idx === section}
                        onClick={() => handleNavBarBtnClick(idx)}
                    >
                        {sec}
                    </NavbarBtn>
                ))
            }
        </NavbarContainer>
    )
}

export default Navbar
