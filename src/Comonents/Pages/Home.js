import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section className='banner-section'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="banner-info">
                        <h1>St Andrew's,
                            where life is taken care of.</h1>
                            <p>
                                <button>Read More</button>
                                <button>Contact</button>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </section>
    );
};

export default Home;