import React from 'react';
import './Website.css';
import navlogo from '../Resources/images/logo11.png'

const Website = () => {
    return (
        <section className="nav-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="menu-img">
                <img src={navlogo} width={100} alt="" />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="menu-nav">
                <ul>
                  <li><a href="">Home</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Services</a></li>
                  <li><a href="">Foundation</a></li>
                  <li><a href="">Patients & doctors</a></li>
                  </ul>
                </div>

              </div>
              <div className="col-lg-2">
                <div className="menu-input">
                <input type="text" placeholder='Search'/>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Website;