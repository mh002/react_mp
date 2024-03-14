import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header(){
    return(
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <i className="fa-solid fa-circle-play fa-beat fa-xl me-2" style={{color: "#08052e;"}}></i>
                        {' '}
                        MEDIA PLAYER
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header