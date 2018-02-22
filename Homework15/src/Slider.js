import React, { Component } from 'react';
import SliderImages from './SliderImages';
// import { FontAwesome } from'react-fontawesome';

class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slides: [
                {
                    description: 'Stars 1',
                    url: 'https://cdn.pixabay.com/photo/2017/03/28/22/55/night-photograph-2183637_960_720.jpg',
                },
                {
                    description: 'Stars 2',
                    url: 'https://cdn.pixabay.com/photo/2015/08/20/02/04/delicate-arch-896885_960_720.jpg',
                },
                {
                    description: 'Stars 3',
                    url: 'https://cdn.pixabay.com/photo/2015/11/15/08/15/universe-1044107_960_720.jpg',
                },
                {
                    description: 'Stars 4',
                    url: 'https://cdn.pixabay.com/photo/2015/09/05/04/27/milky-way-923738_960_720.jpg',
                },
                {
                    description: 'Stars 5',
                    url: 'https://cdn.pixabay.com/photo/2017/10/12/20/15/photoshop-2845779_960_720.jpg'
                }
                ],
            current: 0,

        };
        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this)
    }

    componentDidMount() {
        this.inderval = setInterval(() => {
            this.nextImage();
        }, this.props.time)
    }

    componentWillUnmount() {
        clearInterval(this.inderval)
    }

    nextImage() {
        let index = this.state.current;
        if (index + 1 < this.state.slides.length) {
            this.setState({current: this.state.current + 1})
        } else {
            this.setState({current: 0})
        }
    }

    previousImage () {
        let index = this.state.current;
        if (index - 1 > -1) {
            this.setState({current: this.state.current - 1})
        } else {
            this.setState({current: this.state.slides.length - 1})
        }
    }

    render() {
        const slides = this.state;
        return (
            <div>
                {slides.slides.map(function (element, index) {
                    if( index === slides.current) {
                        return (<SliderImages
                            key={index}
                            url={element.url}
                            description={element.description}
                        />)
                    }
                })
            }
                <div className='button button-left'>
                    <button onClick={this.previousImage}>Prev</button>
                </div>
                <div className='button button-right'>
                    <button onClick={this.nextImage}>Next</button>
                </div>

            </div>
        );
    }
}

export default Slider;