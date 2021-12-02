import React from 'react';

import Button from 'elements/Button';

export default function Footer(props) {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <p className="text-brand-color font-weight-bold">
              LOV<span className="text-black">CAT.</span>
            </p>
            <p className="brand-tagline text-font-desc font-weight-normal">
              To support us on building this website. just hire and donate us.
            </p>
            <Button isDonate type="link" href="/" className="btn-block">
              Donate Us
            </Button>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2 font-weight-medium">Pet Adoption</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/adoption">
                  Share your cat
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/adoption">
                  Adoption list
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/">
                  Contact us
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2 font-weight-medium">Discussion</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/lost-cats">
                  Lost cats
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/lost-cats">
                  Forum
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/lost-cats">
                  Add lost cats
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Getting Touch</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="mailto:support@lovcat.id">
                  support@lovcat.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="/tel:+622122081996">
                  021-2208-1996
                </Button>
              </li>
              <li className="list-group-item">
                <span>LovCat Dago, Bandung</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2021 - All rights reserved - LovCat
          </div>
        </div>
      </div>
    </footer>
  );
}
