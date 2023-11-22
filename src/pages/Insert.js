import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import './css/Insert.css';


const Insert = ({ onPageChange }) => {
    const handleClose = () => {
        onPageChange('home');
    };
    return (
        <Form>
            <div className="text-end">
                <CloseButton className="closebt" onClick={handleClose} />
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome do anime</Form.Label>
                <Form.Control type="text" placeholder="Insira o nome do anime" />
                <Form.Text className="text-muted">
                    Informe dados corretos!
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Número de episódios</Form.Label>
                <Form.Control type="text" placeholder="Número de episódios do anime" />
            </Form.Group>
            <Button variant="primary" type="submit" className="botaoInsert">
                Cadastrar
            </Button>
        </Form>
    )
}

export default Insert
