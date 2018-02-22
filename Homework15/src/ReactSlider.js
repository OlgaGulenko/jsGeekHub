import React, { Component } from 'react';
import Slider from './Slider';
import './style.css';

class ReactSlider extends Component {
  render() {
    return (
      <div className="ReactSlider">
        <Slider time={7000} />
        <Slider time={5000} />
      </div>
    );
  }
}

export default ReactSlider;
