import React from 'react';
import Fade from 'react-reveal';

export default function Recommends() {
  return (
    <Fade>
      <section className="container-fluid" style={{ marginTop: '80px' }}>
        <div className="row d-flex justify-content-center flex-nowrap mb-1">
          <h3 className="font-weight-medium line-height-1 text-font-desc">
            They want to meet you
          </h3>
        </div>
        <div className="row d-flex justify-content-center flex-nowrap mt-1">
          <h2 className="font-weight-bold line-height-1 text-black">
            Find your lovely pets
          </h2>
        </div>
        <div
          className="row-fluid pt-benefits"
          style={{ marginLeft: 189.6 }}
        ></div>
      </section>
    </Fade>
  );
}
