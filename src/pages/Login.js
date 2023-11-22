import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import './css/Login.css';


const Login = ({ onPageChange }) => {
    const handleClose = () => {
        onPageChange('home');
    };
    return (
        <Form>
            <div className="text-end">
                <CloseButton className="closebt" onClick={handleClose} />
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome de usuário</Form.Label>
                <Form.Control type="text" placeholder="nome de usuário" />
                <Form.Text className="text-muted">
                    Seus dados estão seguro conosco!
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Senha" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" className="botaoLogin">
                Login
            </Button>
        </Form>
    )
}

export default Login
