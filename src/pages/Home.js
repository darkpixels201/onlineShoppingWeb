import React from 'react'
import Header from '../components/Header/Header'
import HeaderSliderOne from '../components/Slider/HeroSliderOne'
import ProductScreen from './ProductScreen'

function Home() {
  return ( 
    <>
     <Header />
    <HeaderSliderOne />
    <ProductScreen />
    </>
   
  )
}

export default Home