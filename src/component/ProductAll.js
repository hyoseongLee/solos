import React, { useEffect, useState } from 'react';
import ProductCard from '../Navibar/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams(); // 쿼리 파라미터 가져오기

  const getProducts = async () => {
    let searchQuery = query.get('q') || "";  // 쿼리 파라미터에서 검색어 추출
    console.log("Search Query:", searchQuery);  // 로그로 검색어 확인
    
    // URL에 검색 쿼리 추가하여 API 요청
    let url = `http://localhost:5000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();

    // 검색 결과에 맞게 제품 리스트 업데이트
    setProductList(data);
  }

  // 쿼리 파라미터가 변경될 때마다 다시 호출
  useEffect(() => {
    getProducts();
  }, [query]);  // 쿼리 파라미터가 변경될 때마다 호출됨

  return (
    <Container>
      <Row>
        {productList.length > 0 ? (
          productList.map((item) => (
            <Col md={3} sm={6} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))
        ) : (
          <p>No products found</p>  // 검색 결과가 없을 때 메시지 표시
        )}
      </Row>
    </Container>
  );
};

export default ProductAll;
