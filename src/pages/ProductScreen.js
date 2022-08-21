import React, { useState, useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Product from '../components/products/Product'
import axios from "axios";
import {productAction}  from '../actions/productAction'
import Message from "../components/Message/Message";
import Loader from "../components/Loader";
// import {products}  from '../components/products/prodzzuctsArray'

function ProductScreen({ history }) {

// const [productData, setProductData] = useState([])
// const [variantData, setVariantData] = useState([])

// const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(Loader);


// async function listProducts()
// {
//     let data = await fetch("https://onlineshopping.dreamhosters.com/api/productVariants",{

//       method: "GET",
//       headers: {
//             Accept: 'application/json',
//             Authorization: 'Bearer 2|XHLStJdoVAPrxNtAn2ewfJw0Hq73TUwh0kgM9AK2'
//           }
//     })
//     .then(res => res.json())
//     .then(
//       (data) => {
//         setIsLoaded(true);
//         setProductData(data);
//   console.log("Product Data", data)
// },
//       (error) => {
//         setIsLoaded(true);
//         setError(error);
//       }
//       )
//     localStorage.setItem('products',JSON.stringify(data))
//     // console.log("The New One", data)
  
// }

// async function productVarition()
// {
  
//     let data = await fetch("https://onlineshopping.dreamhosters.com/api/productVariants/1",{

//       method: "GET",
//       headers: {
//             Accept: 'application/json',
//             Authorization: 'Bearer 3|X0z56Has1npKkVD9xDcWov91jBmtci6M6RDkdUlY'
//           }
//     })
//     // data = await data.json()

//     .then(res => res.json())
//       .then(
//         (data) => {
//           setIsLoaded(true);
//           setVariantData(data);
//     console.log("The New One", data)
//   },
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//         )

//     // {data.map((varition, key) => (
//     //   <>
//     //    let productvariant = varition.product,
//     //    varition.variant
//     //   </>
//     // ))}
//     // setVariantData(data);
//     localStorage.setItem('products',JSON.stringify(data))
  
// }


    // New Style API Upthere



  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  console.log("Redux Data", products);

  // console.log("Product Data UseState",productData)

  const dispatch = useDispatch();
  // productAction();
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
    productAction(dispatch);
    // dispatch(ProductAction)
    // dispatch(productVarition)
}, [])

// console.log("ListProduct", listProducts)
// const products = []

  return (
    <div>
 
    <div to="helloworld">Latest Products</div>

    {/* {error ? (<Message variant="danger">{error}</Message>) : */}
     <div>
        <Container>
          {/* {error ? (<Message variant="danger">{error}</Message>) : isLoaded ? (
            <h1>loading</h1>
          ) : ( */}
            <Row>
            {products.map((product) => (
              <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          {/* )} */}
        
        </Container>
        
      </div>
      {/* } */}
    
      
 
  </div>
  )
}

export default ProductScreen