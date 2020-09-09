import React, { Component } from 'react';
import Banner1 from '../../../Assets/Images/banner1.png'
import Banner2 from '../../../Assets/Images/banner2.png'
import Banner3 from '../../../Assets/Images/banner3.jpg'


class Carousel extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Banner1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Banner2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Banner3} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>
        );
    }
}

export default Carousel;
