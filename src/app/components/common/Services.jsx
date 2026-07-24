import Link from 'next/link';
import React from 'react'

import serviceData from "../../api/service.json"
import Image from "next/image";

function Services() {
  return (
    <>
        {serviceData.map((item) => (
          <div className="product-card" key={item.id}>

            <Image 
              src={item.image} 
              alt={item.name} 
              width={900}
              height={900}
            />

            <h3>{item.name}</h3>

            <p>{item.description}</p>

            <Link href={`/service/${encodeURIComponent(item.name)}`}>
              <button>Show Details</button>
            </Link>

          </div>
        ))}
    </>
  )
}

export default Services;