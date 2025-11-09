
import React from 'react'
import Products from './Products'
import Offers from './Offers'
import Latest from './Latest'
import Help from './Help'
import AppleStore from './AppleStore'
import Accessories from './Accessories'
import Louder from './Louder'
import Experience from './Experience'
import SpecialStore from './SpecialStore'
import QuickLinks from './QuickLinks'
import Footer from './Footer'


const StoreComp = () => {
  return (
    <div className='bg-gray-100'>
        <Offers />
        <Products />
        <Latest />
       <Help />
       <AppleStore />
       <Accessories />
       <Louder />
       <Experience />
       <SpecialStore />
       <QuickLinks />
       <Footer />
    </div>
  )
}

export default StoreComp