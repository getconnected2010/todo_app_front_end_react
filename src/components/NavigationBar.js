import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar =()=>{
    return(
        <div className="">
            <Navbar className="navigationBar" variant="dark" >
                <Container>
                <Navbar.Brand href="/">Tasks</Navbar.Brand>
                <Nav className="me-auto">
                <Navbar.Brand href="/add">Add To List</Navbar.Brand>
                <Navbar.Brand href="/avatar">Upload Avatar</Navbar.Brand>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;