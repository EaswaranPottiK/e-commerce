import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Testimonial from '../../components/testimonial/Testimonial'
// import { useDispatch, useSelector } from 'react-redux'
// import { addToCart, deleteFromCart } from '../../redux/cartSlice'

const Home = () => {
  console.log('Thank you! Devknus Youtube channel from Easwaran')

  return (
    <Layout>
      <HeroSection/>
      <Filter/>
      <ProductCard/>
      <Testimonial/>
    </Layout>
  )
}

export default Home