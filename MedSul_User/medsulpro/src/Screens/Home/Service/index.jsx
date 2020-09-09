import React, { Component } from 'react';
import "./service.css";
import Service01 from '../../../Assets/Images/In-Home-Nursing.jpg'

class Service extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <img src={Service01} alt="" />
                        </div>

                        <div className="col-7">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Service;