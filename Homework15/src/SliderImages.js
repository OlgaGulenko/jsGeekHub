import React, { Component } from 'react';
// import Slider from './Slider';

class SliderImages extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='slider-image' style={{backgroundImage: `url(${this.props.url})`}}>
                    <span className='description'>{this.props.description}</span>

                </div>
            </div>
        );
    }
}

export default SliderImages;