import React, {Component} from 'react';
import { Col, Container } from 'react-bootstrap'
import ProductList from '../components/ProductList'

class Shop extends Component {
    render() {
        return (
            <section>
                <Container className={'page-shop'}>
                    <Col md={9} className={"prod-list"}>
                      <ProductList/>
                    </Col>

                </Container>
            </section>

        );
    }
}

export default Shop;
