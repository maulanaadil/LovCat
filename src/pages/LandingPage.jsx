import React, { Component } from 'react';

import Header from 'parts/Header';
import Hero from 'parts/Hero';
import Worried from 'parts/Worried';
import Benefits from 'parts/Benefits';
import Recommends from 'parts/Recommends';
import Reviews from 'parts/Reviews';
import Footer from 'parts/Footer';
export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef;
  }
  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero refMostPicked={this.refMostPicked} />
        <Worried refMostPicked={this.refMostPicked} />
        <Benefits refMostPicked={this.refMostPicked} />
        <Recommends refMostPicked={this.refMostPicked} />
        <Reviews refMostPicked={this.refMostPicked} />
        <Footer refMostPicked={this.refMostPicked} />
      </>
    );
  }
}
