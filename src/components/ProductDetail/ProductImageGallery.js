import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import Swiper from "react-id-swiper";
import { IoIosExpand } from "react-icons/io";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

const ProductImageGallery = ({ product }) => {
  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);

  // effect for swiper slider synchronize
  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);

  console.log('gallerySwiper', gallerySwiper);
  console.log('thumbnailSwiper', thumbnailSwiper);

  // swiper slider settings
  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    loopedSlides: 4,
    slideToClickedSlide: true,
    loop: true,
    effect: "fade"
  };

  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    loopedSlides: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <div style={{height: "100"}}>
        <MdOutlineArrowBackIosNew size="1.5em" />
        </div>
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <div style={{height: "100"}}>
        <MdOutlineArrowForwardIos size="1.5em"  />
        </div>
      </button>
    )
  };

  return (
    <Fragment>
      <div className="product-large-image-wrapper">
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
        <LightgalleryProvider>
          <Swiper {...gallerySwiperParams}>
            {product.image &&
              product.image.map((single, key) => {
                return (
                  <div key={key}>
                    <LightgalleryItem
                      group="any"
                      src={process.env.PUBLIC_URL + single}
                    >
                      <button>
                        {/* <i className="pe-7s-expand1"></i> */}
                        <IoIosExpand />
                      </button>
                    </LightgalleryItem>
                    <div className="single-image">
                      <img
                        src={process.env.PUBLIC_URL + single}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
          </Swiper>
        </LightgalleryProvider>
      </div>
      
      {/* Bottom Image Swiper */}
      {product.image && product.image.length >1 ? (
        <div className="product-small-image-wrapper mt-15">
        <Swiper {...thumbnailSwiperParams}>
          {product.image &&
            product.image.map((single, key) => {
              return (
                <div key={key}>
                  <div className="single-image">
                    <img
                      src={process.env.PUBLIC_URL + single}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
        </Swiper>
      </div>
      ) : 
      ("")}

      
    </Fragment>
  );
};

ProductImageGallery.propTypes = {
  product: PropTypes.object
};

export default ProductImageGallery;
