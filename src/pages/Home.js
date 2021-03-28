import React, { useState } from 'react';
import styled from 'styled-components';
import AppSection from '../components/Home/AppSection';
import ContactSection from '../components/Home/ContactSection';
import InformationContainer from '../components/Home/InformationContainer';
import Modal from '../components/Home/Modal';
import Navbar from '../components/Home/Navbar';
import OrbSection from '../components/Home/OrbSection';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function Home() {

    document.title = 'Streamplate'
    const [section, setSection] = useState(0);
    const sections = ["App", "Orb", "Contact"];
    const [sending, setSending] = useState(false);
    const [sendSuccess, setSendSuccess] = useState(false);
    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
    })
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleFirstNameChange = (e) => {
        const name = e.target.value;
        if (name.length > 30) {
            return;
        }
        setErrors({...errors, firstName: false});
        setFirstName(name);
    }

    const handleLastNameChange = (e) => {
        const name = e.target.value;
        if (name.length > 30) {
            return;
        }
        setErrors({...errors, lastName: false});
        setLastName(name);
    }

    const handleEmailChange = (e) => {
        const email = e.target.value;
        if (email.length > 60) {
            return;
        }
        setErrors({...errors, email: false});
        setEmail(email);
    }

    const handleMessageChange = (e) => {
        const message = e.target.value;
        if (message.length > 300) {
            return;
        }
        setMessage(message);
    }

    window.onclick = () => {
        if (sendSuccess) {
            setSendSuccess(false);
        }
    }

    const handleSendClick = () => {

        const sendPromise = new Promise((resolve, reject) => {
            setSending(true);
            setTimeout(() => { setSending(false); resolve(); }, 4000);
        })

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let newErrors = {...errors};
        sendPromise
            .then(() => {
                if (firstName.length < 2) {
                    newErrors.firstName = true;
                }
            })
            .then(() => {
                if (lastName.length < 2) {
                    newErrors.lastName = true;
                }
            })
            .then(() => {
                if (!re.test(email)) {
                    newErrors.email = true;
                }
            })
            .then(() => {
                if (firstName.length > 2 && lastName.length > 2 && re.test(email)) {
                    setSendSuccess(true);
                    newErrors = {
                        firstName: false,
                        lastName: false,
                        email: false,
                    }
                    setFirstName('');
                    setLastName('');
                    setEmail('');
                } 
            })
            .then(() => {
                setErrors(newErrors)
            })
        
    }

    const handleNavBarBtnClick = (idx) => {
        setSection(idx);
    }

    const handleModalClose = () => {
        setSendSuccess(false);
    }

    const renderInformation = () => {
        switch (section) {
            case 0:
                return <AppSection/>
            case 1:
                return <OrbSection/>
            case 2:
                return <ContactSection 
                    errors={errors}
                    sendSuccess={sendSuccess}
                    sending={sending}
                    handleSendClick={handleSendClick}
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    message={message}
                    handleFirstNameChange={handleFirstNameChange}
                    handleLastNameChange={handleLastNameChange}
                    handleEmailChange={handleEmailChange}
                    handleMessageChange={handleMessageChange}
                />
            default:
                return;
        }
    }

    return (
        <HomeContainer>
            <Modal handleModalClose={handleModalClose} open={sendSuccess}/>
            <Navbar
                sections={sections}
                section={section}
                handleNavBarBtnClick={handleNavBarBtnClick}
            />
            <InformationContainer>
                {
                    renderInformation()
                }
            </InformationContainer>
        </HomeContainer>
    )
}

export default Home
