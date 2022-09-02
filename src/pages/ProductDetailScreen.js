import React, { useState } from 'react'
// import { fetchProducts }from '../Action/ProductAction'
import ProductImageDescription from '../components/ProductDetail/ProductImageDescription'
// import { listProducts } from '../Action/ProductAction'
// import {products}  from '../components/products/productsArray'


function ProductDetailScreen({match}) {

const [productData, setProductData] = useState([listProducts])


  async function listProducts()
{
  try{ 
    let data = await fetch(`https://onlineshopping.dreamhosters.com/api/products/`+ match.params.id,{

      method: "GET",
      headers: {
            Accept: 'application/json',
            Authorization: 'Bearer 3|X0z56Has1npKkVD9xDcWov91jBmtci6M6RDkdUlY'
          }
    })
    data = await data.json()
    setProductData(data);
    // localStorage.setItem('products',JSON.stringify(data))
    // console.log("The New One", data)
  }catch(error){
    
  }
  
}

console.log("Product Variant",productData.name);

  // const filterproduct = products.filter(pro => pro.id == match.params.id)
  // console.log("Filter Product",filterproduct)
  return (
    <div>
        
        {productData.map((product) => (
          <ProductImageDescription 
          productData = {product}
        />
            ))}
    </div>
  )
}

export default ProductDetailScreen