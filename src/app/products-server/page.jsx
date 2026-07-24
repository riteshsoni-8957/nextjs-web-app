import React from 'react'
import { getProducts } from "../../api-services/servicesApi";
import "../components/home-components/serviceSection.css"
import Link from 'next/link';
import Image from "next/image";

export const metadata = {
  title: "Products Server Page",
  description: "Products Server Description",
};

async function ServicesServer() {
  let data = await getProducts()
  console.log(data);
  
  return (
      <section className="product-section">

      <h2 className="section-title">Our Products</h2>

      <div className="product-container">
          {data.map((item) => (
          <div className="product-card" key={item.id}>

            <image 
              src={item.images[0]} 
              alt={item.name} 
              width={300}
              height={300}
            />

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <Link href={`/products-server/${item.id}`}>
              <button>Show Details</button>
            </Link>

          </div>
        ))}
      </div>

    </section>
  )
}

export default ServicesServer