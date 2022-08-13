import React, {useSelector} from 'react'
// import { fetchProducts }from '../Action/ProductAction'
import ProductImageDescription from '../components/ProductDetail/ProductImageDescription'
import {products}  from '../components/products/productsArray'


function ProductDetailScreen({match}) {
  const filterproduct = products.filter(pro => pro.id == match.params.id)
  console.log("Filter Product",filterproduct)
  return (
    <div>
        
        {/* {products.map((product) => ( */}
            <div key={filterproduct.id} className="the-new-one">
              {/* {match.params.id} */}
              <ProductImageDescription 
                product ={filterproduct[0]}
              />
            </div> 
           {/* ))} */}
    </div>
  )
}

export default ProductDetailScreen