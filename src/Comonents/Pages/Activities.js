import React from 'react';
import './Activities.css';
import active1 from '../Resources/images/active1.jpg'
import active2 from '../Resources/images/active2.jpg'
import active3 from '../Resources/images/active3.jpg'
import active4 from '../Resources/images/active4.jpg'
import { AiOutlineLeft } from 'react-icons/ai';

const Activities = () => {
    return (
        <section className='activities-section'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="activities-info">
                            <img src={active1} width={250} alt="" />
                            <h3> <AiOutlineLeft /> Patient Info</h3>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="activities-info">
                            <img src={active2} width={250} alt="" />
                            <h3> <AiOutlineLeft /> Visiting Hours</h3>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="activities-info">
                            <img src={active3} width={250} alt="" />
                            <h3> <AiOutlineLeft /> Graduate Nursing</h3>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="activities-info">
                            <img src={active4} width={250} alt="" />
                            <h3> <AiOutlineLeft /> COVID - 19</h3>
                        </div>
                    </div>




                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="active-bottom">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="active-bottom-left">
                                        <h3>Online admissions</h3>
                                        <p>St Andrew's Hospital uses a secure online admission process to complete all your forms online.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="active-bottom-right">
                                        <button>Go To Online Admission</button>
                                        <button>Go To Online Payment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Activities;