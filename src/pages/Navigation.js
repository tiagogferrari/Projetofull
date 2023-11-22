import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './css/Navigation.css';

const Navigation = ({ onPageChange, setMostrarLogin, setMostrarInsert }) => {

    const handleLoginClick = () => {
        onPageChange('login');
        setMostrarLogin(true);
    };

    const handleInsertClick = () => {
        onPageChange('insert');
        setMostrarInsert(true);
    };

    return (
        <div className="divNav">
            <Navbar expand="lg" className="navbar">
                <Container fluid>
                    <Navbar.Brand href="#" onClick={() => onPageChange('home')}>YourAnimeList</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Navbar.Brand href="#" onClick={() => handleLoginClick({ onPageChange, setMostrarLogin })}>Login</Navbar.Brand>
                            <Navbar.Brand href="#" onClick={() => handleInsertClick({ onPageChange, setMostrarInsert })}>Insert</Navbar.Brand>
                        </Nav>
                        <Form className="d-flex" id="placeh">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button className="botaosearch">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation

