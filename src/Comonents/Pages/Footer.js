import React from 'react';
import './Footer.css'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';

const Footer = () => {
    return (
        <section className='footer-section'>
             <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer-item">
                        <h3> St Andrew's Hospital</h3>
                        <p>  <FaMapMarkerAlt className='f-icon'/> 350 South Terrace, Adelaide SA 5000 </p>
                        <p><a href=""><IoIosCall  className='f-icon'/> (08) 8408 2111</a></p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                         <div className="footer-item">
                            <h3>Foundation</h3>
                            <p><a href="">Donate</a></p>
                            <p><a href="">Friends of St Andrew's</a></p>
                         </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="footer-item">
                            <h3>Careers</h3>
                            <p><a href="">Current Vacancies</a></p>
                            <p><a href="">Hear from our people</a></p>
                            <p><a href="">Meet our Leaders</a></p>
                            <p><a href="">Why join our team?</a></p>
                            <p><a href="">Nursing Specialties at St Andrew's</a></p>
                            <p><a href="">Graduate Nurse Program</a></p>
                            <p><a href="">Relocating to Adelaide?</a></p>
                            <p><a href="">Pre-employment Checks</a></p>
                         </div>
                    </div>
                    <div className="col-lg-3">
                    <div className="footer-item">
                            <h3>Patient Admission</h3>
                            <p><a href="">Online Patient Admissions</a></p>
                            <p><a href="">Patient Feedback</a></p>
                         </div>
                    </div>
                </div>
             </div>
        </section>
    );
};

export default Footer;