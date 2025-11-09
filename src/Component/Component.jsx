
import React from 'react'
import Header from '../Apple/Header/Header'
import StoreComp from '../Apple/HeaderComp/Store/StoreComp'


const Component = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-grow'>
            <StoreComp />
        </main>
    </div>
  )
}

export default Component