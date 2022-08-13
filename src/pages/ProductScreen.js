import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Product from '../components/products/Product'
import axios from "axios";
import { listProducts } from '../actions/productAction'
// import {products}  from '../components/products/productsArray'

function ProductScreen({ history }) {


  // const productList = useSelector((state) => state.productList);
  // const { error, loading, products } = productList;

  const dispatch = useDispatch();
  // const productList = useSelector((state) => state.productList);
  // const { error, loading, products } = productList;
  // console.log("Api Products",products)

  // let keyword = history.location.search;

//   const listProducts = {
//   method: 'GET',
//   // type: PRODUCT_LIST_REQUEST ,
//   url: 'https://onlineshopping.dreamhosters.com/api/products',
//   headers: {
//     Accept: 'application/json',
//     Authorization: 'Bearer 3|X0z56Has1npKkVD9xDcWov91jBmtci6M6RDkdUlY'
//   }
// };

// axios.request(listProducts).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

  useEffect(() => {
    dispatch(listProducts())
}, [])
const products = []

  return (
    <div>

    <div to="helloworld">Latest Products</div>
    
      <div>
        <Container>
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
        </Container>
      </div>
 
  </div>
  )
}

export default ProductScreen