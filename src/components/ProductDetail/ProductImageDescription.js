import React from 'react'
import ProductDescriptionInfo from './ProductDescriptionInfo'
import ProductImageGallery from './ProductImageGallery'

function ProductImageDescription({ product, galleryType, }) {

    return (
        <div
        className={`shop-area`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
                <ProductImageGallery product={product} />
            </div>
            <div className="col-lg-6 col-md-6">
              {/* product description info */}
              <ProductDescriptionInfo
                product={product}
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProductImageDescription