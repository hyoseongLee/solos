import React from 'react'
import ProductDetail from '../component/ProductDetail'
import {Navigate} from 'react-router-dom';

const PrivateRoute = ({authenticate}) => {
  return authenticate == true ? <ProductDetail /> : <Navigate to="/Login" />
}

export default PrivateRoute