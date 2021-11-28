import React from 'react';
import Fade from 'react-reveal';

import ImageHero from 'assets/images/main-picture.png';
import Button from 'elements/Button';

export default function Hero(props) {
  return (
    <Fade>
      <section className="container pt-5">
        <div className="row align-items-center" style={{ marginTop: 20 }}>
          <div className="col-auto pr-5" style={{ width: 565 }}>
            <h1
              className="font-weight-bold text-black mb-3"
              style={{ lineHeight: '60px' }}
            >
              Find your adorable friend,
              <br />
              then happy by adopt it
            </h1>
            <p
              className="font-weight-normal text-font-desc mb-3"
              style={{ lineHeight: '30px', width: '452px' }}
            >
              When you find your friend, you save a loving animal by make them
              part of your family.
            </p>
            <Button
              className="btn px-5"
              isPrimary
              hasShadow
              type="link"
              href="/adoption"
            >
              Adopt Now
            </Button>
          </div>
          <div className="col-6 pl-5">
            <img
              src={ImageHero}
              alt="pic hero"
              className="img-fluid image-hero"
              style={{ width: 591, height: 'auto' }}
            />
          </div>
        </div>
      </section>
    </Fade>
  );
}
