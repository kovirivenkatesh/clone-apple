
import React from 'react'
import IPadHeader from './IPadHeader'
import IPadOffers from './IPadOffer'
import IPad from './IPad'
import Best from './Best'
import Get from './Get'
import Essentials from './Essentials'
import Significant from './Significant'
import IPadFoot from './IPadFoot'
import QuickLinks from './QuickLinks'

import Footer from './Footer'

const IPadComp = () => {
  return (
    <div>
       <IPadHeader />
       <IPadOffers />
       <IPad/>
       <Best />
       <Get />
       <Essentials />
       <Significant />
      <IPadFoot />
       <QuickLinks />
      <Footer />
     
    </div>
  )
}

export default IPadComp