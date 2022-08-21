import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../../assets/css/product.css";

function Product({ product, props }) {
  // const { SubMenu, ItemGroup } = Menu;

// console.log(product.image.length)

  // const [modalShow, setModalShow] = useState(false);

  // const [price, setPrice] = useState([0, 0]);
  // const [ok, setOk] = useState(false);

  console.log("Image Data",product.image);

  return (
    <>
     <div className={`product-wrap`}>
          <div className="product-img">
            <div >
              <img src={`https://`+ product.image} />
              {/* <img src="https://media.idownloadblog.com/wp-content/uploads/2018/08/New-iPhone-XS-wallpaper-for-iPhone-8.jpg" /> */}
              {/* <Link to={`/product/${product.id}`}>
              <img
                className="default-img"
                src={product.image}
                alt=""
              />
              </Link> */}
              {/* <Link to={`/product/${product.id}`}>
              <img
                className="default-img"
                src={product.image[0]}
                alt=""
              />
              </Link>
              <Link to={`/product/${product.id}`}>
              {product.image.length > 1 ? (
                <img
                  className="hover-img"
                  src={product.image[1]}
                  alt=""
                />
              ) : (
                ""
              )}
              </Link> */}
            </div>
            {product.discount || product.new ? (
              <div className="product-img-badges">
                {product.discount ? (
                  <span className="pink">-{product.discount}%</span>
                ) : (
                  ""
                )}
                {product.new ? <span className="purple">New</span> : ""}
              </div>
            ) : (
              ""
            )}

            <div className="product-action">
              <div className="pro-same-action pro-wishlist">
                
                <button>
                  <AiOutlineHeart />
                </button>
              </div>
              <div className="pro-same-action pro-cart">
                {product.variation && product.variation.length >= 1 ? (
                  <button>
                    Select Option
                  </button>
                ) : product.stock && product.stock > 0 ? (
                  <button
                  
                  >
                    {" "}
                    Buy Now
                    {/* <i className="pe-7s-cart"></i>{" "} */}
                    
                  </button>
                ) : (
                  <button disabled className="active">
                    Out of Stock
                  </button>
                )}
              </div>

              <div className="pro-same-action pro-quickview">
                <button>
                  <FiEye />
                </button>
              </div>

            </div>
          </div>

          <div className="product-content text-center">
            <h3>
              <div to={process.env.PUBLIC_URL + "/product/" + product.id}>
                {product.name}
              </div>
            </h3>
            {product.rating && product.rating > 0 ? (
              <div className="product-rating">
                {/* <Rating ratingValue={product.rating} /> */}
              </div>
            ) : (
              ""
            )}
            {/* <div className="product-price">
              {discountedPrice !== null ? (
                <Fragment>
                  <span>{currency.currencySymbol + finalDiscountedPrice}</span>{" "}
                  <span className="old">
                    {currency.currencySymbol + finalProductPrice}
                  </span>
                </Fragment>
              ) : (
                <span>{currency.currencySymbol + finalProductPrice} </span>
              )}
            </div> */}
          </div>
        </div>
    </>
  );
}

export default Product;
