import React, { useEffect, useState } from 'react';
import ProductCard from '../Navibar/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';


const ProductAll = () => {
  const [productList, setProductList] = useState([])

  const getProducts = async () => {
    let url = `http://localhost:5000/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data)
  }

useEffect (()=> {
  getProducts();
},[])

  return (
      <Container>
        <Row>
          {productList.map((item) => (
             <Col md={3} sm={6} xs={12} key={item.id}>
             <ProductCard item={item} />
           </Col>
          ))}
        </Row>
      </Container>
  )
}

export default ProductAll