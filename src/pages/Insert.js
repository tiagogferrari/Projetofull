import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import './css/Insert.css';


const Insert = ({ onPageChange }) => {

    const [title, setTitle] = useState("");
    const [score, setScore] = useState("");
    const [episodes, setEpisodes] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleClose = () => {
        onPageChange('home');
    };

    const insert = (title, score, episodes) => {
        return fetch('http://localhost:3000/anime/anime', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, score, episodes })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro no servidor');
                }
                return response.json();
            })
            .then((data) => {
                onPageChange('home');
            })
            .catch((error) => {
                setTitle("");
                setScore("");
                setEpisodes("");
                setErrorMessage("Insira dados correto(s)");
            });
    };

    const handleInsert = (event) => {
        event.preventDefault();
        insert(title, score, episodes);
    };

    return (
        <Form onSubmit={handleInsert}>
            <div className="text-end">
                <CloseButton className="closebt" onClick={handleClose} />
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome do anime</Form.Label>
                <Form.Control type="text" placeholder="Insira o nome do anime" value={title} onChange={e => setTitle(e.target.value)} />
                <Form.Text className="text-muted">
                    Informe dados corretos!
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Número de episódios</Form.Label>
                <Form.Control type="text" placeholder="Número de episódios do anime" value={episodes} onChange={e => setEpisodes(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Score</Form.Label>
                <Form.Control type="text" placeholder="Score do anime" value={score} onChange={e => setScore(e.target.value)} />
            </Form.Group>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <Button variant="primary" type="submit" className="botaoInsert">
                Cadastrar
            </Button>
        </Form>
    )
}

export default Insert
