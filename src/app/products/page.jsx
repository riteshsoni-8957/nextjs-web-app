import React from 'react'
import { getProducts } from "../../api/productsApi";
import "../components/home-components/serviceSection.css"
import Link from 'next/link';
import Image from "next/image";

export const metadata = {
  title: "Products Server Page",
  description: "Products Server Description",
};

async function ServicesServer() {
  let data = await getProducts()
  console.log("data: ", data);
  
  return (
    <div>
        {
            data.map((d) => {
                return (
                    <div key={d.id}>
                        <h1>
                            {d.name}
                        </h1>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ServicesServer