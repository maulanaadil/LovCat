import React, { Component } from 'react';

import Header from 'parts/Header';
import Hero from 'parts/Hero';
import Worried from 'parts/Worried';
import Benefits from 'parts/Benefits';
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
      </>
    );
  }
}
