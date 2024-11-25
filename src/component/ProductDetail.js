import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const ProductDetail = () => {
  let { id } = useParams()
  const [product, setProduct] = useState(null)
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail()
  }, [])

  return (
    <Container class>
      <Row className='Detail-box'>
        <Col xs={12} md={6} className='product-img'>
          <img className='product-info' width={300} src={product?.img} />
        </Col>
        <Col xs={12} md={6}>
          <div className='product-info'>{product?.title}</div>
          <div className='product-info'>{product?.price}</div>
        </Col>
      </Row>
    </Container>
  )
};

export default ProductDetail;