import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import { SearchContext } from "../search/search";
import { Card, Button } from 'react-bootstrap';
import { useContext } from "react";

const Busca = () => {
    
}


/*
const Busca = ({ data }) => {
    const search = useContext(SearchContext);

    const Cartao = ({ anime }) => {

        const titulo = anime.title.length > 49
            ? `${anime.title.substring(0, 48)}...`
            : anime.title;
        const urlImg = anime.main_picture.medium;

        return (
            <div className="divCards">
                <Card className="my-card">
                    <Card.Img variant="top" className="imgCard" src={urlImg} alt={titulo} style={{ maxHeight: 300 }} />
                    <Card.Body>
                        <Card.Title>{titulo}</Card.Title>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    };

    return (
        <div className="animeList">
            <div className='cardlist'>
                <Row xs={5} className="g-4">
                    {data.data.map((anime, idx) => (
                        <Col key={idx}>
                            <Cartao anime={anime.node} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}
*/
export default Busca;
