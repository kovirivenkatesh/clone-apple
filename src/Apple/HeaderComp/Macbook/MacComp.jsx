import React from 'react'
import MacHeader from './Macheader'
import MacOffers from './MacOffer'
import Mac from './Mac'
import Dream from './Dream'
import Best from './Best'
import Get from './Get'
import Switch from './Switch'
import Essentials from './Essentials'
import Unlock from './Unlock'
import MacFoot from './MacFoot'
import Footer from './Footer'
import QuickLinks from './QuickLinks'

const MacComp = () => {
  return (
    <div>
        <MacHeader />
        <MacOffers />
        <Mac />
        <Dream />
        <Best />
        <Get />
        <Switch />
        <Essentials />
        <Unlock />
        <MacFoot />
        <QuickLinks />
        <Footer />
    </div>
  )
}

export default MacComp