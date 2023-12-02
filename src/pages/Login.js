import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import './css/Login.css';

const Login = ({ onPageChange }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleClose = () => {
        onPageChange('home');
    };

    const login = (username, password) => {
        return fetch('http://localhost:3000/user/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro no servidor');
                }
                return response.json();
            })
            .then((data) => {
                localStorage.setItem('token', data.token);
                onPageChange('home');
                console.log('login concluido')

                // Conectar ao WebSocket e enviar mensagem
                const ws = new WebSocket('ws://localhost:3000'); // ajuste a URL conforme necessário
                ws.onopen = () => {
                    console.log('Conectado ao servidor WebSocket');
                };

            })
            .catch((error) => {
                setUsername("");
                setPassword("");
                setErrorMessage("Usuário ou senha incorreto(s)");
            });
    };

    const handleLogin = (event) => {
        event.preventDefault();
        login(username, password);
    };

    return (
        <Form onSubmit={handleLogin}>
            <div className="text-end">
                <CloseButton className="closebt" onClick={handleClose} />
            </div>
            <Form.Label className="title">Entre para buscar ou inserir animes!</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome de usuário</Form.Label>
                <Form.Control type="text" placeholder="nome de usuário" value={username} onChange={e => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <Button variant="primary" type="submit" className="botaoLogin">
                Login
            </Button>
        </Form>
    )
}

export default Login
