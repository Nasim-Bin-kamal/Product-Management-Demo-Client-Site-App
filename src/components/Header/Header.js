import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        color: 'white',
        fontWeight: 'bold'
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Product Management</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className="mx-3" activeStyle={activeStyle} to="/home">HOME</NavLink>
                        <NavLink className="mx-3" activeStyle={activeStyle} to="/products">PRODUCTS</NavLink>
                        <NavLink className="mx-3" activeStyle={activeStyle} to="/product/add">ADD PRODUCT</NavLink>

                    </Nav>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;