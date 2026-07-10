"use client";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react'

function Footer() {
    const params = useParams();
    console.log(params);

  return (
    <>
        <footer>
            <div className="footer-container">

                <div className="footer-box">
                    <h2>WEB PAGE</h2>
                    <p>
                        We create modern, responsive and user-friendly websites.
                        Thank you for visiting our website.
                    </p>
                </div>

                <div className="footer-box">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about-us">About</Link></li>
                        <li><Link href="/service">Services</Link></li>
                        <li><Link href="/products-server">Products Server</Link></li>
                    </ul>
                </div>

                <div className="footer-box">
                    <h3>Services</h3>
                    <ul>
                        <li><Link href="/service/Website Design">Website Design</Link></li>
                        <li><Link href="/service/Frontend Development">Frontend Development</Link></li>
                        <li><Link href="/service/Backend Development">Backend Development</Link></li>
                        <li><Link href="/service/Full Stack Development">Full Stack Development</Link></li>
                    </ul>
                </div>

                <div className="footer-box">
                    <h3>Contact</h3>
                    <p>
                        <a href="mailto:info@example.com"> Email: info@example.com </a>
                    </p>
                    <p>Phone: +91 9876543210</p>
                    <p>Lucknow, Uttar Pradesh</p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 WEB PAGE. All Rights Reserved.</p>
            </div>
        </footer>
    </>
  )
}

export default Footer