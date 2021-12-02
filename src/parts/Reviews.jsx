import React from 'react';

import DummyPerson0 from 'assets/images/dummy-person-review-(0).png';
import DummyPerson1 from 'assets/images/dummy-person-review-(1).png';
import DummyPerson2 from 'assets/images/dummy-person-review-(2).png';
import DummyPerson3 from 'assets/images/dummy-person-review-(3).png';
import DummyPerson4 from 'assets/images/dummy-person-review-(4).png';

export default function Reviews() {
  return (
    <section className="container-fluid mt-3">
      <div className="row" style={{ marginLeft: 120 }}>
        <h2 className="text-black font-weight-medium line-height-1">
          Happy people with happy pets
        </h2>
      </div>
      <div className="row wrapper-review">
        <div class="card card-container">
          <div class="row no-gutters">
            <div
              class="col-md-5 card-image-review"
              style={{ background: '#ffff' }}
            >
              <img src={DummyPerson0} class="card-img-top h-100" alt="..." />
            </div>
            <div class="col-md-7">
              <div class="card-body align-self-center">
                <p class="card-text text-black">
                  I found a match with my cat and it's so adorable. i just lost
                  my part of family and bongsor just replaced it with love. he
                  changed our lives, also he love to shaking his hands to me.
                </p>
                <h4
                  class="card-title font-weight-normal pt-4"
                  style={{ color: '#564D4D' }}
                >
                  Jennie
                </h4>
                <h6
                  className="font-weight-light text-font-desc"
                  style={{ marginTop: -8 }}
                >
                  Product Manager
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="card card-container">
          <div class="row no-gutters">
            <div
              class="col-md-5 card-image-review"
              style={{ background: '#ffff' }}
            >
              <img src={DummyPerson1} class="card-img-top h-100" alt="..." />
            </div>
            <div class="col-md-7">
              <div class="card-body align-self-center">
                <p class="card-text text-black">
                  I found a match with my cat and it's so adorable. i just lost
                  my part of family and bongsor just replaced it with love. he
                  changed our lives, also he love to shaking his hands to me.
                </p>
                <h4
                  class="card-title font-weight-normal pt-4"
                  style={{ color: '#564D4D' }}
                >
                  Jennie
                </h4>
                <h6
                  className="font-weight-light text-font-desc"
                  style={{ marginTop: -8 }}
                >
                  Product Manager
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="card card-container">
          <div class="row no-gutters">
            <div
              class="col-md-5 card-image-review"
              style={{ background: '#ffff' }}
            >
              <img src={DummyPerson2} class="card-img-top h-100" alt="..." />
            </div>
            <div class="col-md-7">
              <div class="card-body align-self-center">
                <p class="card-text text-black">
                  I found a match with my cat and it's so adorable. i just lost
                  my part of family and bongsor just replaced it with love. he
                  changed our lives, also he love to shaking his hands to me.
                </p>
                <h4
                  class="card-title font-weight-normal pt-4"
                  style={{ color: '#564D4D' }}
                >
                  Jennie
                </h4>
                <h6
                  className="font-weight-light text-font-desc"
                  style={{ marginTop: -8 }}
                >
                  Product Manager
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="card card-container">
          <div class="row no-gutters">
            <div
              class="col-md-5 card-image-review"
              style={{ background: '#ffff' }}
            >
              <img src={DummyPerson3} class="card-img-top h-100" alt="..." />
            </div>
            <div class="col-md-7">
              <div class="card-body align-self-center">
                <p class="card-text text-black">
                  I found a match with my cat and it's so adorable. i just lost
                  my part of family and bongsor just replaced it with love. he
                  changed our lives, also he love to shaking his hands to me.
                </p>
                <h4
                  class="card-title font-weight-normal pt-4"
                  style={{ color: '#564D4D' }}
                >
                  Jennie
                </h4>
                <h6
                  className="font-weight-light text-font-desc"
                  style={{ marginTop: -8 }}
                >
                  Product Manager
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="card card-container">
          <div class="row no-gutters">
            <div
              class="col-md-5 card-image-review"
              style={{ background: '#ffff' }}
            >
              <img src={DummyPerson4} class="card-img-top h-100" alt="..." />
            </div>
            <div class="col-md-7">
              <div class="card-body align-self-center">
                <p class="card-text text-black">
                  I found a match with my cat and it's so adorable. i just lost
                  my part of family and bongsor just replaced it with love. he
                  changed our lives, also he love to shaking his hands to me.
                </p>
                <h4
                  class="card-title font-weight-normal pt-4"
                  style={{ color: '#564D4D' }}
                >
                  Jennie
                </h4>
                <h6
                  className="font-weight-light text-font-desc"
                  style={{ marginTop: -8 }}
                >
                  Product Manager
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
