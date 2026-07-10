import React from 'react';

import './serviceSection.css';
import Services from '../common/Services.jsx';


function ServiceSection() {
  return (
    <section className="product-section">

      <h2 className="section-title">Our Services</h2>

      <div className="product-container">
        <Services/>
      </div>

    </section>
  );
};

export default ServiceSection;