import React from 'react'
import "./bannerSection.css"
import Link from 'next/link'

function BannerSection() {
  return (
    <>
        <section className="home">
            <div className="home-content">

                <div className="left">
                <h1>Build Your Dream Website</h1>

                <p>
                    We create modern, responsive and user-friendly websites
                    for businesses, startups and personal brands.
                </p>

                <div className="btns">
                    <button className="btn btn1">Get Started</button>
                    <Link href="/about-us">
                        <button className="btn btn2">Learn More</button>
                    </Link>
                </div>
                </div>

                <div className="right">
                <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700"
                    alt="Hero"
                />
                </div>

            </div>
        </section>
    </>
  )
}

export default BannerSection