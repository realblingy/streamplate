import React from 'react';
import styled from 'styled-components';
import LogoImage from '../images/logo.png'

const HeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 30px;
    background: rgb(255,245,122);
background: linear-gradient(90deg, rgba(255,245,122,1) 0%, rgba(0,212,255,1) 100%);
    color: white;
    opacity: 0.8;
    box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.21);
`

const Logo = styled.img`
    height: 50%;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo src={LogoImage}/>
        </HeaderContainer>
    )
}

export default Header
