import Link from 'next/link';
import React from 'react'

import serviceData from "../../api/service.json"

function Services() {
  return (
    <>
        {serviceData.map((item) => (
          <div className="product-card" key={item.id}>

            <img src={item.image} alt={item.name} />

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