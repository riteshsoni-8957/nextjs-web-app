import React from 'react'
import '../components/home-components/serviceSection.css'
import ServiceSection from '../components/home-components/serviceSection'

export const metadata = {
  
};

function page() {
  metadata.title = "Services Page"
  metadata.description = "Services Description"

  return (
    <>
        <ServiceSection/>
    </>
  )
}

export default page