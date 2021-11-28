import React from 'react';
import Fade from 'react-reveal';

import Button from 'elements/Button';

import RecommendCat1 from 'assets/images/recommend-cat-1.png';
import RecommendCat2 from 'assets/images/recommend-cat-2.png';
import RecommendCat3 from 'assets/images/recommend-cat-3.png';
import RecommendCat4 from 'assets/images/recommend-cat-4.png';
import RecommendCat5 from 'assets/images/recommend-cat-5.png';

export default function Recommends(props) {
  return (
    <Fade>
      <section className="container-fluid pb-5" style={{ marginTop: '80px' }}>
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
        <div className="row pt-benefits pb-2 justify-content-center">
          <div className="col-2 mr-4-5">
            <div className="card" style={{ height: '315px', width: '237px' }}>
              <figure className="img-wrapper">
                <img
                  src={RecommendCat1}
                  alt="pic recommends"
                  className="img-cover img-size"
                />
              </figure>
              <div className="meta-wrapper">
                <Button
                  type="link"
                  href="/adoption/cat1"
                  className="stretched-link d-block text-black"
                >
                  <h3 className="ml-3 h4 font-weight-normal">Pew</h3>
                </Button>
                <span
                  className="ml-3 text-font-desc font-weight-light"
                  style={{ paddingBottom: 10 }}
                >
                  Playful, spoiled, nature
                </span>
              </div>
            </div>
          </div>

          <div className="col-2 mr-4-5">
            <div className="card" style={{ height: '315px', width: '237px' }}>
              <figure className="img-wrapper">
                <img
                  src={RecommendCat2}
                  alt="pic recommends"
                  className="img-cover img-size"
                />
              </figure>
              <div className="meta-wrapper">
                <Button
                  type="link"
                  href="/adoption/cat2"
                  className="stretched-link d-block text-black"
                >
                  <h3 className="ml-3 h4 font-weight-normal">Echan</h3>
                </Button>
                <span
                  className="ml-3 text-font-desc font-weight-light"
                  style={{ paddingBottom: 10 }}
                >
                  Spoiled, Shy
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mr-4-5">
            <div className="card" style={{ height: '315px', width: '237px' }}>
              <figure className="img-wrapper">
                <img
                  src={RecommendCat3}
                  alt="pic recommends"
                  className="img-cover img-size"
                />
              </figure>
              <div className="meta-wrapper">
                <Button
                  type="link"
                  href="/adoption/cat3"
                  className="stretched-link d-block text-black"
                >
                  <h3 className="ml-3 h4 font-weight-normal">Leo</h3>
                </Button>
                <span
                  className="ml-3 text-font-desc font-weight-light"
                  style={{ paddingBottom: 10 }}
                >
                  Overplay, Childish
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mr-4-5">
            <div className="card" style={{ height: '315px', width: '237px' }}>
              <figure className="img-wrapper">
                <img
                  src={RecommendCat4}
                  alt="pic recommends"
                  className="img-cover img-size"
                />
              </figure>
              <div className="meta-wrapper">
                <Button
                  type="link"
                  href="/adoption/cat4"
                  className="stretched-link d-block text-black"
                >
                  <h3 className="ml-3 h4 font-weight-normal">Caca</h3>
                </Button>
                <span
                  className="ml-3 text-font-desc font-weight-light"
                  style={{ paddingBottom: 10 }}
                >
                  Quiet, Shy
                </span>
              </div>
            </div>
          </div>
          <div className="col-2 mr-4-5">
            <div className="card" style={{ height: '315px', width: '237px' }}>
              <figure className="img-wrapper">
                <img
                  src={RecommendCat5}
                  alt="pic recommends"
                  className="img-cover img-size"
                />
              </figure>
              <div className="meta-wrapper">
                <Button
                  type="link"
                  href="/adoption/cat5"
                  className="stretched-link d-block text-black"
                >
                  <h3 className="ml-3 h4 font-weight-normal">Akuma</h3>
                </Button>
                <span
                  className="ml-3 text-font-desc font-weight-light"
                  style={{ paddingBottom: 10 }}
                >
                  Quiet, Funny
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
