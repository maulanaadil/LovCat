import React from 'react';
import Fade from 'react-reveal';

import ImageWorried from 'assets/images/secondary-picture.png';

export default function Worried(props) {
  return (
    <Fade>
      <section className="container container-worried">
        <div className="row align-items-center">
          <div className="col-6 pr-5">
            <img
              src={ImageWorried}
              alt="second pic"
              className="img-fluid image-worried"
            />
          </div>
          <div className="col-auto pl-5" style={{ width: '509px' }}>
            <h1
              className="font-weight-bold mb-3"
              style={{ lineHeight: '57px' }}
            >
              Worried about your <br />
              pet data?
            </h1>
            <p
              className="font-weight-normal text-font-desc mb-1"
              style={{ lineHeight: '36px' }}
            >
              Cat is the most adorable pet and can be your bestfriends as well,
              we take care the data of them as part of family while waiting for
              they new family
            </p>
            <a
              href="/lost-cats"
              className="nav-link text-primary text-check-it-out"
            >
              Check it out
            </a>
          </div>
        </div>
      </section>
    </Fade>
  );
}
