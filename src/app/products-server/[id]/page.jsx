
import { getProductsDetails } from '@/api-services/servicesApi';
import ProductDetails from '../../components/common/productDetails'
import React from 'react'

export const metadata = {
  
};

async function page({params}) {
    metadata.title = "Product Server Details Page"
    metadata.description = "Product Server Details Description"

    const {id} = await params
    console.log(id);

    const data = await getProductsDetails(id)
    console.log(data);

  return (
    <>
      <ProductDetails data={data} />
    </>
  )
}

export default page