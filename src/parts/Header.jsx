import React from 'react';
import Fade from 'react-reveal';

import Button from 'elements/Button';
import BrandIcon from './BrandIcon';

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? ' active' : '';
  };

  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon />

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item${getNavLinkClass('/adoption')}`}>
                  <Button className="nav-link" type="link" href="/adoption">
                    Adoption
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass('/lost-cats')}`}>
                  <Button className="nav-link" type="link" href="/lost-cats">
                    Lost Cats
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass('/sign-in')}`}>
                  <Button className="nav-link" type="link" href="/sign-in">
                    SignIn/SignUp
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
