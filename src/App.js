import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './component/ProductAll';
import Login from './component/Login';
import ProductDetail from './component/ProductDetail';
import Nav from './Navibar/Nav';
import PrivateRoute from './Route/PrivateRoute';

// 1. 전체 상품페이지, 로그인 페이지, 상세상품 페이지
// 2. 로그인 버튼을 누르면 로그인 화면이 나온다. 
// 3. 로그인을 했을 때 로그인이 맞으면 상세 상품 페이지를 볼 수 있다.
// 4. 로그인을 못하면 로그인 화면 페이지가 나온다.
// 5. 상세 상품 페이지를 볼 수 있다.
// 6. 상품 검색을 할 수 있다.
// 7. 로그아웃 버튼을 누르면 로그인 버튼이 나온다.



function App() {
  let [authenticate, setAuthenticate] = useState(false)


  return (
    <div>
      <Nav authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/Login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="/Product/:id"
          element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
