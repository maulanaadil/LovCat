import React from 'react';
import Fade from 'react-reveal';
import Tilt from 'react-parallax-tilt';

import ImageHero from 'assets/images/image-hero.png';
import BackgroundHero from 'assets/images/background-vector-hero.png';
import VectorDot from 'assets/images/vector-dot.png';
import Button from 'elements/Button';

export default function Hero(props) {
  return (
    <Fade>
      <section className="container pt-5" style={{ marginBottom: 80 }}>
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
          <div className="col-6 pl-5 text-center">
            <img
              src={BackgroundHero}
              alt="background hero"
              className="img-fluid image-hero-background"
            />
            <Tilt
              className="parallax-effect-glare-scale"
              perspective={1200}
              glareEnable={true}
              glareMaxOpacity={0.45}
            >
              <img
                src={VectorDot}
                alt="vector dot"
                className="img-fluid img-vector-dot"
              />
            </Tilt>
            <img
              src={ImageHero}
              alt="pic hero"
              className="img-fluid image-hero"
            />
          </div>
        </div>
      </section>
    </Fade>
  );
}
