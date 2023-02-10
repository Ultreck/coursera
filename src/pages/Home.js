import React from 'react'
import Certificates from '../components/Certificates'
import HeroSectionOne from '../components/HeroSectionOne'
import HeroSectionTwo from '../components/HeroSectionTwo'
import Navbar from '../components/Navbar'
import SecondNavbar from '../components/SecondNavbar'
import SocialMedian from '../components/SocialMedian'

const Home = () => {
  return (
    <div className='grid pb-20'>
              <div className="text fixed w-full z-50">
            <Navbar/>
            </div>
            <div className="text w-full">
            <SecondNavbar/>
            </div>
            <div className="text w-full flex ">
                  <div className="text w-3/5">
                        <HeroSectionOne/>
                  </div>
                  <div className="text  w-2/5">
                        <HeroSectionTwo/>
                  </div>
            </div>
            <div className="text">
                  <SocialMedian/>
            </div>
            <div className="text overflow-auto">
                  <Certificates/>
            </div>
    </div>
  )
}

export default Home
