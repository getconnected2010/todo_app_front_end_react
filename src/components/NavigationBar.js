import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import brain from '../images/brain.jpg';

const NavigationBar =()=>{
    return(
        <div className="">
            <Navbar className="navigationBar" variant="dark" >
                <Container>
                    <Nav className="me-auto">
                        <Navbar.Brand href="/">Tasks</Navbar.Brand>
                        <Navbar.Brand href="/add">Add To List</Navbar.Brand>
                        <Navbar.Brand href="/avatar">Upload Avatar</Navbar.Brand>
                        <Image roundedCircle src= {brain} className="img"/>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;