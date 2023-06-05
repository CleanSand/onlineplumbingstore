import React, {Component} from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import CategoryBar from '../components/CategoryBar'

class Shop extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={3}>
                        <CategoryBar />
                    </Col>
                    <Col md={9}>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Shop;
