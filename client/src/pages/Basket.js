import React, { useContext } from 'react'
import { Container, Image } from 'react-bootstrap'
import ProductItem from '../components/ProductItem'
import { Context } from '../index'

const Basket = () => {
  const {product} = useContext(Context)
  return (
    <section>
      <Container>
        <div  >
          {product.products.map(product =>
            <div>
              <div className={'image-product_box'}>
                <Image src={process.env.REACT_APP_API_URL + product.Image} className={'image-product'}/>
              </div>
              <div>

              </div>
            </div>
          )}
        </div>
      </Container>
      <Container>

      </Container>
    </section>
  );
};

export default Basket