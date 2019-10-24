import React from 'react'
import Newarrival from './Newarrival'
import PopularCategories from './PopularCategories'
import AnotherCategory from './AnotherCategory'
import Category from './Category'
import PopularBrands from './PopularBrands'
import LastCategory from './LastCategory'
import Footer from './Footer'
import Carousels from './Carousels'


const Home = () =>{
  return(
    <div>
      <Carousels />
      <Newarrival />
      <PopularCategories />
      <AnotherCategory />
      <Category />
      <PopularBrands />
      <LastCategory />
      <Footer />
    </div>
  )
}

export default Home
