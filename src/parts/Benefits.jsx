import React from 'react';
import { Fade, Zoom } from 'react-reveal';

import BackgroundVector from 'assets/images/background-primary-vector.png';
import BackgroundVectorFrame from 'assets/images/background-border-vector.png';
import BackgroundVectorSecondary from 'assets/images/background-secondary-vector.png';
import ImagePerson0 from 'assets/images/dummy-person-(0).png';
import ImagePerson1 from 'assets/images/dummy-person-(1).png';
import ImagePerson2 from 'assets/images/dummy-person-(2).png';
import ImagePerson3 from 'assets/images/dummy-person-(3).png';
import ImagePerson4 from 'assets/images/dummy-person-(4).png';
import ImagePerson5 from 'assets/images/dummy-person-(5).png';

export default function Benefits(props) {
  return (
    <Fade>
      <section className="container-fluid pt-benefits">
        <div className="row align-items-top" style={{ marginTop: 20 }}>
          <div className="col-5" style={{ marginLeft: 189.6 }}>
            <h1 className="font-weight-bold line-height-1 mb-5">
              Join to our community
              <br />
              for gathering love
            </h1>
            <div className="row align-items-start mb-3">
              <div className="col-6" style={{ width: '206px' }}>
                <h4 className="font-weight-medium">Discussion</h4>
                <p
                  className="font-weight-light text-font-desc line-height-1 mb-2"
                  style={{ width: '200px' }}
                >
                  Help other user by tell your experience about take care of
                  pets.
                </p>
              </div>
              <div
                className="col-6"
                style={{ width: '206px', marginLeft: -60 }}
              >
                <h4 className="font-weight-medium">Friendship</h4>
                <p
                  className="font-weight-light text-font-desc line-height-1 mb-2"
                  style={{ width: '200px' }}
                >
                  Having new friends for sharing experience with pets.
                </p>
              </div>
            </div>
            <div className="row align-items-start">
              <div className="col-6" style={{ width: '206px' }}>
                <h4 className="font-weight-medium">Sharing</h4>
                <p
                  className="font-weight-light text-font-desc line-height-1 mb-2"
                  style={{ width: '200px' }}
                >
                  Share a lot of news about pets.
                </p>
              </div>
              <div
                className="col-6"
                style={{ width: '206px', marginLeft: -60 }}
              >
                <h4 className="font-weight-medium">Security</h4>
                <p
                  className="font-weight-light text-font-desc line-height-1 mb-2"
                  style={{ width: '200px' }}
                >
                  Promising the user or your pets data will be safe.{' '}
                </p>
              </div>
            </div>
          </div>
          <Zoom delay={1}>
            <img
              src={BackgroundVector}
              alt=""
              className="img-fluid position-absolute background-vector"
              style={{
                zIndex: -3,
                width: 810,
                left: 700,
                textAlign: 'end',
              }}
            />

            <img
              src={BackgroundVectorFrame}
              alt=""
              className="img-fluid position-absolute background-vector"
              style={{
                zIndex: -2,
                margin: '5px 0 20px 0',
                textAlign: 'end',
                left: 700,
              }}
            />
            <img
              src={BackgroundVectorSecondary}
              alt=""
              className="img-fluid position-absolute background-vector-secondary"
              style={{
                zIndex: -1,
                margin: '5px 0 20px 185px',
                textAlign: 'end',
                left: 700,
                height: '497px',
                width: 'auto',
              }}
            />
          </Zoom>
          <div className="col-auto container-fluid position-relative">
            <div className="row align-items-start mb-3 community-pics">
              <div className="col-4 col-md-4">
                <img
                  src={ImagePerson0}
                  alt="person pic 0"
                  className="card-person-picture"
                />
              </div>
              <div className="col-4 col-md-4">
                <img
                  src={ImagePerson1}
                  alt="person pic 1"
                  className="card-person-picture"
                />
              </div>
              <div className="col-4 col-md-4">
                <img
                  src={ImagePerson2}
                  alt="person pic 2"
                  className="card-person-picture"
                />
              </div>
            </div>
            <div className="row align-items-start mb-3 community-pics">
              <div className="col-4 col-md-4">
                <img
                  src={ImagePerson3}
                  alt="person pic 3"
                  className="card-person-picture"
                />
              </div>
              <div className="col-4 col-md-4">
                <img
                  src={ImagePerson4}
                  alt="person pic 4"
                  className="card-person-picture"
                />
              </div>
              <div className="col-4 col-md-4">
                <img
                  src={ImagePerson5}
                  alt="person pic 5"
                  className="card-person-picture"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
